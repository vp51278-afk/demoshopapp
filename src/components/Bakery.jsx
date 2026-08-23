import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bakery.css";
import CategorySection6 from "./CategorySection6";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Bakery() {

  // Navigation
  const navigate = useNavigate();

  // Products from MongoDB
  const [products, setProducts] = useState([]);

  // Wishlist & selected states
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState([]);

  // Loading & error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cart message
  const [cartMessage, setCartMessage] = useState("");



  useEffect(() => {

    fetch(
      `${process.env.REACT_APP_API_URL}/api/products/category/Bakery`
    )
      .then((res) => {

        if (!res.ok) {
          throw new Error(
            "Failed to fetch Bakery products"
          );
        }

        return res.json();
      })

      .then((data) => {

        console.log("Fetched Bakery:", data);

        setProducts(data);

        setLiked(
          Array(data.length).fill(false)
        );

        setSelected(
          Array(data.length).fill(false)
        );

        setLoading(false);
      })

      .catch((err) => {

        console.error(
          "Error fetching Bakery:",
          err
        );

        setError(
          "Unable to load Bakery products."
        );

        setLoading(false);
      });

  }, []);




  const handleAddToCart = async (productId) => {

    // Get JWT token
    const token = localStorage.getItem("token");

    // User must be logged in
    if (!token) {

      alert(
        "Please login first to add products to cart."
      );

      return;
    }


    // Check product ID
    if (!productId) {

      alert(
        "Product ID not found."
      );

      return;
    }


    try {

      const response = await fetch(
        "https://demoshopapp-yfnk.vercel.app/api/cart/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            productId: productId,
            quantity: 1,
          }),
        }
      );


      const data = await response.json();


      // Successful
      if (response.ok) {

        console.log(
          "Cart updated:",
          data
        );

        setCartMessage(
          "Product added to cart!"
        );


        // Remove message after 2 seconds
        setTimeout(() => {

          setCartMessage("");

        }, 2000);

      }


      // Unauthorized
      else if (response.status === 401) {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

      }


      // Other backend error
      else {

        alert(
          data.message ||
          "Unable to add product to cart."
        );
      }

    }

    catch (error) {

      console.error(
        "Add to cart error:",
        error
      );

      alert(
        "Unable to connect to server."
      );

    }
  };



  const toggleLike = (index) => {

    const temp = [...liked];

    temp[index] = !temp[index];

    setLiked(temp);
  };


  const toggleCard = (index) => {

    const temp = [...selected];

    temp[index] = !temp[index];

    setSelected(temp);
  };



  if (loading) {

    return (
      <>
        <CategorySection6 />

        <div className="loading">
          Loading Bakery Products...
        </div>
      </>
    );
  }



  if (error) {

    return (
      <>
        <CategorySection6 />

        <div className="error">
          {error}
        </div>
      </>
    );
  }




  return (
    <>

      {/* Category Section */}

      <CategorySection6 />


      {/* Cart Success Message */}

      {cartMessage && (

        <div className="cart-message">

          {cartMessage}

        </div>

      )}


      {/* Bakery Banner */}

      <div className="shopBanner">

        <h1>
          ✨ Bakery Collection ✨
        </h1>


        <p>
          "Taste the Freshness in Every Slice." 🍰
        </p>


        {products.length > 0 && (

          <button
            className="shopNowBtn"

            onClick={() =>
              navigate(
                "/home-decor-shopping",
                {
                  state: products[0],
                }
              )
            }
          >

            Shop Now

          </button>

        )}

      </div>


      {/* Products */}

      <div className="products">

        {products.map(
          (item, index) => (

            <div
              key={
                item._id || index
              }

              className={`cart ${
                selected[index]
                  ? "active"
                  : ""
              }`}

              onClick={() => {

                toggleCard(index);

                navigate(
                  "/home-decor-shopping",
                  {
                    state: item,
                  }
                );

              }}
            >


              {/* Wishlist */}

              <div
                className="wishlist"

                onClick={(e) => {

                  e.stopPropagation();

                  toggleLike(index);

                }}
              >

                {liked[index] ? (

                  <FaHeart
                    color="#123C7A"
                  />

                ) : (

                  <FaRegHeart />

                )}

              </div>


              {/* Product Image */}

              <img
                src={
                  item.image ||
                  item.img
                }

                alt={item.name}
              />


              {/* Product Name */}

              <h3 className="head">

                {item.name}

              </h3>


              {/* Rating */}

              <div className="rating">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span>

                  (
                  {item.reviews || 0}
                  )

                </span>

              </div>


              {/* Price */}

              <div className="price">

                <span className="newPrice">

                  ₹{item.price}

                </span>


                <span className="oldPrice">

                  ₹{item.oldPrice}

                </span>


                <span className="discount">

                  {item.discount}

                </span>

              </div>


              {/* Add To Cart */}
              <button
  className="cartBtn"
  onClick={(e) => {
    e.stopPropagation();
    addToCart(item);
  }}
>
  <FaShoppingCart style={{ marginRight: "8px" }} />
  Add to Cart
</button>
            </div>

          )
        )}

      </div>

    </>
  );
}


export default Bakery;