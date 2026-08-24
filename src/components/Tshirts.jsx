import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tshirts.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Tshirts() {
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
    const fetchTshirts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/category/Tshirts`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch T-Shirts");
        }

        const data = await response.json();

        console.log(
          "T-Shirts fetched from MongoDB:",
          data
        );

        setProducts(data);

        // Wishlist state
        setLiked(
          Array(data.length).fill(false)
        );

        // Selected state
        setSelected(
          Array(data.length).fill(false)
        );

      } catch (error) {
        console.error(
          "Error fetching T-Shirts:",
          error
        );

        setError("Unable to load T-Shirts.");

      } finally {
        setLoading(false);
      }
    };

    fetchTshirts();
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
        <CategorySection4 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading T-Shirts...
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

      {/* T-Shirts Banner */}
      <div className="shopBanner">

        <h1>
          ✨ T Shirts Collection ✨
        </h1>

        <p>
          "Dress Smart. Feel Confident." 👕
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
              selected[index]
                ? "active"
                : ""
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
  src={item.image || item.img}
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

export default Tshirts;
