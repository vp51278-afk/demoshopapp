import React, { useState } from "react";
import "./Women.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Women() {
  const [liked, setLiked] = useState(Array(8).fill(false));
  const [selected, setSelected] = useState(Array(8).fill(false));

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
      img: "/download (2).jpeg",
      name: "Embroidered Peplum Sharara Set",
      price: 1200,
      oldPrice: 2499,
      reviews: 245,
      discount: "52% OFF",
    },
    {
      img: "/w.jpeg",
      name: "Indo-Western Fusion Ensemble",
      price: 1000,
      oldPrice: 1999,
      reviews: 189,
      discount: "50% OFF",
    },
    {
      img: "/download (4).jpeg",
      name: "High-waist, Polka-dot Flared Midi Skirt",
      price: 900,
      oldPrice: 1799,
      reviews: 156,
      discount: "50% OFF",
    },
    {
      img: "/z2.jpeg",
      name: "Black & White Off-Shoulder Mini Dress",
      price: 700,
      oldPrice: 1499,
      reviews: 312,
      discount: "53% OFF",
    },
    {
      img: "/download (3).jpeg",
      name: "Indo-Western Jacket Set",
      price: 1000,
      oldPrice: 1999,
      reviews: 213,
      discount: "50% OFF",
    },
    {
      img: "/download (6).jpeg",
      name: "Gold Farshi Palazzo Set",
      price: 1500,
      oldPrice: 2999,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/z.jpeg",
      name: "Trending Co-ord Set",
      price: 1000,
      oldPrice: 1999,
      reviews: 145,
      discount: "50% OFF",
    },
    {
      img: "/z1.jpeg",
      name: "Stunning Kurti",
      price: 900,
      oldPrice: 1799,
      reviews: 298,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection />

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={index}
            className={`cart ${selected[index] ? "active" : ""}`}
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
            <img src={item.img} alt={item.name} />

            {/* Product Name */}
            <h3 className="head">{item.name}</h3>

            {/* Rating */}
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="lastStar" />
              <span>({item.reviews})</span>
            </div>

            {/* Price */}
            <div className="price">
              <span className="newPrice">₹{item.price}</span>

              <span className="oldPrice">₹{item.oldPrice}</span>

              <span className="discount">{item.discount}</span>
            </div>

            {/* Add to Cart */}
            <button
              className="cartBtn"
              onClick={(e) => e.stopPropagation()}
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

export default Women;