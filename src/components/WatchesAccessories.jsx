import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WatchesAccessories.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function WatchesAccessories() {
  const navigate = useNavigate();

  // Products from MongoDB
  const [products, setProducts] = useState([]);

  // Wishlist
  const [liked, setLiked] = useState([]);

  // Selected cards
  const [selected, setSelected] = useState([]);

  // Loading
  const [loading, setLoading] = useState(true);

  // Error
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchWatchesAccessories = async () => {
      try {
        setLoading(true);

        const response = await fetch(
           `${process.env.REACT_APP_API_URL}/api/products/category/WatchesAccessories`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch watches and accessories"
          );
        }

        const data = await response.json();

        console.log(
          "Watches & Accessories fetched from MongoDB:",
          data
        );

        setProducts(data);

        setLiked(Array(data.length).fill(false));
        setSelected(Array(data.length).fill(false));

      } catch (error) {
        console.error(
          "Error fetching watches and accessories:",
          error
        );

        setError(
          "Unable to load watches and accessories."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchWatchesAccessories();
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

        // MongoDB image → shopping page img
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
          Loading watches & accessories...
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

      {/* Banner */}
      <div className="shopBanner">

        <h1>
          ✨ Watches & Accessories Collection ✨
        </h1>

        <p>
          ✨ "Complete Your Look with the Perfect Accessories."
        </p>

        {/* Shop Now */}
        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() => openProduct(products[0], 0)}
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
            onClick={() => openProduct(item, index)}
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

                console.log(
                  "Add to cart:",
                  item
                );
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

export default WatchesAccessories;