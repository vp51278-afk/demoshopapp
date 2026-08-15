import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vegetables.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Vegetables() {

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
      img: "/DO3.jpeg",
      name: "Fresh Potatoes (1kg)",
      price: 39,
      oldPrice: 59,
      reviews: 1542,
      discount: "34% OFF",
    },
    {
      img: "/DO1.jpeg",
      name: "Fresh Onions (1kg)",
      price: 45,
      oldPrice: 69,
      reviews: 1389,
      discount: "35% OFF",
    },
    {
      img: "/DO2.jpeg",
      name: "Fresh Tomatoes (1kg)",
      price: 49,
      oldPrice: 79,
      reviews: 1478,
      discount: "38% OFF",
    },
    {
      img: "/DO.jpeg",
      name: "Fresh Carrots (1kg)",
      price: 59,
      oldPrice: 89,
      reviews: 1264,
      discount: "34% OFF",
    },
    {
      img: "/T0.jpeg",
      name: "Green Cabbage",
      price: 39,
      oldPrice: 59,
      reviews: 892,
      discount: "34% OFF",
    },
    {
      img: "/T9.jpeg",
      name: "Fresh Cauliflower",
      price: 49,
      oldPrice: 79,
      reviews: 965,
      discount: "38% OFF",
    },
    {
      img: "/Broccoli, Kingdom F-1.jpeg",
      name: "Fresh Broccoli",
      price: 79,
      oldPrice: 119,
      reviews: 824,
      discount: "34% OFF",
    },
    {
      img: "/T8.jpeg",
      name: "Green Capsicum (500g)",
      price: 49,
      oldPrice: 79,
      reviews: 784,
      discount: "38% OFF",
    },
    {
      img: "/saag.jpeg",
      name: "Fresh Spinach (250g)",
      price: 29,
      oldPrice: 49,
      reviews: 1105,
      discount: "41% OFF",
    },
    {
      img: "/T7.jpeg",
      name: "Lady Finger (500g)",
      price: 39,
      oldPrice: 69,
      reviews: 957,
      discount: "43% OFF",
    },
    {
      img: "/rijnal.jpeg",
      name: "Fresh Brinjal (500g)",
      price: 35,
      oldPrice: 59,
      reviews: 875,
      discount: "41% OFF",
    },
    {
      img: "/T6.jpeg",
      name: "Fresh Cucumber (1kg)",
      price: 49,
      oldPrice: 79,
      reviews: 1036,
      discount: "38% OFF",
    },
    {
      img: "/Bitter gourd.jpeg",
      name: "Bitter Gourd (500g)",
      price: 45,
      oldPrice: 69,
      reviews: 654,
      discount: "35% OFF",
    },
    {
      img: "/luki.jpeg",
      name: "Bottle Gourd",
      price: 39,
      oldPrice: 59,
      reviews: 721,
      discount: "34% OFF",
    },
    {
      img: "/T5.jpeg",
      name: "Fresh Pumpkin",
      price: 49,
      oldPrice: 79,
      reviews: 836,
      discount: "38% OFF",
    },
    {
      img: "/T4.jpeg",
      name: "Green Peas (500g)",
      price: 69,
      oldPrice: 99,
      reviews: 942,
      discount: "30% OFF",
    },
    {
      img: "/beam.jpeg",
      name: "French Beans (500g)",
      price: 59,
      oldPrice: 89,
      reviews: 798,
      discount: "34% OFF",
    },
    {
      img: "/T3.jpeg",
      name: "Sweet Corn (2 pcs)",
      price: 49,
      oldPrice: 79,
      reviews: 684,
      discount: "38% OFF",
    },
    {
      img: "/T2.jpeg",
      name: "Fresh Ginger (250g)",
      price: 39,
      oldPrice: 59,
      reviews: 956,
      discount: "34% OFF",
    },
    {
      img: "/garlic.jpeg",
      name: "Garlic (250g)",
      price: 45,
      oldPrice: 69,
      reviews: 1042,
      discount: "35% OFF",
    },
    {
      img: "/chilli.jpeg",
      name: "Green Chillies (250g)",
      price: 25,
      oldPrice: 39,
      reviews: 1245,
      discount: "36% OFF",
    },
    {
      img: "/T1.jpeg",
      name: "Fresh Beetroot (500g)",
      price: 39,
      oldPrice: 59,
      reviews: 713,
      discount: "34% OFF",
    },
    {
      img: "/mu.jpeg",
      name: "Fresh Radish (500g)",
      price: 29,
      oldPrice: 49,
      reviews: 846,
      discount: "41% OFF",
    },
    {
      img: "/T.jpeg",
      name: "Button Mushrooms (200g)",
      price: 79,
      oldPrice: 119,
      reviews: 935,
      discount: "34% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Vegetables Collection ✨</h1>

        <p>
        "Eat your greens, fuel your dreams." 🥦.
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

export default Vegetables;