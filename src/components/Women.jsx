import React, { useEffect, useState } from "react";
import "./Women.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { addToCart } from "../utils/cartApi";

function Women() {
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

  // ======================================
  // FETCH WOMEN PRODUCTS FROM MONGODB
  // ======================================

  useEffect(() => {
    const fetchWomen = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5000/api/products/category/Women"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch women products");
        }

        const data = await response.json();

        console.log(
          "Women products fetched from MongoDB:",
          data
        );

        setProducts(data);

        setLiked(Array(data.length).fill(false));

        setSelected(Array(data.length).fill(false));
      } catch (error) {
        console.error(
          "Error fetching women products:",
          error
        );

        setError("Unable to load women products.");
      } finally {
        setLoading(false);
      }
    };

    fetchWomen();
  }, []);

  // ======================================
  // TOGGLE WISHLIST
  // ======================================

  const toggleLike = (index) => {
    setLiked((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };

  // ======================================
  // TOGGLE CARD
  // ======================================

  const toggleCard = (index) => {
    setSelected((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };

  // ======================================
  // ADD TO CART
  // ======================================

  const handleAddToCart = async (e, productId) => {
    e.stopPropagation();

    await addToCart(productId, 1);
  };

  // ======================================
  // LOADING UI
  // ======================================

  if (loading) {
    return (
      <>
        <CategorySection />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading women collection...
        </div>
      </>
    );
  }

  // ======================================
  // ERROR UI
  // ======================================

  if (error) {
    return (
      <>
        <CategorySection />

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

  // ======================================
  // MAIN UI
  // ======================================

  return (
    <>
      {/* Category Section */}

      <CategorySection />

      {/* Products */}

      <div className="products">
        {products.map((item, index) => (
          <div
            key={item._id || index}
            className={`cart ${
              selected[index] ? "active" : ""
            }`}
            onClick={() => toggleCard(index)}
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
              <FaStar className="lastStar" />

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
              onClick={(e) =>
                handleAddToCart(e, item._id)
              }
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

export default Women;