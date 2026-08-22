import React from "react";
import { useLocation } from "react-router-dom";
import "./DiningShopping.css";

import { addToCart } from "./addToCart";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function DiningShopping() {

  const location = useLocation();
  const product = location.state;




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




  const handleAddToCart = () => {
    addToCart(product);
  };


  return (
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

          {/* ADD TO CART */}

          <button
            className="cartButton"
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
            Add to Cart
          </button>


          {/* BUY NOW */}

          <button
            className="buyButton"
            onClick={() =>
              alert(
                "Buy Now will be available soon."
              )
            }
          >
            <FaBolt />
            Buy Now
          </button>

        </div>

      </div>


      {/* 
          RIGHT SECTION
    */}

      <div className="rightSection">


        {/* Product Name */}

        <h1>
          {product.name}
        </h1>


        {/* 
            RATING
    */}

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


        {/* 
            PRICE
        */}

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


        {/* 
            DELIVERY
        */}

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


        {/* 
            OFFERS
       */}

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


        {/* 
            FEATURES
        */}

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


        {/* 
            PRODUCT DETAILS
       */}

        <div className="detailsBox">

          <h3>
            About this Item
          </h3>

          <ul>

            <li>
              Premium Quality Dining Product
            </li>

            <li>
              Stylish & Modern Design
            </li>

            <li>
              Perfect for Dining & Home Use
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

export default DiningShopping;