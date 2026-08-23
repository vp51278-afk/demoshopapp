import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tops.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { addToCart } from "./addToCart";

function Tops() {

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
    const fetchTops = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://demoshopapp-yfnk.vercel.app/api/products/category/Tops"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tops");
        }

        const data = await response.json();

        console.log("Tops fetched from MongoDB:", data);

        setProducts(data);

        // Create wishlist state according to product count
        setLiked(Array(data.length).fill(false));

        // Create selected state according to product count
        setSelected(Array(data.length).fill(false));

      } catch (error) {
        console.error("Error fetching tops:", error);

        setError("Unable to load tops.");

      } finally {
        setLoading(false);
      }
    };

    fetchTops();
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
          Loading tops...
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

      {/* Tops Banner */}
      <div className="shopBanner">

        <h1>✨ Tops Collection ✨</h1>

        <p>
          🌟 "Classic Comfort. Modern Style."
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
  <FaShoppingCart style={{ marginRight: "8px" }} />
  Add to Cart
</button>

          </div>

        ))}

      </div>
    </>
  );
}

export default Tops;

