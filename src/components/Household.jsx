import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Household.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Household() {

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
      img: "/uu22.jpeg",
      name: "Surf Excel Detergent (1kg)",
      price: 179,
      oldPrice: 220,
      reviews: 3245,
      discount: "19% OFF",
    },
    {
      img: "/uu23.jpeg",
      name: "Ariel Matic Detergent (1kg)",
      price: 199,
      oldPrice: 249,
      reviews: 2841,
      discount: "20% OFF",
    },
    {
      img: "/uu21.jpeg",
      name: "Vim Dishwash Liquid (750ml)",
      price: 99,
      oldPrice: 129,
      reviews: 4125,
      discount: "23% OFF",
    },
    {
      img: "/uu20.jpeg",
      name: "Scrub Sponge (Pack of 6)",
      price: 69,
      oldPrice: 89,
      reviews: 2148,
      discount: "22% OFF",
    },
    {
      img: "/uu19.jpeg",
      name: "kachi ghani by flipkart grocery mustard oil",
      price: 129,
      oldPrice: 159,
      reviews: 3874,
      discount: "19% OFF",
    },
    {
      img: "/uu18.jpeg",
      name: "Fortune Soya Health Refined Soyabean Oil",
      price: 149,
      oldPrice: 189,
      reviews: 3521,
      discount: "21% OFF",
    },
    {
      img: "/uu17.jpeg",
      name: "Colin Glass Cleaner (500ml)",
      price: 89,
      oldPrice: 109,
      reviews: 2685,
      discount: "18% OFF",
    },
    {
      img: "/uu16.jpeg",
      name: "Comfort Fabric Conditioner",
      price: 109,
      oldPrice: 139,
      reviews: 1845,
      discount: "22% OFF",
    },
    {
      img: "/uu15.jpeg",
      name: "Room Freshener Spray",
      price: 99,
      oldPrice: 129,
      reviews: 1954,
      discount: "23% OFF",
    },
    {
      img: "/uu14.jpeg",
      name: "Mosquito Repellent",
      price: 89,
      oldPrice: 119,
      reviews: 4128,
      discount: "25% OFF",
    },
    {
      img: "/pl.jpeg",
      name: "Garbage Bags ",
      price: 59,
      oldPrice: 79,
      reviews: 2154,
      discount: "25% OFF",
    },
    {
      img: "/uu12.jpeg",
      name: "Aluminium Foil Roll",
      price: 79,
      oldPrice: 99,
      reviews: 1652,
      discount: "20% OFF",
    },
    {
      img: "/uu13.jpeg",
      name: "Cling Wrap",
      price: 69,
      oldPrice: 89,
      reviews: 1432,
      discount: "22% OFF",
    },
    {
      img: "/uu11.jpeg",
      name: "Toilet Tissue (Pack of 6)",
      price: 139,
      oldPrice: 169,
      reviews: 3248,
      discount: "18% OFF",
    },
    {
      img: "/uu0.jpeg",
      name: "Kitchen Towel Roll",
      price: 79,
      oldPrice: 99,
      reviews: 1765,
      discount: "20% OFF",
    },
    {
      img: "/uu8.jpeg",
      name: "Hand Wash Refill (750ml)",
      price: 99,
      oldPrice: 129,
      reviews: 2541,
      discount: "23% OFF",
    },
    {
      img: "/uu9.jpeg",
      name: "Dettol Antiseptic Liquid",
      price: 119,
      oldPrice: 149,
      reviews: 2876,
      discount: "20% OFF",
    },
    {
      img: "/uu6.jpeg",
      name: "Plastic Dustbin",
      price: 199,
      oldPrice: 249,
      reviews: 985,
      discount: "20% OFF",
    },
    {
      img: "/uu7.jpeg",
      name: "Plastic Bucket (20L)",
      price: 249,
      oldPrice: 299,
      reviews: 1478,
      discount: "17% OFF",
    },
    {
      img: "/uu4.jpeg",
      name: "Floor Wiper",
      price: 149,
      oldPrice: 189,
      reviews: 1325,
      discount: "21% OFF",
    },
    {
      img: "/uu3.jpeg",
      name: "Cleaning Brush",
      price: 59,
      oldPrice: 79,
      reviews: 1642,
      discount: "25% OFF",
    },
    {
      img: "/uu1.jpeg",
      name: "Microfiber Mop Set",
      price: 499,
      oldPrice: 649,
      reviews: 954,
      discount: "23% OFF",
    },
    {
      img: "/uu2.jpeg",
      name: "Clothes Hangers (Pack of 10)",
      price: 149,
      oldPrice: 199,
      reviews: 1248,
      discount: "25% OFF",
    },
    {
      img: "/uu.jpeg",
      name: "Laundry Basket",
      price: 299,
      oldPrice: 379,
      reviews: 1108,
      discount: "21% OFF",
    },
  ];


  return (
<>
  {/* Category Section */}
  <CategorySection6 />

  {/* Household Banner */}
  <div className="shopBanner">
    <h1>✨ Household Collection ✨</h1>

    <p>Everything Your Home Needs, All in One Place. 🏡</p>

    <button
      className="shopNowBtn"
      onClick={() =>
        navigate("/household-shopping", {
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
        className={`cart ${selected[index] ? "active" : ""}`}
        onClick={() => {
          toggleCard(index);

          navigate("/household-shopping", {
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
          <span className="newPrice">₹{item.price}</span>

          <span className="oldPrice">
            <del>₹{item.oldPrice}</del>
          </span>

          <span className="discount">{item.discount}</span>
        </div>

        {/* Add To Cart */}
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
  )
};


export default Household;