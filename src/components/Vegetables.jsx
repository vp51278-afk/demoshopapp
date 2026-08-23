import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vegetables.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Vegetables() {
  // Navigation
  const navigate = useNavigate();

  // Products from MongoDB
  const [products, setProducts] = useState([]);

  // Wishlist
  const [liked, setLiked] = useState([]);

  // Selected cards
  const [selected, setSelected] = useState([]);

  // Loading & Error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://demoshopapp-yfnk.vercel.app/api/products/category/Vegetables"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vegetables");
        }

        const data = await response.json();

        console.log(
          "Vegetables fetched from MongoDB:",
          data
        );

        setProducts(data);

        setLiked(
          Array(data.length).fill(false)
        );

        setSelected(
          Array(data.length).fill(false)
        );
      } catch (error) {
        console.error(
          "Error fetching vegetables:",
          error
        );

        setError("Unable to load vegetables.");
      } finally {
        setLoading(false);
      }
    };

    fetchVegetables();
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

  const openProduct = (item, index) => {
    toggleCard(index);

    navigate("/home-decor-shopping", {
      state: {
        ...item,

        // MongoDB image → Shopping page img
        img: `/${String(item.image || "").replace(
          /^\/+/,
          ""
        )}`,
      },
    });
  };


  if (loading) {
    return (
      <>
        <CategorySection6 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading vegetables...
        </div>
      </>
    );
  }


  if (error) {
    return (
      <>
        <CategorySection6 />

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
      <CategorySection6 />

      {/* Vegetables Banner */}
      <div className="shopBanner">
        <h1>✨ Vegetables Collection ✨</h1>

        <p>
          "Eat your greens, fuel your dreams." 🥦
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
            onClick={() =>
              openProduct(item, index)
            }
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

export default Vegetables;