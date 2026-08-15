import React, { useState } from "react";
import "./HomeKitchen.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function HomeKitchen() {
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
      img: "/df.jpeg",
      name: "Non-Stick Cookware Set",
      price: 999,
      oldPrice: 1999,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/download (31).jpeg",
      name: "Home decoration Items",
      price: 899,
      oldPrice: 1799,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/jjk.jpeg",
      name: "House Cleaning Materials",
      price: 1299,
      oldPrice: 2599,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/mb1.jpeg",
      name: "Pink Coquette Egg Chair Bedroom",
      price: 699,
      oldPrice: 1399,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/mb2.jpeg",
      name: "Garden decor Items",
      price: 1699,
      oldPrice: 3399,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/gt.jpeg",
      name: "Kitchen Storage Container Set",
      price: 599,
      oldPrice: 1199,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/download (32).jpeg",
      name: "Electric kitchen set",
      price: 3799,
      oldPrice: 4599,
      reviews: 440,
      discount: "20% OFF",
    },
    {
      img: "/mb.jpeg",
      name: "4 Cute waterbottle Set",
      price: 699,
      oldPrice: 1399,
      reviews: 400,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

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

export default HomeKitchen;



