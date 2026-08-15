import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fashion.css";
import CategorySection3 from "./CategorySection3";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Fashion() {

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
      img: "/lipstick.jpeg",
      name: "Matte Lipstick",
      price: 499,
      oldPrice: 899,
      reviews: 1245,
      discount: "44% OFF",
    },
    {
      img: "/y3.jpeg",
      name: "Liquid Foundation",
      price: 799,
      oldPrice: 1299,
      reviews: 985,
      discount: "38% OFF",
    },
    {
      img: "/eyrl.jpeg",
      name: "Compact Powder",
      price: 349,
      oldPrice: 599,
      reviews: 720,
      discount: "42% OFF",
    },
    {
      img: "/eyeliner.jpeg",
      name: "Waterproof Eyeliner",
      price: 249,
      oldPrice: 499,
      reviews: 650,
      discount: "50% OFF",
    },
    {
      img: "/y2.jpeg",
      name: "Volume Mascara",
      price: 599,
      oldPrice: 999,
      reviews: 832,
      discount: "40% OFF",
    },
    {
      img: "/ma.jpeg",
      name: "Rose Blush Palette",
      price: 549,
      oldPrice: 899,
      reviews: 480,
      discount: "39% OFF",
    },
    {
      img: "/y1.jpeg",
      name: "Eyeshadow Palette",
      price: 999,
      oldPrice: 1599,
      reviews: 1380,
      discount: "38% OFF",
    },
    {
      img: "/y.jpeg",
      name: "Complete Makeup Kit",
      price: 2499,
      oldPrice: 3999,
      reviews: 1890,
      discount: "37% OFF",
    },
  ];


  return (
    <>
      {/* Category Section3 */}
      <CategorySection3 />

 
   

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={index}
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

export default Fashion;