import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Makeup.css";
import CategorySection3 from "./CategorySection3";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Makeup() {

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
      img: "/m1.jpeg",
      name: "Professional Makeup Kit",
      price: 799,
      oldPrice: 1499,
      reviews: 425,
      discount: "47% OFF",
    },
    {
      img: "/m2.jpeg",
      name: "Matte Lipstick Combo",
      price: 299,
      oldPrice: 599,
      reviews: 362,
      discount: "50% OFF",
    },
    {
      img: "/m3.jpeg",
      name: "Liquid Foundation",
      price: 399,
      oldPrice: 799,
      reviews: 512,
      discount: "50% OFF",
    },
    {
      img: "/yy.jpeg",
      name: "Compact Face Powder",
      price: 249,
      oldPrice: 499,
      reviews: 284,
      discount: "50% OFF",
    },
    {
      img: "/m4.jpeg",
      name: "Full Coverage Concealer",
      price: 299,
      oldPrice: 599,
      reviews: 198,
      discount: "50% OFF",
    },
    {
      img: "/m5.jpeg",
      name: "Eyeshadow Palette",
      price: 449,
      oldPrice: 899,
      reviews: 320,
      discount: "50% OFF",
    },
    {
      img: "/m6.jpeg",
      name: "Waterproof Eyeliner",
      price: 199,
      oldPrice: 399,
      reviews: 267,
      discount: "50% OFF",
    },
    {
      img: "/m7.jpeg",
      name: "Volume Mascara",
      price: 249,
      oldPrice: 499,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/M A K E S.jpeg",
      name: "Natural Blush Palette",
      price: 299,
      oldPrice: 599,
      reviews: 254,
      discount: "50% OFF",
    },
    {
      img: "/high.jpeg",
      name: "Glow Highlighter",
      price: 349,
      oldPrice: 699,
      reviews: 318,
      discount: "50% OFF",
    },
    {
      img: "/sdf.jpeg",
      name: "Makeup Brush Set",
      price: 399,
      oldPrice: 799,
      reviews: 286,
      discount: "50% OFF",
    },
    {
      img: "/bend.jpeg",
      name: "Beauty Blender Sponge",
      price: 149,
      oldPrice: 299,
      reviews: 192,
      discount: "50% OFF",
    },
    {
      img: "/nail.jpeg",
      name: "Nail Polish Combo",
      price: 249,
      oldPrice: 499,
      reviews: 241,
      discount: "50% OFF",
    },
    {
      img: "/m8.jpeg",
      name: "Nail Art Kit",
      price: 349,
      oldPrice: 699,
      reviews: 354,
      discount: "50% OFF",
    },
    {
      img: "/m9.jpeg",
      name: "Makeup Remover Wipes",
      price: 199,
      oldPrice: 399,
      reviews: 210,
      discount: "50% OFF",
    },
    {
      img: "/m10.jpeg",
      name: "Vitamin C Face Wash",
      price: 249,
      oldPrice: 499,
      reviews: 378,
      discount: "50% OFF",
    },
    {
      img: "/Dr_Rashel.jpeg",
      name: "Vitamin C Face Serum",
      price: 499,
      oldPrice: 999,
      reviews: 487,
      discount: "50% OFF",
    },
    {
      img: "/m11.jpeg",
      name: "Daily Moisturizer",
      price: 299,
      oldPrice: 599,
      reviews: 265,
      discount: "50% OFF",
    },
    {
      img: "/m12.jpeg",
      name: "SPF 50 Sunscreen",
      price: 349,
      oldPrice: 699,
      reviews: 314,
      discount: "50% OFF",
    },
    {
      img: "/m13.jpeg",
      name: "Long Lasting Perfume",
      price: 499,
      oldPrice: 999,
      reviews: 275,
      discount: "50% OFF",
    },
    {
      img: "/m14.jpeg",
      name: "Hair Serum",
      price: 299,
      oldPrice: 599,
      reviews: 223,
      discount: "50% OFF",
    },
    {
      img: "/Daily Krown Care.jpeg",
      name: "Hair Care Combo",
      price: 549,
      oldPrice: 1099,
      reviews: 180,
      discount: "50% OFF",
    },
    {
      img: "/m15.jpeg",
      name: "Moisturizing Lip Balm",
      price: 149,
      oldPrice: 299,
      reviews: 168,
      discount: "50% OFF",
    },
    {
      img: "/m16.jpeg",
      name: "Hydrating Face Mask",
      price: 199,
      oldPrice: 399,
      reviews: 331,
      discount: "50% OFF",
    },
  ];
  
  return (
    <>
      {/* Category Section */}
      <CategorySection3 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Makeup  Collection ✨</h1>

        <p>
        Enhance Your Beauty, One Brush at a Time.
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

export default Makeup;


