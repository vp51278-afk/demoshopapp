import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AccessoriesShopping.css";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function AccessoriesShopping() {

  const location = useLocation();
  const product = location.state;

  const [cartMessage, setCartMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Safety Check
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Product Not Found
      </h2>
    );
  }

  // =====================================================
  // ADD TO CART
  // =====================================================

  const handleAddToCart = async () => {

    const token = localStorage.getItem("token");

    // Login Check
    if (!token) {
      alert("Please login first to add products to cart.");
      return;
    }

    // Product ID Check
    if (!product._id) {
      alert("Product ID not found.");
      console.error("Product data:", product);
      return;
    }

    try {

      setLoading(true);
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
            productId: product._id,
            quantity: 1,
          }),
        }
      );

      const data = await response.json();

      // SUCCESS
      if (response.ok) {

        console.log("Product added to cart:", data);

        setCartMessage("Product added to cart!");

        setTimeout(() => {
          setCartMessage("");
        }, 2000);

      }

      // UNAUTHORIZED
      else if (response.status === 401) {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

      }

      // OTHER ERROR
      else {

        alert(
          data.message ||
          "Unable to add product to cart."
        );

      }

    } catch (error) {

      console.error("Add to cart error:", error);

      alert("Unable to connect to server.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <>

      {/* Success Message */}

      {cartMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#123C7A",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            zIndex: 9999,
            fontWeight: "600",
          }}
        >
          {cartMessage}
        </div>
      )}

      <div className="shoppingPage">

        {/* LEFT SECTION */}

        <div className="leftSection">

          <img
            src={product.image || product.img}
            alt={product.name}
            className="mainImage"
          />

          <div className="buttonBox">

            {/* ADD TO CART */}

            <button
              className="cartButton"
              onClick={handleAddToCart}
              disabled={loading}
            >

              <FaShoppingCart />

              {loading ? "Adding..." : "Add to Cart"}

            </button>

            {/* BUY NOW */}

            <button className="buyButton">

              <FaBolt />

              Buy Now

            </button>

          </div>

        </div>

        {/* RIGHT SECTION */}

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

          <h2 className="price">

            ₹{product.price}

            <del>
              ₹{product.oldPrice}
            </del>

            <span>
              {product.discount}
            </span>

          </h2>

          <hr />

          {/* DELIVERY */}

          <div className="deliveryBox">

            <h3>
              Delivery
            </h3>

            <p>

              <FaTruck style={{ color: "green" }} />

              Free Delivery by Tomorrow

            </p>

          </div>

          {/* OFFERS */}

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
                ✔ Cash on Delivery Available
              </li>

            </ul>

          </div>

          <hr />

          {/* FEATURES */}

          <div className="featureBox">

            <div>
              <FaTruck />
              <p>Fast Delivery</p>
            </div>

            <div>
              <FaUndo />
              <p>7 Days Return</p>
            </div>

            <div>
              <FaShieldAlt />
              <p>Secure Payment</p>
            </div>

          </div>

          <hr />

          {/* PRODUCT DETAILS */}

          <div className="detailsBox">

            <h3>
              About this Item
            </h3>

            <ul>

              <li>
                Premium Quality Product
              </li>

              <li>
                Stylish & Modern Design
              </li>

              <li>
                Best for Home Decoration
              </li>

              <li>
                Easy to Use & Maintain
              </li>

              <li>
                Durable Premium Finish
              </li>

            </ul>

          </div>

        </div>

      </div>

    </>
  );
}

export default AccessoriesShopping;