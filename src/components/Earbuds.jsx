import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Earbuds.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Earbuds() {

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
      img: "/h8.jpeg",
      name: "Apple AirPods Pro (2nd Gen)",
      price: 1999,
      oldPrice: 2999,
      reviews: 3245,
      discount: "20% OFF",
    },
    {
      img: "/h7.jpeg",
      name: "OnePlus Buds Pro 3",
      price: 999,
      oldPrice: 1199,
      reviews: 2148,
      discount: "17% OFF",
    },
    {
      img: "/h5.jpeg",
      name: "Samsung Galaxy Buds 3 Pro",
      price: 1999,
      oldPrice: 2799,
      reviews: 1874,
      discount: "22% OFF",
    },
    {
      img: "/h6.jpeg",
      name: "boAt Airdopes 311 Pro",
      price: 1499,
      oldPrice: 3999,
      reviews: 4563,
      discount: "63% OFF",
    },
    {
      img: "/h4.jpeg",
      name: "Realme Buds Air 7 Pro",
      price: 4999,
      oldPrice: 6999,
      reviews: 1645,
      discount: "29% OFF",
    },
    {
      img: "/h3.jpeg",
      name: "Nothing Ear (a)",
      price: 6999,
      oldPrice: 8999,
      reviews: 1523,
      discount: "22% OFF",
    },
    {
      img: "/h2.jpeg",
      name: "Sony WF-1000XM5",
      price: 1990,
      oldPrice: 2990,
      reviews: 1987,
      discount: "20% OFF",
    },
    {
      img: "/h1.jpeg",
      name: "JBL Wave Beam 2",
      price: 2999,
      oldPrice: 4999,
      reviews: 1348,
      discount: "33% OFF",
    },
    {
      img: "/h.jpeg",
      name: "CMF Buds Pro 2",
      price: 3000,
      oldPrice: 4909,
      reviews: 1724,
      discount: "20% OFF",
    },
    {
      img: "/ss11.jpeg",
      name: "Boult Klarity 3 Earbuds",
      price: 1499,
      oldPrice: 3499,
      reviews: 2815,
      discount: "57% OFF",
    },
    {
      img: "/ss10.jpeg",
      name: "boAt Rockerz 255 Pro+ Neckband",
      price: 1199,
      oldPrice: 2999,
      reviews: 5214,
      discount: "60% OFF",
    },
    {
      img: "/ss9.jpeg",
      name: "OnePlus Bullets Z2 Neckband",
      price: 1699,
      oldPrice: 2299,
      reviews: 3847,
      discount: "26% OFF",
    },
    {
      img: "/REALME BUDS WIRELESS 3.jpeg",
      name: "Realme Buds Wireless 3",
      price: 1799,
      oldPrice: 2999,
      reviews: 2956,
      discount: "40% OFF",
    },
    {
      img: "/ss8.jpeg",
      name: "Noise Airwave Neckband",
      price: 1499,
      oldPrice: 2499,
      reviews: 2138,
      discount: "40% OFF",
    },
    {
      img: "/ss7.jpeg",
      name: "OPPO Enco M32 Neckband",
      price: 1799,
      oldPrice: 2499,
      reviews: 1857,
      discount: "28% OFF",
    },
    {
      img: "/ss6.jpeg",
      name: "boAt BassHeads 100 Earphones",
      price: 399,
      oldPrice: 999,
      reviews: 8145,
      discount: "60% OFF",
    },
    {
      img: "/ss5.jpeg",
      name: "JBL C50HI Wired Earphones",
      price: 299,
      oldPrice: 599,
      reviews: 6732,
      discount: "50% OFF",
    },
    {
      img: "/ss4.jpeg",
      name: "Sony MDR-EX155AP Earphones",
      price: 999,
      oldPrice: 1490,
      reviews: 3568,
      discount: "33% OFF",
    },
    {
      img: "/realme Buds T110.jpeg",
      name: "Realme Buds ",
      price: 599,
      oldPrice: 999,
      reviews: 4421,
      discount: "40% OFF",
    },
    {
      img: "/ss3.jpeg",
      name: "Mi Dual Driver Earphones",
      price: 799,
      oldPrice: 1299,
      reviews: 2896,
      discount: "38% OFF",
    },
    {
      img:  "/ss2.jpeg",
      name: "Boult Z40 Earbuds",
      price: 1299,
      oldPrice: 2999,
      reviews: 2548,
      discount: "57% OFF",
    },
    {
      img: "/ss1.jpeg",
      name: "Hammer KO Earbuds",
      price: 1599,
      oldPrice: 3499,
      reviews: 1736,
      discount: "54% OFF",
    },
    {
      img: "/ss.jpeg",
      name: "Mivi SuperPods",
      price: 1999,
      oldPrice: 4999,
      reviews: 2145,
      discount: "60% OFF",
    },
    {
      img: "/s.jpeg",
      name: "Zebronics Zeb-Sound Bomb X1",
      price: 999,
      oldPrice: 2499,
      reviews: 2658,
      discount: "60% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Earbuds Collection ✨</h1>

        <p>
        🎶 "Your Music. Your World. No Limits."
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

export default Earbuds;