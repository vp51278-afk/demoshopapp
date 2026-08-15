import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tshirts.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Tshirts() {

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
      img: "/p19.jpeg",
      name: "Oversized Cotton T-Shirt",
      price: 399,
      oldPrice: 999,
      reviews: 1254,
      discount: "60% OFF",
    },
    {
      img: "/p17.jpeg",
      name: "Graphic Printed T-Shirt",
      price: 349,
      oldPrice: 899,
      reviews: 982,
      discount: "61% OFF",
    },
    {
      img: "/p18.jpeg",
      name: "Classic White T-Shirt",
      price: 299,
      oldPrice: 799,
      reviews: 864,
      discount: "63% OFF",
    },
    {
      img: "/p16.jpeg",
      name: "Round Neck T-Shirt",
      price: 379,
      oldPrice: 899,
      reviews: 743,
      discount: "58% OFF",
    },
    {
      img: "/p15.jpeg",
      name: "Polo T-Shirt",
      price: 499,
      oldPrice: 1299,
      reviews: 658,
      discount: "62% OFF",
    },
    {
      img: "/p14.jpeg",
      name: "Blue Cotton T-Shirt",
      price: 349,
      oldPrice: 899,
      reviews: 914,
      discount: "61% OFF",
    },
    {
      img: "/p12.jpeg",
      name: "Striped Casual T-Shirt",
      price: 429,
      oldPrice: 999,
      reviews: 562,
      discount: "57% OFF",
    },
    {
      img: "/p13.jpeg",
      name: "Olive Green T-Shirt",
      price: 399,
      oldPrice: 999,
      reviews: 487,
      discount: "60% OFF",
    },
    {
      img: "/p11.jpeg",
      name: "Beige Oversized Tee",
      price: 449,
      oldPrice: 1099,
      reviews: 675,
      discount: "59% OFF",
    },
    {
      img: "/p10.jpeg",
      name: "Anime Printed T-Shirt",
      price: 499,
      oldPrice: 1299,
      reviews: 1145,
      discount: "62% OFF",
    },
    {
      img: "/download (50).jpeg",
      name: "Typography T-Shirt",
      price: 379,
      oldPrice: 899,
      reviews: 798,
      discount: "58% OFF",
    },
    {
      img: "/p0.jpeg",
      name: "Half Sleeve T-Shirt",
      price: 329,
      oldPrice: 799,
      reviews: 621,
      discount: "59% OFF",
    },
    {
      img: "/p8.jpeg",
      name: "Dry Fit Sports T-Shirt",
      price: 449,
      oldPrice: 1199,
      reviews: 936,
      discount: "63% OFF",
    },
    {
      img: "/p9.jpeg",
      name: "Maroon Cotton Tee",
      price: 369,
      oldPrice: 899,
      reviews: 582,
      discount: "59% OFF",
    },
    {
      img: "/p7.jpeg",
      name: "Navy Blue T-Shirt",
      price: 399,
      oldPrice: 999,
      reviews: 764,
      discount: "60% OFF",
    },
    {
      img: "/p6.jpeg",
      name: "Henley Neck T-Shirt",
      price: 499,
      oldPrice: 1299,
      reviews: 532,
      discount: "62% OFF",
    },
    {
      img: "/p4.jpeg",
      name: "Color Block T-Shirt",
      price: 429,
      oldPrice: 999,
      reviews: 688,
      discount: "57% OFF",
    },
    {
      img: "/download (49).jpeg",
      name: "Pocket Style T-Shirt",
      price: 349,
      oldPrice: 899,
      reviews: 447,
      discount: "61% OFF",
    },
    {
      img: "/p4.jpeg",
      name: "V-Neck Cotton T-Shirt",
      price: 379,
      oldPrice: 949,
      reviews: 571,
      discount: "60% OFF",
    },
    {
      img: "/p3.jpeg",
      name: "Relaxed Fit T-Shirt",
      price: 459,
      oldPrice: 1199,
      reviews: 692,
      discount: "62% OFF",
    },
    {
      img: "/download (48).jpeg",
      name: "Minimal Logo Tee",
   
      price: 329,
      oldPrice: 799,
      reviews: 615,
      discount: "59% OFF",
    },
    {
      img: "/p2.jpeg",
      name: "Grey Melange T-Shirt",
      price: 349,
      oldPrice: 899,
      reviews: 728,
      discount: "61% OFF",
    },
    {
      img: "/p1.jpeg",
      name: "Loose Fit T-Shirt",
      price: 429,
      oldPrice: 1099,
      reviews: 589,
      discount: "61% OFF",
    },
    {
      img: "/p.jpeg",
      name: "Premium Cotton T-Shirt",
      price: 499,
      oldPrice: 1399,
      reviews: 1034,
      discount: "64% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ T Shirts Collection ✨</h1>

        <p>
        🌟 "Dress Smart. Feel Confident."
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

export default Tshirts;