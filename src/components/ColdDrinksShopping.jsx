import React from "react";
import { useLocation } from "react-router-dom";
import "./ColdDrinksShopping.css";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function ColdDrinksShopping() {
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

      {/* Left Section */}
      <div className="leftSection">

        <img
          src={product.img}
          alt={product.name}
          className="mainImage"
        />

        <div className="buttonBox">

          <button className="cartButton">
            <FaShoppingCart />
            Add to Cart
          </button>

          <button className="buyButton">
            <FaBolt />
            Buy Now
          </button>

        </div>
      </div>

      {/* Right Section */}
      <div className="rightSection">

        <h1>{product.name}</h1>

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
            ({product.reviews} Ratings)
          </span>

        </div>

        {/* Price */}
        <div className="price">

          <span className="newPrice">
            ₹{product.price}
          </span>

          <del className="oldPrice">
            ₹{product.oldPrice}
          </del>

          <span className="discount">
            {product.discount}
          </span>

        </div>

        <hr />

        {/* Delivery */}
        <div className="deliveryBox">

          <h3>Delivery</h3>

          <p>
            <FaTruck style={{ color: "green" }} />
            Free Delivery by Tomorrow
          </p>

        </div>

        {/* Offers */}
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

        {/* Features */}
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

        {/* Product Details */}
        <div className="detailsBox">

          <h3>About this Item</h3>

          <ul>

            <li>
              Refreshing & Quality Beverage
            </li>

            <li>
              Great Taste & Refreshing Flavor
            </li>

            <li>
              Perfect for Parties & Gatherings
            </li>

            <li>
              Hygienically Packed
            </li>

            <li>
              Best Served Chilled
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default ColdDrinksShopping;