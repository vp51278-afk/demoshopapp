import React, { useState } from "react";
import "./Beauty.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Beauty() {
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
      img: "/be1.jpeg",
      name: "Premium Cotton T-Shirt",
      price: 699,
      oldPrice: 1399,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/be2.jpeg",
      name: "Slim Fit Casual Shirt",
      price: 999,
      oldPrice: 1999,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/be3.jpeg",
      name: "Regular Fit Blue Jeans",
      price: 1299,
      oldPrice: 2599,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/be4.jpeg",
      name: "Stylish Denim Jacket",
      price: 1799,
      oldPrice: 3599,
      reviews: 312,
      discount: "50% OFF",
    },
    {
      img: "/be5.jpeg",
      name: "Printed Hoodie",
      price: 1499,
      oldPrice: 2999,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/be6.jpeg",
      name: "Formal Cotton Trouser",
      price: 899,
      oldPrice: 1799,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/be7.jpeg",
      name: "Classic Formal Blazer",
      price: 3799,
      oldPrice: 4999,
      reviews: 440,
      discount: "24% OFF",
    },
    {
      img: "/shoes.jpeg",
      name: "Casual Sneakers",
      price: 1699,
      oldPrice: 3399,
      reviews: 400,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

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

export default Beauty;