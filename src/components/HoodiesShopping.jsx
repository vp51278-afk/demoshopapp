import React from "react";
import { useLocation } from "react-router-dom";
import "./HoodiesShopping.css";

import { addToCart } from "./addToCart";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function HoodiesShopping() {
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
          src={product.img || product.image}
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


      <div className="rightSection">

        {/* Product Name */}
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

       

        <div className="detailsBox">

          <h3>About this Item</h3>

          <ul>

            <li>
              Premium Quality Hoodie
            </li>

            <li>
              Stylish & Modern Design
            </li>

            <li>
              Soft & Comfortable Fabric
            </li>

            <li>
              Perfect for Winter & Casual Wear
            </li>

            <li>
              Durable & Easy to Maintain
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default HoodiesShopping;