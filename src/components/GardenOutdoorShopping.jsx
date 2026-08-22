import React from "react";
import { useLocation } from "react-router-dom";
import "./GardenOutdoorShopping.css";
import { addToCart } from "./addToCart";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function GardenOutdoorShopping() {
  const location = useLocation();

  const product = location.state;

  // Safety Check
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="shoppingPage">

     
      <div className="leftSection">

        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="mainImage"
        />

        {/* Buttons */}
        <div className="buttonBox">

          {/* Add To Cart */}
          <button
            className="cartButton"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          {/* Buy Now */}
          <button
            className="buyButton"
            onClick={() => addToCart(product)}
          >
            <FaBolt />
            Buy Now
          </button>

        </div>
      </div>

     
      <div className="rightSection">

        {/* Product Name */}
        <h1>{product.name}</h1>

       
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

        {/* =========================
            Price
        ========================= */}
        <div className="price">

          <span className="newPrice">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <del className="oldPrice">
              ₹{product.oldPrice}
            </del>
          )}

          {product.discount && (
            <span className="discount">
              {product.discount}
            </span>
          )}

        </div>

        <hr />

      
        <div className="deliveryBox">

          <h3>Delivery</h3>

          <p>
            <FaTruck style={{ color: "green" }} />
            Free Delivery by Tomorrow
          </p>

        </div>

      
        <div className="offerBox">

          <h3>Available Offers</h3>

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

        {/* =========================
            Features
        ========================= */}
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

        {/* =========================
            Product Details
        ========================= */}
        <div className="detailsBox">

          <h3>About this Item</h3>

          <ul>

            <li>
              Premium Quality Garden & Outdoor Product
            </li>

            <li>
              Stylish & Durable Design
            </li>

            <li>
              Perfect for Garden & Outdoor Spaces
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
  );
}

export default GardenOutdoorShopping;