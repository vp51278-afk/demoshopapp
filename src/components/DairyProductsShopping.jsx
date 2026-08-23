import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DairyProducts.css";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function DairyProductsShopping() {

  const location = useLocation();
  const product = location.state;

  const [loading, setLoading] = useState(false);
  const [cartMessage, setCartMessage] = useState("");



  if (!product) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Product Not Found
      </h2>
    );
  }




  const handleAddToCart = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Please login first to add products to cart."
      );
      return;
    }

    if (!product._id) {
      alert("Product ID not found.");
      return;
    }

    try {

      setLoading(true);
      const response = await fetch(
        "https://demoshopapp-yfnk.vercel.app/api/cart/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            productId: product._id,
            quantity: 1,
          }),
        }
      );

      const data = await response.json();


      if (response.ok) {

        setCartMessage(
          "Product added to cart! 🛒"
        );

        // Update Navbar cart count
        window.dispatchEvent(
          new Event("cartUpdated")
        );

        setTimeout(() => {
          setCartMessage("");
        }, 2000);

      } else {

        if (response.status === 401) {

          localStorage.removeItem("token");
          localStorage.removeItem("user");

          alert(
            "Your session has expired. Please login again."
          );

          return;
        }

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

      setLoading(false);

    }
  };


  return (
    <>

      {/* Cart Success Message */}

      {cartMessage && (

        <div
          className="cart-message"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#123C7A",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            zIndex: 9999,
          }}
        >
          {cartMessage}
        </div>

      )}


      <div className="shoppingPage">


        {/*
            LEFT SECTION
        */}

        <div className="leftSection">

          <img
            src={
              product.image ||
              product.img
            }
            alt={product.name}
            className="mainImage"
          />


          <div className="buttonBox">

            <button
              className="cartButton"
              onClick={handleAddToCart}
              disabled={loading}
            >

              <FaShoppingCart />

              {loading
                ? "Adding..."
                : "Add to Cart"}

            </button>


            <button className="buyButton">

              <FaBolt />

              Buy Now

            </button>

          </div>

        </div>


        {/* 
            RIGHT SECTION
      */}

        <div className="rightSection">

          <h1>
            {product.name}
          </h1>


          {/* Rating */}

          <div className="ratingBox">

            <span className="rating">
              4.5
            </span>

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            <span>
              ({product.reviews || 0} Ratings)
            </span>

          </div>


          {/* Price */}

          <div className="price">

            <span className="newPrice">
              ₹{product.price}
            </span>

            {product.oldPrice && (

              <del className="oldPrice">
                ₹{product.oldPrice}
              </del>

            )}

            <span className="discount">
              {product.discount}
            </span>

          </div>


          <hr />


          {/* Delivery */}

          <div className="deliveryBox">

            <h3>
              Delivery
            </h3>

            <p>

              <FaTruck
                style={{
                  color: "green",
                }}
              />

              Free Delivery by Tomorrow

            </p>

          </div>


          {/* Offers */}

          <div className="offerBox">

            <h3>
              Available Offers
            </h3>

            <ul>

              <li>
                ✔ Bank Offer: 10% Instant Discount
              </li>

              <li>
                ✔ No Cost EMI Available
              </li>

              <li>
                ✔ Free Delivery on Orders above ₹499
              </li>

              <li>
                ✔ Cash on Delivery Available
              </li>

            </ul>

          </div>


          <hr />


          {/* Features */}

          <div className="featureBox">

            <div>

              <FaTruck />

              <p>
                Fast Delivery
              </p>

            </div>


            <div>

              <FaUndo />

              <p>
                7 Days Return
              </p>

            </div>


            <div>

              <FaShieldAlt />

              <p>
                Secure Payment
              </p>

            </div>

          </div>


          <hr />


          {/* Product Details */}

          <div className="detailsBox">

            <h3>
              About this Item
            </h3>

            <ul>

              <li>
                Premium Quality Dairy Product
              </li>

              <li>
                Fresh & Naturally Selected
              </li>

              <li>
                Rich in Essential Nutrients
              </li>

              <li>
                Hygienically Packed
              </li>

              <li>
                Suitable for Daily Consumption
              </li>

            </ul>

          </div>

        </div>

      </div>

    </>
  );
}

export default DairyProductsShopping;