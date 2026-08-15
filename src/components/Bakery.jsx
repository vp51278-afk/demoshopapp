import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bakery.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Bakery() {

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
      img: "/i love you.jpeg",
      name: "Cake",
      price: 35,
      oldPrice: 45,
      reviews: 3245,
      discount: "22% OFF",
    },
    {
      img: "/b1345.jpeg",
      name: "Brown Bread",
      price: 45,
      oldPrice: 55,
      reviews: 2148,
      discount: "18% OFF",
    },
    {
      img: "/bread.jpeg",
      name: "Multigrain Bread",
      price: 55,
      oldPrice: 69,
      reviews: 1874,
      discount: "20% OFF",
    },
    {
      img: "/b1.jpeg",
      name: "Burger Buns (Pack of 8)",
      price: 40,
      oldPrice: 55,
      reviews: 4563,
      discount: "27% OFF",
    },
    {
      img: "/b2.jpeg",
      name: "Hot Dog Buns",
      price: 45,
      oldPrice: 60,
      reviews: 1645,
      discount: "25% OFF",
    },
    {
      img: "/b3.jpeg",
      name: "Butter Croissant",
      price: 65,
      oldPrice: 85,
      reviews: 1523,
      discount: "24% OFF",
    },
    {
      img: "/b4.jpeg",
      name: "Chocolate Muffin",
      price: 45,
      oldPrice: 60,
      reviews: 1987,
      discount: "25% OFF",
    },
    {
      img: "/b5.jpeg",
      name: "Vanilla Cupcake",
      price: 35,
      oldPrice: 50,
      reviews: 1348,
      discount: "30% OFF",
    },
    {
      img: "/donut.jpeg",
      name: "Chocolate Donut",
      price: 40,
      oldPrice: 55,
      reviews: 1724,
      discount: "27% OFF",
    },
    {
      img: "/Black Forest Cake.jpeg",
      name: "Black Forest Cake (500g)",
      price: 299,
      oldPrice: 399,
      reviews: 2815,
      discount: "25% OFF",
    },
    {
      img: "/b64.jpeg",
      name: "Elegant Pink & Gold Butterfly Birthday Cake",
      price: 279,
      oldPrice: 379,
      reviews: 5214,
      discount: "26% OFF",
    },
    {
      img: "/b7.jpeg",
      name: "Red Velvet Cake",
      price: 349,
      oldPrice: 449,
      reviews: 3847,
      discount: "22% OFF",
    },
    {
      img: "/b8.jpeg",
      name: "Chocolate Pastry",
      price: 55,
      oldPrice: 75,
      reviews: 2956,
      discount: "27% OFF",
    },
    {
      img: "/b9.jpeg",
      name: "Pineapple Pastry",
      price: 50,
      oldPrice: 70,
      reviews: 2138,
      discount: "29% OFF",
    },
    {
      img: "/coco.jpeg",
      name: " Coco Cake",
      price: 79,
      oldPrice: 99,
      reviews: 1857,
      discount: "20% OFF",
    },
    {
      img: "/b10.jpeg",
      name: "Choco Chip Cookies",
      price: 89,
      oldPrice: 109,
      reviews: 8145,
      discount: "18% OFF",
    },
    {
      img: "/pas.jpeg",
      name: "Pastry 2",
      price: 65,
      oldPrice: 85,
      reviews: 6732,
      discount: "24% OFF",
    },
    {
      img: "/b11.jpeg",
      name: "Khari Puff",
      price: 55,
      oldPrice: 70,
      reviews: 3568,
      discount: "21% OFF",
    },
    {
      img: "/b12.jpeg",
      name: "Mocha Brownie Ice Cream Cake",
      price: 35,
      oldPrice: 50,
      reviews: 4421,
      discount: "30% OFF",
    },
    {
      img: "/b13.jpeg",
      name: "Paneer Puff",
      price: 45,
      oldPrice: 60,
      reviews: 2896,
      discount: "25% OFF",
    },
    {
      img: "/b14.jpeg",
      name: "Garlic Bread",
      price: 79,
      oldPrice: 99,
      reviews: 2548,
      discount: "20% OFF",
    },
    {
      img: "/b15.jpeg",
      name: "Pizza Base (Pack of 2)",
      price: 69,
      oldPrice: 89,
      reviews: 1736,
      discount: "22% OFF",
    },
    {
      img: "/b16.jpeg",
      name: "Belgian Waffles",
      price: 99,
      oldPrice: 129,
      reviews: 2145,
      discount: "23% OFF",
    },
    {
      img: "/b17.jpeg",
      name: "Banana Tea Cake",
      price: 129,
      oldPrice: 169,
      reviews: 2658,
      discount: "24% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Bakery Collection ✨</h1>

        <p>
        "Taste the Freshness in Every Slice." 🍰
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

export default Bakery;