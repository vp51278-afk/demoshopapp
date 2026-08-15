import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fruits.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Fruits() {

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
      img: "/apple.jpeg",
      name: "Fresh Red Apples (1kg)",
      price: 129,
      oldPrice: 199,
      reviews: 1245,
      discount: "35% OFF",
    },
    {
      img: "/f11.jpeg",
      name: "Fresh Bananas (1 Dozen)",
      price: 59,
      oldPrice: 89,
      reviews: 986,
      discount: "34% OFF",
    },
    {
      img: "/f10.jpeg",
      name: "Alphonso Mangoes (1kg)",
      price: 199,
      oldPrice: 299,
      reviews: 874,
      discount: "33% OFF",
    },
    {
      img: "/orange.jpeg",
      name: "Juicy Oranges (1kg)",
      price: 99,
      oldPrice: 149,
      reviews: 753,
      discount: "34% OFF",
    },
    {
      img: "/GRAPES.jpeg",
      name: "Green Grapes (500g)",
      price: 79,
      oldPrice: 119,
      reviews: 689,
      discount: "34% OFF",
    },
    {
      img: "/melon.jpeg",
      name: "Fresh Watermelon",
      price: 149,
      oldPrice: 229,
      reviews: 615,
      discount: "35% OFF",
    },
    {
      img: "/f9.jpeg",
      name: "Pineapple",
      price: 89,
      oldPrice: 139,
      reviews: 824,
      discount: "36% OFF",
    },
    {
      img: "/f8.jpeg",
      name: "Papaya",
      price: 69,
      oldPrice: 109,
      reviews: 592,
      discount: "37% OFF",
    },
    {
      img: "/kii.jpeg",
      name: "Kiwi (3 pcs)",
      price: 149,
      oldPrice: 229,
      reviews: 731,
      discount: "35% OFF",
    },
    {
      img: "/f7.jpeg",
      name: "Pomegranate (1kg)",
      price: 159,
      oldPrice: 239,
      reviews: 648,
      discount: "33% OFF",
    },
    {
      img: "/star.jpeg",
      name: "Fresh Strawberries (250g)",
      price: 119,
      oldPrice: 179,
      reviews: 902,
      discount: "34% OFF",
    },
    {
      img: "/blue.jpeg",
      name: "Blueberries (125g)",
      price: 179,
      oldPrice: 249,
      reviews: 586,
      discount: "28% OFF",
    },
    {
      img: "/f6.jpeg",
      name: "Fresh Pears (1kg)",
      price: 129,
      oldPrice: 189,
      reviews: 712,
      discount: "32% OFF",
    },
    {
      img: "/f5.jpeg",
      name: "Guava (1kg)",
      price: 79,
      oldPrice: 119,
      reviews: 533,
      discount: "34% OFF",
    },
    {
      img: "/f4.jpeg",
      name: "Litchi (500g)",
      price: 99,
      oldPrice: 149,
      reviews: 864,
      discount: "34% OFF",
    },
    {
      img: "/ragon.jpeg",
      name: "Dragon Fruit",
      price: 149,
      oldPrice: 229,
      reviews: 477,
      discount: "35% OFF",
    },
    {
      img: "/f.jpeg",
      name: "Muskmelon",
      price: 79,
      oldPrice: 119,
      reviews: 624,
      discount: "34% OFF",
    },
    {
      img: "/f3.jpeg",
      name: "Fresh Coconut",
      price: 49,
      oldPrice: 79,
      reviews: 541,
      discount: "38% OFF",
    },
    {
      img: "/lime.jpeg",
      name: "Sweet Lime (1kg)",
      price: 99,
      oldPrice: 149,
      reviews: 793,
      discount: "34% OFF",
    },
    {
      img: "/f2.jpeg",
      name: "Avocado",
      price: 159,
      oldPrice: 239,
      reviews: 675,
      discount: "33% OFF",
    },
    {
      img: "/jerry.jpeg",
      name: "Fresh Cherries (250g)",
      price: 199,
      oldPrice: 299,
      reviews: 518,
      discount: "33% OFF",
    },
    {
      img: "/v.jpeg",
      name: "Plums (500g)",
      price: 119,
      oldPrice: 179,
      reviews: 606,
      discount: "34% OFF",
    },
    {
      img: "/f1.jpeg",
      name: "Fresh Peaches (500g)",
      price: 139,
      oldPrice: 209,
      reviews: 982,
      discount: "33% OFF",
    },
    {
      img: "/custard.jpeg",
      name: "Custard Apple (500g)",
      price: 99,
      oldPrice: 149,
      reviews: 1108,
      discount: "34% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Fruits Collection ✨</h1>

        <p>
        "Nature's sweetest gift is fresh fruit." 🍊
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

export default Fruits;