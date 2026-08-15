import React, { useState } from "react";
import "./Men.css";
import CategorySection1 from "./CategorySection1";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Men() {
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
      img: "/jj1.jpeg",
      name: "Aesthetic Streetwear Set",
      price: 1000,
      oldPrice: 2000,
      reviews: 145,
      discount: "50% OFF",
    },
    {
      img: "/jj2.jpeg",
      name: "Blue-Black check shirt with pant",
      price: 800,
      oldPrice: 1099,
      reviews: 200,
      discount: "11% OFF",
    },
    {
      img: "/jj.jpeg",
      name: "Denim shirt with black pant",
      price: 900,
      oldPrice: 1799,
      reviews: 256,
      discount: "50% OFF",
    },
    {
      img: "/jhk.jpeg",
      name: "Blue Striped Shirt",
      price: 700,
      oldPrice: 1499,
      reviews: 312,
      discount: "53% OFF",
    },
    {
      img: "/download (8).jpeg",
      name: "Set",
      price: 1000,
      oldPrice: 1999,
      reviews: 213,
      discount: "50% OFF",
    },
    {
      img: "/hj.jpeg",
      name: "Formal Double Breasted Brown Suit Combination",
      price: 1500,
      oldPrice: 2999,
      reviews: 270,
      discount: "50% OFF",
    },
    {
      img: "/op1.jpeg",
      name: "Formal look",
      price: 1300,
      oldPrice: 1999,
      reviews: 200,
      discount: "20% OFF",
    },
    {
      img: "/op.jpeg",
      name: "Men’s Outfit",
      price: 900,
      oldPrice: 1799,
      reviews: 298,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section1 */}
      <CategorySection1 />

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

export default Men;