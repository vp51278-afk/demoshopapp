import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footwear.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Footwear() {

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
      img: "/download (21).jpeg",
      name: "Black Stiletto Heels",
      price: 899,
      oldPrice: 1799,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/download (22).jpeg",
      name: "White Block Heel Sandals",
      price: 699,
      oldPrice: 1399,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/download (23).jpeg",
      name: "Nude Platform Heels",
      price: 999,
      oldPrice: 1999,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/download (24).jpeg",
      name: "Embroidered Ethnic Jutti",
      price: 599,
      oldPrice: 1199,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/u3.jpeg",
      name: "Crystal Party Heels",
      price: 1299,
      oldPrice: 2599,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/u2.jpeg",
      name: "Classic White Sneakers",
      price: 1199,
      oldPrice: 2399,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/u1.jpeg",
      name: "Premium Leather Ankle Boots",
      price: 1499,
      oldPrice: 2999,
      reviews: 440,
      discount: "50% OFF",
    },
    {
      img: "/u.jpeg",
      name: "Casual Pink Sneakers",
      price: 899,
      oldPrice: 1799,
      reviews: 400,
      discount: "50% OFF",
    },
  ];
  return (
    <>
      {/* Category Section */}
      <CategorySection />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Footwear Collection ✨</h1>

        <p>
        " For Elegant look."
        </p>

        <button
  className="shopNowBtn"
  onClick={() =>
    navigate("/home-decor-shopping", {
      state: products[0],
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

export default Footwear;
