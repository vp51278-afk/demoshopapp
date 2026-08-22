import React from "react";
import { useLocation } from "react-router-dom";
import "./SmartphonesShopping.css";
import { addToCart } from "./addToCart";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function SmartphonesShopping() {
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

  // MongoDB image handling
  const productImage = `/${String(
    product.image || product.img || ""
  ).replace(/^\/+/, "")}`;

  return (
    <>
      <div className="shoppingPage">

        {/* Left Section */}
        <div className="leftSection">

          <img
            src={productImage}
            alt={product.name}
            className="mainImage"
          />

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
              onClick={() => {
                console.log("Buy Now:", product);
              }}
            >
              <FaBolt />
              Buy Now
            </button>

          </div>
        </div>

        {/* Right Section */}
        <div className="rightSection">

          {/* Product Name */}
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
              ({product.reviews || 0} Ratings)
            </span>

          </div>

          {/* Price */}
          <h2 className="price">

            ₹{product.price}

            {product.oldPrice && (
              <del>
                ₹{product.oldPrice}
              </del>
            )}

            {product.discount && (
              <span>
                {product.discount}
              </span>
            )}

          </h2>

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
                Premium Quality Product
              </li>

              <li>
                Latest Smartphone Technology
              </li>

              <li>
                Stylish & Modern Design
              </li>

              <li>
                High Performance & Reliable
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

export default SmartphonesShopping;