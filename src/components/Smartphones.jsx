import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shoes.css";
import CategorySection5 from "./CategorySection5";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Smartphones() {
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

  // ======================================
  // FETCH SMARTPHONES FROM MONGODB
  // ======================================
  useEffect(() => {
    const fetchSmartphones = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5000/api/products/category/Smartphones"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch smartphones");
        }

        const data = await response.json();

        console.log(
          "Smartphones fetched from MongoDB:",
          data
        );

        setProducts(data);

        // Wishlist state according to product count
        setLiked(Array(data.length).fill(false));

        // Selected state according to product count
        setSelected(Array(data.length).fill(false));
      } catch (error) {
        console.error(
          "Error fetching smartphones:",
          error
        );

        setError("Unable to load smartphones.");
      } finally {
        setLoading(false);
      }
    };

    fetchSmartphones();
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
  // LOADING UI
  // ======================================
  if (loading) {
    return (
      <>
        <CategorySection5 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading smartphones collection...
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
        <CategorySection5 />

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
      <CategorySection5 />

      {/* Smartphones Banner */}
      <div className="shopBanner">
        <h1>✨ SmartPhones Collection ✨</h1>

        <p>
          "Capture Every Moment. Live Every Memory." 📸
        </p>

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
              src={`/${String(item.image || "").replace(
                /^\/+/,
                ""
              )}`}
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
  <FaShoppingCart style={{ marginRight: "8px" }} />
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Smartphones;