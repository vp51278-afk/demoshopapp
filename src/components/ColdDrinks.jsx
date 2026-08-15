
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ColdDrinks.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function ColdDrinks() {

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
      img: "/co.jpeg",
      name: "Coca-Cola (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 5245,
      discount: "25% OFF",
    },
    {
      img: "/cg.jpeg",
      name: "Pepsi (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 4821,
      discount: "25% OFF",
    },
    {
      img: "/col.jpeg",
      name: "Sprite (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 4389,
      discount: "25% OFF",
    },
    {
      img: "/fantaguyajhdk.jpeg",
      name: "Fanta Orange (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 3654,
      discount: "25% OFF",
    },
    {
      img: "/Thumbs up.jpeg",
      name: "Thums Up (750ml)",
      price: 49,
      oldPrice: 65,
      reviews: 4568,
      discount: "25% OFF",
    },
    {
      img: "/Mountain Dew.jpeg",
      name: "Mountain Dew (750ml)",
      price: 49,
      oldPrice: 65,
      reviews: 3947,
      discount: "25% OFF",
    },
    {
      img: "/𝑳𝒊𝒎𝒄𝒂.jpeg",
      name: "Limca (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 3158,
      discount: "25% OFF",
    },
    {
      img: "/7up Poster.jpeg",
      name: "7UP (750ml)",
      price: 45,
      oldPrice: 60,
      reviews: 2845,
      discount: "25% OFF",
    },
    {
      img: "/Maaza Mango Drink.jpeg",
      name: "Maaza (600ml)",
      price: 40,
      oldPrice: 55,
      reviews: 5214,
      discount: "27% OFF",
    },
    {
      img: "/mybox.jpeg",
      name: "Slice (600ml)",
      price: 40,
      oldPrice: 55,
      reviews: 4762,
      discount: "27% OFF",
    },
    {
      img: "/froti.jpeg",
      name: "Frooti (600ml)",
      price: 35,
      oldPrice: 50,
      reviews: 4987,
      discount: "30% OFF",
    },
    {
      img: "/kd.jpeg",
      name: "Appy Fizz (500ml)",
      price: 35,
      oldPrice: 45,
      reviews: 3521,
      discount: "22% OFF",
    },
    {
      img: "/kd1.jpeg",
      name: "Real Mixed Fruit Juice (1L)",
      price: 99,
      oldPrice: 120,
      reviews: 2145,
      discount: "18% OFF",
    },
    {
      img: "/Redirect Notice (2).jpeg",
      name: "Tropicana Orange Juice (1L)",
      price: 105,
      oldPrice: 130,
      reviews: 1897,
      discount: "19% OFF",
    },
    {
      img: "/kd2.jpeg",
      name: "Minute Maid Pulpy Orange",
      price: 40,
      oldPrice: 55,
      reviews: 2386,
      discount: "27% OFF",
    },
    {
      img: "/Redirect Notice (1).jpeg",
      name: "Paper Boat Aamras",
      price: 30,
      oldPrice: 40,
      reviews: 1928,
      discount: "25% OFF",
    },
    {
      img: "/kd3.jpeg",
      name: "Red Bull Energy Drink",
      price: 115,
      oldPrice: 140,
      reviews: 2785,
      discount: "18% OFF",
    },
    {
      img: "/drink.jpeg",
      name: "Monster Energy Drink",
      price: 125,
      oldPrice: 150,
      reviews: 2418,
      discount: "17% OFF",
    },
    {
      img: "/sting.jpeg",
      name: "Sting Energy Drink",
      price: 20,
      oldPrice: 25,
      reviews: 6845,
      discount: "20% OFF",
    },
    {
      img: "/kd4.jpeg",
      name: "Bovonto Soft Drink",
      price: 35,
      oldPrice: 45,
      reviews: 1526,
      discount: "22% OFF",
    },
    {
      img: "/kd5.jpeg",
      name: "Coconut Water (500ml)",
      price: 45,
      oldPrice: 60,
      reviews: 2765,
      discount: "25% OFF",
    },
    {
      img: "/kd7.jpeg",
      name: "Bisleri Club Soda",
      price: 20,
      oldPrice: 25,
      reviews: 3148,
      discount: "20% OFF",
    },
    {
      img: "/kd6.jpeg",
      name: "Schweppes Ginger Ale",
      price: 60,
      oldPrice: 80,
      reviews: 1278,
      discount: "25% OFF",
    },
    {
      img: "/kd8.jpeg",
      name: "Kinley Soda",
      price: 20,
      oldPrice: 25,
      reviews: 2954,
      discount: "20% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Cold Drinks Collection ✨</h1>

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

export default ColdDrinks;