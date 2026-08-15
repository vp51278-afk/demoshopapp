import React, { useState } from "react";
import "./Mobiles.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Mobiles() {
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
      img: "/llo.jpeg",
      name: "Apple iPhone 15 Pro",
      price: 129999,
      oldPrice: 139999,
      reviews: 2845,
      discount: "7% OFF",
    },
    {
      img: "/kkk.jpeg",
      name: "Samsung Galaxy Watch 6",
      price: 24999,
      oldPrice: 29999,
      reviews: 842,
      discount: "17% OFF",
    },
    {
      img: "/ll.jpeg",
      name: "Apple AirPods Pro (2nd Gen)",
      price: 22999,
      oldPrice: 26999,
      reviews: 1895,
      discount: "15% OFF",
    },
    {
      img: "/kk33.jpeg",
      name: "JBL Flip 6 Speaker",
      price: 9999,
      oldPrice: 12999,
      reviews: 874,
      discount: "23% OFF",
    },
    {
      img: "/kk22.jpeg",
      name: "Mi 20000mAh Power Bank",
      price: 1999,
      oldPrice: 2999,
      reviews: 3645,
      discount: "33% OFF",
    },
    {
      img: "/kk.jpeg",
      name: "OnePlus 12 5G",
      price: 64999,
      oldPrice: 69999,
      reviews: 1945,
      discount: "7% OFF",
    },
    {
      img: "/kk11.jpeg",
      name: "Noise ColorFit Pro 5",
      price: 4499,
      oldPrice: 6999,
      reviews: 2856,
      discount: "36% OFF",
    },
    {
      img: "/BOAT Store.jpeg",
      name: "boAt Airdopes 141",
      price: 1299,
      oldPrice: 2999,
      reviews: 4860,
      discount: "57% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

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

export default Mobiles;