import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ChipsShopping.css";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function ChipsShopping() {

  const location = useLocation();

  const product = location.state;

  const [cartLoading, setCartLoading] = useState(false);
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

    // Get login token
    const token = localStorage.getItem("token");


    // Login check
    if (!token) {

      alert(
        "Please login first to add products to cart."
      );

      return;
    }


    // Product ID check
    if (!product._id) {

      alert(
        "Product ID not found."
      );

      console.error(
        "Product:",
        product
      );

      return;
    }


    try {

      setCartLoading(true);
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
            productId: product._id,
            quantity: 1,
          }),
        }
      );


      const data = await response.json();


    

      if (response.ok) {

        console.log(
          "Product added to cart:",
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

      setCartLoading(false);

    }
  };


  return (
    <>


      {/* 
          SUCCESS MESSAGE
    */}

      {cartMessage && (

        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#123C7A",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            zIndex: 9999,
            fontWeight: "600",
          }}
        >
          {cartMessage}
        </div>

      )}


      {/*
          SHOPPING PAGE
       */}

      <div className="shoppingPage">


        {/* 
            LEFT SECTION
         */}

        <div className="leftSection">


          {/* Product Image */}

          <img
            src={
              product.image ||
              product.img
            }
            alt={product.name}
            className="mainImage"
          />


          <div className="buttonBox">


            {/* 
                ADD TO CART BUTTON
            */}

            <button
              className="cartButton"
              onClick={handleAddToCart}
              disabled={cartLoading}
            >

              <FaShoppingCart />

              {cartLoading
                ? "Adding..."
                : "Add to Cart"
              }

            </button>


            {/*
                BUY NOW BUTTON
            */}

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
                Premium Quality Product
              </li>

              <li>
                Fresh & Crispy Snack
              </li>

              <li>
                Perfect for Quick Snacking
              </li>

              <li>
                Easy to Carry & Store
              </li>

              <li>
                Delicious Taste & Quality
              </li>

            </ul>

          </div>

        </div>

      </div>

    </>
  );
}


export default ChipsShopping;