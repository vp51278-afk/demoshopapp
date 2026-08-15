
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chips.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Chips() {

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
      img: "/chips20.jpeg",
      name: "Lay's Classic Chips (52g)",
      price: 20,
      oldPrice: 25,
      reviews: 3245,
      discount: "20% OFF",
    },
    {
      img: "/chips19.jpeg",
      name: "Lay's Magic Masala",
      price: 20,
      oldPrice: 25,
      reviews: 2148,
      discount: "20% OFF",
    },
    {
      img: "/KURKURE.jpeg",
      name: "Kurkure Masala Munch",
      price: 20,
      oldPrice: 25,
      reviews: 1874,
      discount: "20% OFF",
    },
    {
      img: "/chips18.jpeg",
      name: "Kurkure Green Chutney",
      price: 20,
      oldPrice: 25,
      reviews: 4563,
      discount: "20% OFF",
    },
    {
      img: "/chips17.jpeg",
      name: "Bingo Mad Angles",
      price: 25,
      oldPrice: 30,
      reviews: 1645,
      discount: "17% OFF",
    },
    {
      img: "/chips16.jpeg",
      name: "Bingo Tedhe Medhe",
      price: 20,
      oldPrice: 25,
      reviews: 1523,
      discount: "20% OFF",
    },
    {
      img: "/chips15.jpeg",
      name: "Uncle Chipps",
      price: 20,
      oldPrice: 25,
      reviews: 1987,
      discount: "20% OFF",
    },
    {
      img: "/chips14.jpeg",
      name: "Doritos Nacho Cheese",
      price: 30,
      oldPrice: 40,
      reviews: 1348,
      discount: "25% OFF",
    },
    {
      img: "/ch.jpeg",
      name: "Pringles Original",
      price: 99,
      oldPrice: 120,
      reviews: 1724,
      discount: "18% OFF",
    },
    {
      img: "/Chips13.jpeg",
      name: "Cheetos Crunchy",
      price: 20,
      oldPrice: 25,
      reviews: 2815,
      discount: "20% OFF",
    },
    {
      img: "/chips12.jpeg",
      name: "Haldiram's Aloo Bhujia",
      price: 35,
      oldPrice: 45,
      reviews: 5214,
      discount: "22% OFF",
    },
    {
      img: "/chips11.jpeg",
      name: "Haldiram's Moong Dal",
      price: 35,
      oldPrice: 45,
      reviews: 3847,
      discount: "22% OFF",
    },
    {
      img: "/Redirect Notice.jpeg",
      name: "Balaji Wafers",
      price: 20,
      oldPrice: 25,
      reviews: 2956,
      discount: "20% OFF",
    },
    {
      img: "/LAYS WAFFERS PNG.jpeg",
      name: "Too Yumm! Chips",
      price: 20,
      oldPrice: 30,
      reviews: 2138,
      discount: "17% OFF",
    },
    {
      img: "/chips10.jpeg",
      name: "Banana Chips",
      price: 45,
      oldPrice: 55,
      reviews: 1857,
      discount: "18% OFF",
    },
    {
      img: "/chips9.jpeg",
      name: "Salted Potato Wafers",
      price: 30,
      oldPrice: 40,
      reviews: 8145,
      discount: "25% OFF",
    },
    {
      img: "/nbjj.jpeg",
      name: "Mexican Nachos 2 pack",
      price: 45,
      oldPrice: 60,
      reviews: 6732,
      discount: "25% OFF",
    },
    {
      img: "/chips8.jpeg",
      name: "Corn Puffs",
      price: 20,
      oldPrice: 25,
      reviews: 3568,
      discount: "20% OFF",
    },
    {
      img: "/chips7.jpeg",
      name: "Butter Popcorn",
      price: 30,
      oldPrice: 40,
      reviews: 4421,
      discount: "25% OFF",
    },
    {
      img: "/chips6.jpeg",
      name: "Roasted Peanuts",
      price: 35,
      oldPrice: 45,
      reviews: 2896,
      discount: "22% OFF",
    },
    {
      img: "/chips5.jpeg",
      name: "Healthy Trail Mix",
      price: 60,
      oldPrice: 75,
      reviews: 2548,
      discount: "20% OFF",
    },
    {
      img: "/chips4.jpeg",
      name: "Masala Makhana",
      price: 55,
      oldPrice: 70,
      reviews: 1736,
      discount: "21% OFF",
    },
    {
      img: "/chips2.jpeg",
      name: "Spicy Bhujia Mix",
      price: 40,
      oldPrice: 50,
      reviews: 2145,
      discount: "20% OFF",
    },
    {
      img: "/chips1.jpeg",
      name: "Cheese Balls",
      price: 30,
      oldPrice: 40,
      reviews: 2658,
      discount: "25% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Chips Collection ✨</h1>

        <p>
        "Your Anytime Snack Companion." 🍿
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

export default Chips;