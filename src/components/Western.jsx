import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Western.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { addToCart } from "../utils/cartApi";

function Western() {
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
    const fetchWestern = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/category/Western`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch western products");
        }

        const data = await response.json();

        console.log(
          "Western products fetched from MongoDB:",
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
          "Error fetching western products:",
          error
        );

        setError(
          "Unable to load western products."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchWestern();
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

  

  const handleAddToCart = async (e, productId) => {
    e.stopPropagation();

    await addToCart(productId, 1);
  };



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
          Loading western collection...
        </div>
      </>
    );
  }



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


  return (
    <>
      {/* Category Section */}

      <CategorySection />

      {/* Western Banner */}

      <div className="shopBanner">

        <h1>
          ✨ Western Collection ✨
        </h1>

        <p>
          "Twirling into Elegance"
        </p>

        {/* Shop Now */}

        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() =>
              navigate(
                "/home-decor-shopping",
                {
                  state: {
                    ...products[0],

                    img: `/${String(
                      products[0].image || ""
                    ).replace(/^\/+/, "")}`,
                  },
                }
              )
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
            onClick={() => {

              toggleCard(index);

              navigate(
                "/home-decor-shopping",
                {
                  state: {
                    ...item,

                    img: `/${String(
                      item.image || ""
                    ).replace(/^\/+/, "")}`,
                  },
                }
              );

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
              onClick={(e) =>
                handleAddToCart(
                  e,
                  item._id
                )
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

export default Western;

