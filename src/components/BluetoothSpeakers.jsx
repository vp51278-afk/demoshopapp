import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothSpeakers.css";
import CategorySection5 from "./CategorySection5";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function BluetoothSpeakers() {

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


  // =====================================================
  // FETCH PRODUCTS FROM MONGODB
  // =====================================================

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/products/category/BluetoothSpeakers"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        const data = await response.json();

        console.log(
          "Fetched Bluetooth Speakers:",
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
          "Unable to load Bluetooth Speakers."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);


  // =====================================================
  // ADD TO CART
  // =====================================================

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
        "http://localhost:5000/api/cart/add",
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


      // =================================================
      // SUCCESS
      // =================================================

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
        <CategorySection5 />

        <div className="shopBanner">

          <h1>
            Loading Bluetooth Speakers...
          </h1>

        </div>
      </>
    );

  }




  if (error) {

    return (
      <>
        <CategorySection5 />

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

      <CategorySection5 />


      {/* Cart Success Message */}

      {cartMessage && (

        <div className="cart-message">

          {cartMessage}

        </div>

      )}


      {/* Banner */}

      <div className="shopBanner">

        <h1>
          ✨ Bluetooth Speakers Collection ✨
        </h1>


        <p>
          ⚡ "Portable Sound. Endless Entertainment."
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

export default BluetoothSpeakers;