
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Coord.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Coord() {

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
      img: "/co5.jpeg",
      name: "Korean Casual Co-Ord Set",
      price: 999,
      oldPrice: 1999,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/beautiful corset.jpeg",
      name: "Black Corset Co-Ord Set",
      price: 1199,
      oldPrice: 2399,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/Outfit.jpeg",
      name: "Black & White Co-Ord Set",
      price: 899,
      oldPrice: 1799,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/co4.jpeg",
      name: "Palazzo Co-Ord Set",
      price: 1099,
      oldPrice: 2199,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/co3.jpeg",
      name: "White Floral Co-Ord Set",
      price: 1299,
      oldPrice: 2599,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/co2.jpeg",
      name: "Printed Kurti Co-Ord Set",
      price: 999,
      oldPrice: 1999,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/download (26).jpeg",
      name: "Wine Red Designer Co-Ord",
      price: 1399,
      oldPrice: 2799,
      reviews: 440,
      discount: "50% OFF",
    },
    {
      img: "/co1.jpeg",
      name: "Boho Belted Co-Ord Set",
      price: 1199,
      oldPrice: 2399,
      reviews: 400,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection/>

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Coord Collection ✨</h1>

        <p>
        "Cool Drinks, Happy Moments." 🧃
      
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

export default Coord;



