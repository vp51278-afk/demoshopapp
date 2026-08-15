import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jeans.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Jeans() {

  // Navigation
  const navigate = useNavigate();

  // 24 Products
  const [liked, setLiked] = useState(Array(24).fill(false));
  const [selected, setSelected] = useState(Array(24).fill(false));

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

  const products = [
    {
      img: "/download (28).jpeg",
      name: "Black High-Waist Wide Leg Jeans",
      price: 1199,
      oldPrice: 2399,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/zz4.jpeg",
      name: "Baggy Street Style Jeans",
      price: 1099,
      oldPrice: 2199,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/women jeans.jpeg",
      name: "Classic Blue Skinny Jeans",
      price: 999,
      oldPrice: 1999,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/zz2.jpeg",
      name: "Cargo Wide-Leg Denim Jeans",
      price: 1299,
      oldPrice: 2599,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/jeans.jpeg",
      name: "Light Blue Straight Fit Jeans",
      price: 899,
      oldPrice: 1799,
      reviews: 213,
      discount: "50% OFF",
    },
    {
      img: "/zz1.jpeg",
      name: "High-Rise Bootcut Jeans",
      price: 1399,
      oldPrice: 2799,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/download (27).jpeg",
      name: "Distressed Ripped Denim Jeans",
      price: 1199,
      oldPrice: 2399,
      reviews: 145,
      discount: "50% OFF",
    },
    {
      img: "/zz.jpeg",
      name: "Distressed Denim Shorts",
      price: 799,
      oldPrice: 1599,
      reviews: 398,
      discount: "50% OFF",
    },
  ];
  return (
    <>
      {/* Category Section */}
      <CategorySection />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Jeans Collection ✨</h1>

       
       <p>
       ✨ "Built for Warmth, Designed for Style."
       </p>

        <button
  className="shopNowBtn"
  onClick={() =>
    navigate("/home-decor-shopping", {
      state: products[5],
    })
  }
>
  Shop Now
</button>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
   <div
   key={index}
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
            <img src={item.img} alt={item.name} />

            {/* Product Name */}
            <h3 className="head">{item.name}</h3>

            {/* Rating */}
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>({item.reviews})</span>
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
              onClick={(e) => e.stopPropagation()}
            >
              <FaShoppingCart
                style={{ marginRight: "8px" }}
              />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jeans;
