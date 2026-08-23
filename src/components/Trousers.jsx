import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Trousers.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Trousers() {
  // Navigation
  const navigate = useNavigate();

  // Products from MongoDB
  const [products, setProducts] = useState([]);

  // Wishlist state
  const [liked, setLiked] = useState([]);

  // Selected card state
  const [selected, setSelected] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchTrousers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://demoshopapp-yfnk.vercel.app/api/products/category/Trousers"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trousers");
        }

        const data = await response.json();

        console.log("Trousers fetched from MongoDB:", data);

        setProducts(data);

        // Create wishlist state according to product count
        setLiked(Array(data.length).fill(false));

        // Create selected state according to product count
        setSelected(Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching trousers:", error);

        setError("Unable to load trousers.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrousers();
  }, []);


  const toggleLike = (index) => {
    setLiked((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };


  const toggleCard = (index) => {
    setSelected((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };

 
  const addToCart = (item) => {
    try {
      // Get existing cart
      const existingCart =
        JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists
      const existingProductIndex = existingCart.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (existingProductIndex !== -1) {
        // Increase quantity
        existingCart[existingProductIndex].quantity =
          (existingCart[existingProductIndex].quantity || 1) + 1;
      } else {
        // Add new product
        existingCart.push({
          ...item,
          img: `/${String(item.image || "").replace(/^\/+/, "")}`,
          quantity: 1,
        });
      }

      // Save cart
      localStorage.setItem(
        "cart",
        JSON.stringify(existingCart)
      );

      alert("Product added to cart 🛒");

      console.log("Cart:", existingCart);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };


  if (loading) {
    return (
      <>
        <CategorySection4 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading trousers...
        </div>
      </>
    );
  }


  if (error) {
    return (
      <>
        <CategorySection4 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
            color: "red",
          }}
        >
          {error}
        </div>
      </>
    );
  }

  
  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Trousers Banner */}
      <div className="shopBanner">
        <h1>✨ Trousers Collection ✨</h1>

        <p>🌟 "Classic Comfort. Modern Style."</p>

        {/* Shop Now */}
        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() =>
              navigate("/home-decor-shopping", {
                state: {
                  ...products[0],
                  img: `/${String(
                    products[0].image || ""
                  ).replace(/^\/+/, "")}`,
                },
              })
            }
          >
            Shop Now
          </button>
        )}
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={item._id || index}
            className={`cart ${
              selected[index] ? "active" : ""
            }`}
            onClick={() => {
              toggleCard(index);

              navigate("/home-decor-shopping", {
                state: {
                  ...item,
                  img: `/${String(
                    item.image || ""
                  ).replace(/^\/+/, "")}`,
                },
              });
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
                <FaHeart color="#123C7A" />
              ) : (
                <FaRegHeart />
              )}
            </div>

            {/* Product Image */}
            <img
              src={`/${String(
                item.image || ""
              ).replace(/^\/+/, "")}`}
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
                ({item.reviews || 0})
              </span>
            </div>

            {/* Price */}
            <div className="price">
              <span className="newPrice">
                ₹{item.price}
              </span>

              {item.oldPrice && (
                <span className="oldPrice">
                  ₹{item.oldPrice}
                </span>
              )}

              {item.discount && (
                <span className="discount">
                  {item.discount}
                </span>
              )}
            </div>

            {/* Add To Cart */}
            <button
              className="cartBtn"
              onClick={(e) => {
                e.stopPropagation();

                addToCart(item);
              }}
            >
              <FaShoppingCart
                style={{
                  marginRight: "8px",
                }}
              />

              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trousers;