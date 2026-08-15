import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothSpeakers.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function BluetoothSpeakers() {

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
      img: "/BL.jpeg",
      name: "Sony WH-1000XM5 Headphones",
      price: 2999,
      oldPrice: 7999,
      reviews: 2145,
      discount: "23% OFF",
    },
    {
      img: "/BL1.jpeg",
      name: "Apple AirPods Max",
      price: 4999,
      oldPrice: 5999,
      reviews: 1658,
      discount: "25% OFF",
    },
    {
      img: "/BL2.jpeg",
      name: "boAt Rockerz 550",
      price: 1799,
      oldPrice: 4999,
      reviews: 5842,
      discount: "64% OFF",
    },
    {
      img: "/BL4.jpeg",
      name: "JBL Tune 770NC",
      price: 6499,
      oldPrice: 8999,
      reviews: 2348,
      discount: "28% OFF",
    },
    {
      img: "/BL5.jpeg",
      name: "Anker Soundcore Q20i",
      price: 4999,
      oldPrice: 6999,
      reviews: 1742,
      discount: "29% OFF",
    },
    {
      img: "/BL6.jpeg",
      name: "Sony CH720N",
      price: 7999,
      oldPrice: 10999,
      reviews: 1896,
      discount: "27% OFF",
    },
    {
      img: "/Boat Nirvana 751 ANC,65Hrs Battery,.jpeg",
      name: "boAt Nirvana 751 ANC",
      price: 2999,
      oldPrice: 7999,
      reviews: 4231,
      discount: "63% OFF",
    },
    {
      img: "/BL7.jpeg",
      name: "JBL Tune 510BT",
      price: 2999,
      oldPrice: 4999,
      reviews: 3156,
      discount: "40% OFF",
    },
    {
      img: "/BL8.jpeg",
      name: "Marshall Major V",
      price: 12999,
      oldPrice: 15999,
      reviews: 1218,
      discount: "19% OFF",
    },
    {
      img: "/BL9.jpeg",
      name: "Sennheiser HD 450BT",
      price: 9999,
      oldPrice: 14999,
      reviews: 1374,
      discount: "33% OFF",
    },
    {
      img: "/BL10.jpeg",
      name: "JBL Flip 6 Speaker",
      price: 7999,
      oldPrice: 11999,
      reviews: 2489,
      discount: "33% OFF",
    },
    {
      img: "/BL11.jpeg",
      name: "Marshall Emberton II",
      price: 2990,
      oldPrice: 3999,
      reviews: 1345,
      discount: "29% OFF",
    },
    {
      img: "/BL12.jpeg",
      name: "boAt Stone 1200",
      price: 3499,
      oldPrice: 6999,
      reviews: 3658,
      discount: "50% OFF",
    },
    {
      img: "/BL13.jpeg",
      name: "JBL Go 4",
      price: 2999,
      oldPrice: 4499,
      reviews: 2745,
      discount: "33% OFF",
    },
    {
      img: "/BL14.jpeg",
      name: "Sony ULT Field 1",
      price: 8999,
      oldPrice: 10999,
      reviews: 1324,
      discount: "18% OFF",
    },
    {
      img: "/BL15.jpeg",
      name: "Tribit StormBox Mini",
      price: 2499,
      oldPrice: 3999,
      reviews: 1834,
      discount: "38% OFF",
    },
    {
      img: "/BL16.jpeg",
      name: "Mivi Fort S120",
      price: 1799,
      oldPrice: 3499,
      reviews: 2946,
      discount: "49% OFF",
    },
    {
      img: "/ZEBRONICS  Soundbar with Subwoofer.jpeg",
      name: "Zebronics Sound Feast 80",
      price: 3999,
      oldPrice: 6999,
      reviews: 1648,
      discount: "43% OFF",
    },
    {
      img: "/Bluetooth speaker.jpeg",
      name: "boAt PartyPal 185",
      price: 6499,
      oldPrice: 9999,
      reviews: 1265,
      discount: "35% OFF",
    },
    {
      img: "/BL17.jpeg",
      name: "Portronics Dash 12",
      price: 1499,
      oldPrice: 2999,
      reviews: 2148,
      discount: "50% OFF",
    },
    {
      img: "/BL18.jpeg",
      name: "Marshall Acton III",
      price: 2499,
      oldPrice: 7999,
      reviews: 1124,
      discount: "17% OFF",
    },
    {
      img: "/BL19.jpeg",
      name: "Harman Kardon Onyx Studio 9",
      price: 18999,
      oldPrice: 24999,
      reviews: 986,
      discount: "24% OFF",
    },
    {
      img: "/BL20.jpeg",
      name: "Sony SRS-XB100",
      price: 3999,
      oldPrice: 5999,
      reviews: 1735,
      discount: "33% OFF",
    },
    {
      img: "/BL21.jpeg",
      name: "Mi Portable Bluetooth Speaker",
      price: 2499,
      oldPrice: 3999,
      reviews: 2895,
      discount: "38% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ BluetoothSpeakers Collection ✨</h1>

        <p>
        ⚡ "Portable Sound. Endless Entertainment."
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

export default BluetoothSpeakers;