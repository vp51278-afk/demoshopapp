import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Beauty.css";
import CategorySection4 from "./CategorySection4";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Beauty() {
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

  // Cart message
  const [cartMessage, setCartMessage] = useState("");

  // Add to cart loading
  const [cartLoading, setCartLoading] = useState(null);




  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
         "https://demoshopapp-tn4i.vercel.app/api/products/category//Beauty"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        console.log("Fetched Beauty Products:", data);

        setProducts(data);

        setLiked(Array(data.length).fill(false));

        setSelected(Array(data.length).fill(false));

      } catch (err) {

        console.error(err);

        setError(
          "Unable to load Beauty products."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);


  const handleAddToCart = async (productId) => {

    // Get JWT token
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
      alert("Product ID not found.");
      return;
    }

    try {

      setCartLoading(productId);

      setCartMessage("");

      const response = await fetch(
        "https://demoshopapp-tn4i.vercel.app/api/cart/add",
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
        <CategorySection4 />

        <div className="shopBanner">

          <h1>
            Loading Beauty Products...
          </h1>

        </div>
      </>
    );
  }




  if (error) {

    return (
      <>
        <CategorySection4 />

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

      <CategorySection4 />


      {/* Cart Success Message */}

      {cartMessage && (

        <div className="cart-message">

          {cartMessage}

        </div>

      )}


      {/* Products */}

      <div className="products">

        {products.map((item, index) => (

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

              <FaStar
                className="lastStar"
              />

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

        ))}

      </div>

    </>
  );
}

export default Beauty;