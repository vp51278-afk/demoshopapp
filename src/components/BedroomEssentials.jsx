import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BedroomEssentials.css";
import CategorySection2 from "./CategorySection2";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function BedroomEssentials() {

  const navigate = useNavigate();

  // Products
  const [products, setProducts] = useState([]);

  // Wishlist
  const [liked, setLiked] = useState([]);

  // Selected cards
  const [selected, setSelected] = useState([]);

  // Loading & Error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cart
  const [cartLoading, setCartLoading] = useState(null);
  const [cartMessage, setCartMessage] = useState("");


  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
         "https://demoshopapp-yfnk.vercel.app/api/products/category/Accessories"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        const data = await response.json();

        console.log(
          "Fetched Bedroom Essentials:",
          data
        );

        setProducts(data);

        setLiked(
          Array(data.length).fill(false)
        );

        setSelected(
          Array(data.length).fill(false)
        );

      } catch (err) {

        console.error(err);

        setError(
          "Unable to load Bedroom Essentials."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


 

  const handleAddToCart = async (productId) => {

    const token = localStorage.getItem("token");


    // Login check
    if (!token) {

      alert(
        "Please login first to add products to cart."
      );

      return;
    }


    // Product ID check
    if (!productId) {

      alert(
        "Product ID not found."
      );

      return;
    }


    try {

      setCartLoading(productId);

      setCartMessage("");


      const response = await fetch(
      "https://demoshopapp-yfnk.vercel.app/api/cart/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            productId: productId,
            quantity: 1,
          }),
        }
      );


      const data = await response.json();



      if (response.ok) {

        console.log(
          "Cart updated:",
          data
        );

        setCartMessage(
          "Product added to cart!"
        );


        setTimeout(() => {

          setCartMessage("");

        }, 2000);

      }


   

      else if (response.status === 401) {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

      }


      else {

        alert(
          data.message ||
          "Unable to add product to cart."
        );

      }

    } catch (error) {

      console.error(
        "Add to cart error:",
        error
      );

      alert(
        "Unable to connect to server."
      );

    } finally {

      setCartLoading(null);

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
        <CategorySection2 />

        <div className="shopBanner">

          <h1>
            Loading Bedroom Essentials...
          </h1>

        </div>
      </>
    );

  }


  if (error) {

    return (
      <>
        <CategorySection2 />

        <div className="shopBanner">

          <h1>
            {error}
          </h1>

        </div>
      </>
    );

  }


  return (
    <>

      {/* Category Section */}

      <CategorySection2 />


      {/* Cart Success Message */}

      {cartMessage && (

        <div className="cart-message">

          {cartMessage}

        </div>

      )}


      {/* Banner */}

      <div className="shopBanner">

        <h1>
          ✨ Bedroom Essentials Collection ✨
        </h1>


        <p>
          "Everything you need for the sleep you deserve."
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

export default BedroomEssentials;