import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SmartWatches.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function SmartWatches() {

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
      img: "/djfrgfr.jpeg",
      name: "Apple Watch Series 10",
      price: 3499,
      oldPrice: 6999,
      reviews: 3245,
      discount: "50% OFF",
    },
    {
      img: "/vv23.jpeg",
      name: "Apple Watch SE (2nd Gen)",
      price: 2999,
      oldPrice: 5999,
      reviews: 2894,
      discount: "50% OFF",
    },
    {
      img: "/vv21.jpeg",
      name: "Samsung Galaxy Watch Ultra",
      price: 3299,
      oldPrice: 6999,
      reviews: 2517,
      discount: "53% OFF",
    },
    {
      img: "/vv22.jpeg",
      name: "Samsung Galaxy Watch 7",
      price: 2799,
      oldPrice: 5499,
      reviews: 1865,
      discount: "49% OFF",
    },
    {
      img: "/vv20.jpeg",
      name: "OnePlus Watch 3",
      price: 2999,
      oldPrice: 5999,
      reviews: 2136,
      discount: "50% OFF",
    },
    {
      img: "/vv19.jpeg",
      name: "OnePlus Watch 2R",
      price: 2499,
      oldPrice: 4999,
      reviews: 1982,
      discount: "50% OFF",
    },
    {
      img: "/vv18.jpeg",
      name: "Google Pixel Watch 3",
      price: 3499,
      oldPrice: 6999,
      reviews: 1428,
      discount: "50% OFF",
    },
    {
      img: "/vv17.jpeg",
      name: "CMF Watch Pro 2",
      price: 1999,
      oldPrice: 3999,
      reviews: 1256,
      discount: "50% OFF",
    },
    {
      img: "/vv16.jpeg",
      name: "Noise ColorFit Pro 6",
      price: 1699,
      oldPrice: 3499,
      reviews: 2314,
      discount: "51% OFF",
    },
    {
      img: "/vv15.jpeg",
      name: "NoiseFit Halo 2",
      price: 1499,
      oldPrice: 2999,
      reviews: 1189,
      discount: "50% OFF",
    },
    {
      img: "/vv14.jpeg",
      name: "boAt Storm Call 3",
      price: 1199,
      oldPrice: 2499,
      reviews: 1432,
      discount: "52% OFF",
    },
    {
      img: "/vv13.jpeg",
      name: "boAt Lunar Discovery",
      price: 1399,
      oldPrice: 2799,
      reviews: 1374,
      discount: "50% OFF",
    },
    {
      img: "/vv11.jpeg",
      name: "Fire-Boltt Ninja Call Pro Max",
      price: 999,
      oldPrice: 2199,
      reviews: 956,
      discount: "55% OFF",
    },
    {
      img: "/vv12.jpeg",
      name: "Fire-Boltt Visionary",
      price: 1899,
      oldPrice: 3999,
      reviews: 1642,
      discount: "53% OFF",
    },
    {
      img: "/vv0.jpeg",
      name: "Amazfit Bip 5",
      price: 2499,
      oldPrice: 4999,
      reviews: 2741,
      discount: "50% OFF",
    },
    {
      img: "/vv9.jpeg",
      name: "Amazfit Active 2",
      price: 2999,
      oldPrice: 5999,
      reviews: 1823,
      discount: "50% OFF",
    },
    {
      img: "/vv7.jpeg",
      name: "Realme Watch S2",
      price: 1799,
      oldPrice: 3499,
      reviews: 1575,
      discount: "49% OFF",
    },
    {
      img: "/vv8.jpeg",
      name: "Redmi Watch 5 Lite",
      price: 1599,
      oldPrice: 3299,
      reviews: 1124,
      discount: "52% OFF",
    },
    {
      img: "/vv5.jpeg",
      name: "Huawei Watch Fit 3",
      price: 3299,
      oldPrice: 6499,
      reviews: 987,
      discount: "49% OFF",
    },
    {
      img: "/vv6.jpeg",
      name: "Fitbit Versa 4",
      price: 2999,
      oldPrice: 5999,
      reviews: 954,
      discount: "50% OFF",
    },
    {
      img: "/vv2.jpeg",
      name: "CrossBeats Nexus",
      price: 1999,
      oldPrice: 3999,
      reviews: 873,
      discount: "50% OFF",
    },
    {
      img: "/vv3.jpeg",
      name: "Fastrack Limitless FS1",
      price: 1499,
      oldPrice: 2999,
      reviews: 1056,
      discount: "50% OFF",
    },
    {
      img: "/vv1.jpeg",
      name: "Titan Smart 3",
      price: 2799,
      oldPrice: 5499,
      reviews: 1348,
      discount: "49% OFF",
    },
    {
      img: "/vv.jpeg",
      name: "NoiseFit Force",
      price: 1699,
      oldPrice: 3499,
      reviews: 4168,
      discount: "51% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ SmartWatches Collection ✨</h1>

        <p>
        💙 "Your Fitness. Your Style. Your Smart Watch."
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

export default SmartWatches;