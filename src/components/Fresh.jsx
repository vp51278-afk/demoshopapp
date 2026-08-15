import React, { useState } from "react";
import "./Fresh.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Fresh() {
  const [liked, setLiked] = useState(Array(8).fill(false));
  const [selected, setSelected] = useState(Array(8).fill(false));

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
      img: "/rr4.jpeg",
      name: "A Basket Brimming With Vegetables",
      price: 199,
      oldPrice: 299,
      reviews: 445,
      discount: "40% OFF",
    },
    {
      img: "/rr3.jpeg",
      name: "Fruits bucket",
      price: 200,
      oldPrice: 350,
      reviews: 389,
      discount: "60% OFF",
    },
    {
      img: "/rr2.jpeg",
      name: "Activia Pouring Yogurt",
      price: 100,
      oldPrice: 200,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/rr.jpeg",
      name: "Cold Drinks",
      price: 120,
      oldPrice: 209,
      reviews: 312,
      discount: "20% OFF",
    },
    {
      img: "/g1.jpeg",
      name: "Pastry",
      price: 199,
      oldPrice: 299,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/g.jpeg",
      name: "Chips",
      price: 49,
      oldPrice: 89,
      reviews: 178,
      discount: "30% OFF",
    },
    {
      img: "/ha.jpeg",
      name: "Chocolates",
      price: 50,
      oldPrice: 100,
      reviews: 440,
      discount: "24% OFF",
    },
    {
      img: "/g2.jpeg",
      name: "Haldiram Namkeen",
      price: 1699,
      oldPrice: 3399,
      reviews: 400,
      discount: "50% OFF",
    },
  ];  

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={index}
            className={`cart ${selected[index] ? "active" : ""}`}
            onClick={() => toggleCard(index)}
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
              <FaStar className="lastStar" />
              <span>({item.reviews})</span>
            </div>

            {/* Price */}
            <div className="price">
              <span className="newPrice">₹{item.price}</span>
              <span className="oldPrice">₹{item.oldPrice}</span>
              <span className="discount">{item.discount}</span>
            </div>

            {/* Add to Cart */}
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
  );
}

export default Fresh;