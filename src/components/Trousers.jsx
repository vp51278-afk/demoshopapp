import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Trousers.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Trousers() {

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
      img: "/GA16.jpeg",
      name: "Black Formal Trouser",
      price: 699,
      oldPrice: 1499,
      reviews: 1254,
      discount: "53% OFF",
    },
    {
      img: "/download (61).jpeg",
      name: "Navy Blue Office Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 986,
      discount: "53% OFF",
    },
    {
      img: "/GA15.jpeg",
      name: "Grey Slim Fit Trouser",
      price: 799,
      oldPrice: 1699,
      reviews: 842,
      discount: "53% OFF",
    },
    {
      img: "/download (60).jpeg",
      name: "Khaki Cotton Trouser",
      price: 699,
      oldPrice: 1499,
      reviews: 715,
      discount: "53% OFF",
    },
    {
      img: "/GA13.jpeg",
      name: "Beige Casual Trouser",
      price: 649,
      oldPrice: 1399,
      reviews: 624,
      discount: "54% OFF",
    },
    {
      img: "/GA14.jpeg",
      name: "Olive Green Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 587,
      discount: "53% OFF",
    },
    {
      img: "/download (59).jpeg",
      name: "Stretch Fit Trouser",
      price: 899,
      oldPrice: 1899,
      reviews: 792,
      discount: "53% OFF",
    },
    {
      img: "/download (58).jpeg",
      name: "Formal Office Trouser",
      price: 849,
      oldPrice: 1799,
      reviews: 668,
      discount: "53% OFF",
    },
    {
      img: "/GA11.jpeg",
      name: "Formal Fit Trouser",
      price: 699,
      oldPrice: 1499,
      reviews: 534,
      discount: "53% OFF",
    },
    {
      img: "/GA12.jpeg",
      name: "Pleated Formal Trouser",
      price: 799,
      oldPrice: 1699,
      reviews: 489,
      discount: "53% OFF",
    },
    {
      img: "/GA0.jpeg",
      name: "Cotton Chino Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 947,
      discount: "53% OFF",
    },
    {
      img: "/GA9.jpeg",
      name: "Slim Tapered Trouser",
      price: 849,
      oldPrice: 1799,
      reviews: 731,
      discount: "53% OFF",
    },
    {
      img: "/GA8.jpeg",
      name: "Charcoal Grey Trouser",
      price: 799,
      oldPrice: 1699,
      reviews: 614,
      discount: "53% OFF",
    },
    {
      img: "/GA7.jpeg",
      name: "Business Casual Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 582,
      discount: "53% OFF",
    },
    {
      img: "/GA6.jpeg",
      name: "Classic Fit Trouser",
      price: 699,
      oldPrice: 1499,
      reviews: 876,
      discount: "53% OFF",
    },
    {
      img: "/download (57).jpeg",
      name: "Premium Wool Trouser",
      price: 999,
      oldPrice: 2199,
      reviews: 468,
      discount: "55% OFF",
    },
    {
      img: "/download (56).jpeg",
      name: "Brown Formal Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 521,
      discount: "53% OFF",
    },
    {
      img: "/grey trouser.jpeg",
      name: "Light Grey Trouser",
      price: 699,
      oldPrice: 1499,
      reviews: 633,
      discount: "53% OFF",
    },
    {
      img: "/GA5.jpeg",
      name: "Wrinkle Free Trouser",
      price: 899,
      oldPrice: 1899,
      reviews: 784,
      discount: "53% OFF",
    },
    {
      img: "/GA4.jpeg",
      name: "Ankle Length Trouser",
      price: 799,
      oldPrice: 1699,
      reviews: 447,
      discount: "53% OFF",
    },
    {
      img: "/GA3.jpeg",
      name: "Cargo Style Trouser",
      price: 849,
      oldPrice: 1799,
      reviews: 1025,
      discount: "53% OFF",
    },
    {
      img: "/GA2.jpeg",
      name: "Smart Fit Trouser",
      price: 749,
      oldPrice: 1599,
      reviews: 592,
      discount: "53% OFF",
    },
    {
      img: "/GA1.jpeg",
      name: "Luxury Formal Trouser",
      price: 999,
      oldPrice: 2199,
      reviews: 398,
      discount: "55% OFF",
    },
    {
      img: "/GA.jpeg",
      name: "Everyday Cotton Trouser",
      price: 649,
      oldPrice: 1399,
      reviews: 1186,
      discount: "54% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Trousers Collection ✨</h1>

        <p>
        🌟 "Classic Comfort. Modern Style."
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

export default Trousers;