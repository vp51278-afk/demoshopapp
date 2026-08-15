import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Saree.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Saree() {

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
      img: "/ac2.jpeg",
      name: "Floral Printed Georgette Saree",
      price: 800,
      oldPrice: 2499,
      reviews: 445,
      discount: "42% OFF",
    },
    {
      img: "/download (10).jpeg",
      name: "Royal Designer Party Wear Saree",
      price: 1000,
      oldPrice: 1999,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/download (9).jpeg",
      name: "Pink Elegance Embroidered Saree",
      price: 1900,
      oldPrice: 2799,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/Green Sari.jpeg",
      name: "Emerald Green Silk Saree",
      price: 700,
      oldPrice: 1499,
      reviews: 112,
      discount: "53% OFF",
    },
    {
      img: "/Silky wear.jpeg",
      name: "Premium Silk Festive Saree",
      price: 1500,
      oldPrice: 2999,
      reviews: 213,
      discount: "50% OFF",
    },
    {
      img: "/ac1.jpeg",
      name: "Mint Green Embroidered Net Saree",
      price: 1500,
      oldPrice: 2999,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/saree for women_.jpeg",
      name: "Blush Pink Designer Saree",
      price: 1900,
      oldPrice: 3999,
      reviews: 145,
      discount: "50% OFF",
    },
    {
      img: "/ac.jpeg",
      name: "Red Banarasi Silk Wedding Saree",
      price: 2900,
      oldPrice: 3799,
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
        <h1>✨ Saree Collection ✨</h1>

        <p>
         "Twirling into Elegance."
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

export default Saree;


