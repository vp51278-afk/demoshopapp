import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shirts.css";
import CategorySection4 from "./CategorySection4";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Shirts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/category/Shirts`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
        setLiked(Array(data.length).fill(false));
        setSelected(Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching shirts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  const toggleLike = (index) => {
    const temp = [...liked];

    temp[index] = !temp[index];

    setLiked(temp);
  };


  const toggleCard = (index) => {
    const temp = [...selected];

    temp[index] = !temp[index];

    setSelected(temp);
  };


  if (loading) {
    return (
      <>
        <CategorySection4 />

        <div className="products">
          <h2>Loading Shirts...</h2>
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
        <h1>✨ Shirts Collection ✨</h1>

        <p>
          💼 "Confidence Begins with the Perfect Shirt."
        </p>

        <button
          className="shopNowBtn"
          onClick={() => {
            if (products.length > 0) {
              navigate("/home-decor-shopping", {
                state: products[0],
              });
            }
          }}
        >
          Shop Now
        </button>
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
                state: item,
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
                ({item.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="price">
              <span className="newPrice">
                ₹{item.price}
              </span>

              <span className="oldPrice">
                ₹{item.oldPrice}
              </span>

              <span className="discount">
                {item.discount}
              </span>
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

export default Shirts;