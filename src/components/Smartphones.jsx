import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shoes.css";
import CategorySection5 from "./CategorySection5";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Smartphones() {

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
      img: "/x3.jpeg",
      name: "Apple iPhone 16 Pro",
      price: 119999,
      oldPrice: 129999,
      reviews: 3245,
      discount: "8% OFF",
    },
    {
      img: "/x2.jpeg",
      name: "Apple iPhone 16",
      price: 74999,
      oldPrice: 79999,
      reviews: 2894,
      discount: "6% OFF",
    },
    {
      img: "/x.jpeg",
      name: "Samsung Galaxy S25 Ultra",
      price: 117999,
      oldPrice: 129999,
      reviews: 2517,
      discount: "9% OFF",
    },
    {
      img: "/x1.jpeg",
      name: "Samsung Galaxy S25",
      price: 74999,
      oldPrice: 84999,
      reviews: 1865,
      discount: "12% OFF",
    },
    {
      img: "/o13.jpeg",
      name: "OnePlus 13",
      price: 69999,
      oldPrice: 74999,
      reviews: 2136,
      discount: "7% OFF",
    },
    {
      img: "/o14.jpeg",
      name: "OnePlus 13R",
      price: 42999,
      oldPrice: 46999,
      reviews: 1982,
      discount: "9% OFF",
    },
    {
      img: "/o11.jpeg",
      name: "Google Pixel 9 Pro",
      price: 94999,
      oldPrice: 104999,
      reviews: 1428,
      discount: "10% OFF",
    },
    {
      img: "/o12.jpeg",
      name: "Google Pixel 9",
      price: 74999,
      oldPrice: 79999,
      reviews: 1256,
      discount: "6% OFF",
    },
    {
      img: "/o0.jpeg",
      name: "Nothing Phone (3)",
      price: 54999,
      oldPrice: 59999,
      reviews: 1189,
      discount: "8% OFF",
    },
    {
      img: "/o00.jpeg",
      name: "Nothing Phone (2a)",
      price: 23999,
      oldPrice: 27999,
      reviews: 2314,
      discount: "14% OFF",
    },
    {
      img: "/iQOO 13 5G.jpeg",
      name: "iQOO 13",
      price: 54999,
      oldPrice: 59999,
      reviews: 1432,
      discount: "8% OFF",
    },
    {
      img: "/o8.jpeg",
      name: "Realme GT 7",
      price: 39999,
      oldPrice: 44999,
      reviews: 1374,
      discount: "11% OFF",
    },
    {
      img: "/o9.jpeg",
      name: "Realme P3 Pro",
      price: 24999,
      oldPrice: 27999,
      reviews: 956,
      discount: "11% OFF",
    },
    {
      img: "/o6.jpeg",
      name: "Redmi Note 14 Pro+",
      price: 30999,
      oldPrice: 34999,
      reviews: 1642,
      discount: "11% OFF",
    },
    {
      img: "/o7.jpeg",
      name: "Redmi 14C",
      price: 9999,
      oldPrice: 11999,
      reviews: 2741,
      discount: "17% OFF",
    },
    {
      img: "/poco f7 5g.jpeg",
      name: "POCO F7",
      price: 31999,
      oldPrice: 35999,
      reviews: 1823,
      discount: "11% OFF",
    },
    {
      img: "/o5.jpeg",
      name: "POCO X7 Pro",
      price: 27999,
      oldPrice: 31999,
      reviews: 1575,
      discount: "13% OFF",
    },
    {
      img: "/o4.jpeg",
      name: "Vivo X200",
      price: 65999,
      oldPrice: 71999,
      reviews: 1124,
      discount: "8% OFF",
    },
    {
      img: "/o3.jpeg",
      name: "Vivo V50",
      price: 36999,
      oldPrice: 39999,
      reviews: 987,
      discount: "8% OFF",
    },
    {
      img: "/OPPO Reno14 Series.jpeg",
      name: "OPPO Reno 14",
      price: 38999,
      oldPrice: 42999,
      reviews: 954,
      discount: "9% OFF",
    },
    {
      img: "/oppo.jpeg",
      name: "OPPO Find X8",
      price: 69999,
      oldPrice: 75999,
      reviews: 873,
      discount: "8% OFF",
    },
    {
      img: "/o2.jpeg",
      name: "Motorola Edge 60 Pro",
      price: 34999,
      oldPrice: 38999,
      reviews: 1056,
      discount: "10% OFF",
    },
    {
      img: "/o1.jpeg",
      name: "Samsung Galaxy A56",
      price: 38999,
      oldPrice: 42999,
      reviews: 1348,
      discount: "9% OFF",
    },
    {
      img: "/o.jpeg",
      name: "Apple iPhone 15",
      price: 64999,
      oldPrice: 69999,
      reviews: 4168,
      discount: "7% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ SmartPhones Collection ✨</h1>

        <p>
        "Capture Every Moment. Live Every Memory." 📸
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

export default Smartphones;