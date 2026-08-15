import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PowerBanks.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function PowerBanks() {

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
      img: "/sd.jpeg",
      name: "Anker PowerCore 20000",
      price: 1999,
      oldPrice: 3999,
      reviews: 4821,
      discount: "50% OFF",
    },
    {
      img: "/sd1.jpeg",
      name: "Xiaomi 20000mAh Power Bank",
      price: 1499,
      oldPrice: 2999,
      reviews: 6235,
      discount: "50% OFF",
    },
    {
      img: "/mini power bank.jpeg",
      name: "boAt EnergyShroom PB300",
      price: 999,
      oldPrice: 2499,
      reviews: 3548,
      discount: "60% OFF",
    },
    {
      img: "/Ambrane (1).jpeg",
      name: "Ambrane PowerLit Boost 20K",
      price: 1199,
      oldPrice: 2499,
      reviews: 4186,
      discount: "52% OFF",
    },
    {
      img: "/ty.jpeg",
      name: "Spigen ArcPack 10000",
      price: 1699,
      oldPrice: 3499,
      reviews: 1724,
      discount: "51% OFF",
    },
    {
      img: "/realme Store.jpeg",
      name: "Realme 10000mAh Power Bank",
      price: 1099,
      oldPrice: 2199,
      reviews: 2875,
      discount: "50% OFF",
    },
    {
      img: "/dd0.jpeg",
      name: "OnePlus SUPERVOOC Power Bank",
      price: 2299,
      oldPrice: 3999,
      reviews: 2368,
      discount: "43% OFF",
    },
    {
      img: "/dd8.jpeg",
      name: "Samsung 25W Power Bank",
      price: 1999,
      oldPrice: 3999,
      reviews: 2647,
      discount: "50% OFF",
    },
    {
      img: "/dd9.jpeg",
      name: "Belkin BoostCharge Power Bank",
      price: 2499,
      oldPrice: 4499,
      reviews: 1956,
      discount: "44% OFF",
    },
    {
      img: "/dd6.jpeg",
      name: "URBN 20000mAh Power Bank",
      price: 1299,
      oldPrice: 2699,
      reviews: 3174,
      discount: "52% OFF",
    },
    {
      img: "/dd5.jpeg",
      name: "Portronics Luxcell 10K",
      price: 899,
      oldPrice: 1999,
      reviews: 2516,
      discount: "55% OFF",
    },
    {
      img: "/dd4.jpeg",
      name: "Stuffcool 20000mAh Power Bank",
      price: 1899,
      oldPrice: 3999,
      reviews: 1842,
      discount: "53% OFF",
    },
    {
      img: "/dd3.jpeg",
      name: "Syska Power Boost 10000",
      price: 799,
      oldPrice: 1699,
      reviews: 2965,
      discount: "53% OFF",
    },
    {
      img: "/dd1.jpeg",
      name: "Zebronics Power Bank 10000",
      price: 999,
      oldPrice: 1799,
      reviews: 2134,
      discount: "44% OFF",
    },
    {
      img: "/dd2.jpeg",
      name: "boAt Wireless Power Bank",
      price: 1799,
      oldPrice: 3499,
      reviews: 1546,
      discount: "49% OFF",
    },
    {
      img: "/ac99.jpeg",
      name: "Anker 737 Power Bank",
      price: 4999,
      oldPrice: 8999,
      reviews: 1365,
      discount: "44% OFF",
    },
    {
      img: "/dd.jpeg",
      name: "Xiaomi Magnetic Power Bank",
      price: 1999,
      oldPrice: 3999,
      reviews: 1823,
      discount: "50% OFF",
    },
    {
      img: "/ac9.jpeg",
      name: "Ambrane MagCharge Power Bank",
      price: 1599,
      oldPrice: 3299,
      reviews: 1748,
      discount: "52% OFF",
    },
    {
      img: "/ac8.jpeg",
      name: "Belkin Magnetic Power Bank",
      price: 2999,
      oldPrice: 6499,
      reviews: 1268,
      discount: "54% OFF",
    },
    {
      img: "/ac7.jpeg",
      name: "Baseus Blade Power Bank",
      price: 3499,
      oldPrice: 6999,
      reviews: 1589,
      discount: "50% OFF",
    },
    {
      img: "/ac6.jpeg",
      name: "SanDisk Fast Charge Power Bank",
      price: 1499,
      oldPrice: 2999,
      reviews: 1457,
      discount: "50% OFF",
    },
    {
      img: "/ac5.jpeg",
      name: "AUKEY USB-C Power Bank",
      price: 1999,
      oldPrice: 3899,
      reviews: 1369,
      discount: "49% OFF",
    },
    {
      img: "/ac4.jpeg",
      name: "ROMOSS Sense 8+",
      price: 1799,
      oldPrice: 3499,
      reviews: 1938,
      discount: "49% OFF",
    },
    {
      img: "/ac3.jpeg",
      name: "UGREEN 145W Power Bank",
      price: 3999,
      oldPrice: 7999,
      reviews: 1186,
      discount: "50% OFF",
    },
  ];
  
  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Bluetooth  & Speakers Collection ✨</h1>

        <p>
        🔌 "Your Backup Power, Always Ready."
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

export default PowerBanks;