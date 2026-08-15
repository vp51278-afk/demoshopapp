import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Western.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Western() {

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
    img: "/download (13).jpeg",
    name: "Floral Midi Dress",
    price: 1000,
    oldPrice: 2000,
    reviews: 445,
    discount: "32% OFF",
  },
  {
    img: "/download (14).jpeg",
    name: "Elegant Cocktail Dress",
    price: 1200,
    oldPrice: 2099,
    reviews: 389,
    discount: "30% OFF",
  },
  {
    img: "/download (15).jpeg",
    name: "Wine Red Strapless High-Low Gown",
    price: 1900,
    oldPrice: 2799,
    reviews: 456,
    discount: "50% OFF",
  },
  {
    img: "/download (16).jpeg",
    name: "Off-Shoulder Ruffle Dress",
    price: 700,
    oldPrice: 1499,
    reviews: 112,
    discount: "53% OFF",
  },
  {
    img: "/z6.jpeg",
    name: "Black & White Party Mini Dress",
    price: 900,
    oldPrice: 1900,
    reviews: 300,
    discount: "50% OFF",
  },
  {
    img: "/z5.jpeg",
    name: "Layered Ruffle Maxi Dress",
    price: 1500,
    oldPrice: 2999,
    reviews: 178,
    discount: "50% OFF",
  },
  {
    img: "/z4.jpeg",
    name: "Classic Black Bodycon Dress",
    price: 1000,
    oldPrice: 2000,
    reviews: 440,
    discount: "50% OFF",
  },
  {
    img: "/download (17).jpeg",
    name: "Floral Beach Maxi Dress",
    price: 500,
    oldPrice: 1000,
    reviews: 400,
    discount: "50% OFF",
  },

]

  return (
    <>
      {/* Category Section */}
      <CategorySection />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Western Collection ✨</h1>

        <p>
       "Twirling into Elegance"
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

export default Western;

