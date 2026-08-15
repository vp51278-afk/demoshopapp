import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Skincare.css";
import CategorySection3 from "./CategorySection3";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Skincare() {

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
      img: "/truru.jpeg",
      name: "Dove Intense Repair Shampoo",
      price: 299,
      oldPrice: 499,
      reviews: 4521,
      discount: "40% OFF",
    },
    {
      img: "/s1.jpeg",
      name: "L'Oréal Total Repair 5 Shampoo",
      price: 399,
      oldPrice: 599,
      reviews: 3874,
      discount: "33% OFF",
    },
    {
      img: "/s2.jpeg",
      name: "TRESemmé Keratin Smooth Shampoo",
      price: 549,
      oldPrice: 799,
      reviews: 2918,
      discount: "31% OFF",
    },
    {
      img: "/s3.jpeg",
      name: "Mamaearth Onion Hair Oil",
      price: 449,
      oldPrice: 699,
      reviews: 3267,
      discount: "36% OFF",
    },
    {
      img: "/s4.jpeg",
      name: "Parachute Coconut Hair Oil",
      price: 249,
      oldPrice: 349,
      reviews: 5120,
      discount: "29% OFF",
    },
    {
      img: "/s5.jpeg",
      name: "Livon Hair Serum",
      price: 299,
      oldPrice: 449,
      reviews: 2458,
      discount: "33% OFF",
    },
    {
      img: "/yry.jpeg",
      name: "BBlunt Heat Protection Mist",
      price: 499,
      oldPrice: 699,
      reviews: 1985,
      discount: "29% OFF",
    },
    {
      img: "/s6.jpeg",
      name: "Skin Brightening Body Wash",
      price: 799,
      oldPrice: 1099,
      reviews: 1548,
      discount: "27% OFF",
    },
    {
      img: "/s7.jpeg",
      name: "Dove Intensive Repair Shampoo & Conditioner Set",
      price: 449,
      oldPrice: 699,
      reviews: 2145,
      discount: "36% OFF",
    },
    {
      img: "/s8.jpeg",
      name: "L'Oréal Extraordinary Clay Conditioner",
      price: 349,
      oldPrice: 549,
      reviews: 1876,
      discount: "36% OFF",
    },
    {
      img: "/s9.jpeg",
      name: "Cetaphil Gentle Skin Cleanser",
      price: 699,
      oldPrice: 999,
      reviews: 4832,
      discount: "30% OFF",
    },
    {
      img: "/s10.jpeg",
      name: "Simple Refreshing Face Wash",
      price: 399,
      oldPrice: 599,
      reviews: 2956,
      discount: "33% OFF",
    },
    {
      img: "/s11.jpeg",
      name: "Minimalist Vitamin C Serum",
      price: 699,
      oldPrice: 999,
      reviews: 2645,
      discount: "30% OFF",
    },
    {
      img: "/aaag.jpeg",
      name: "The Derma Co Salicylic Acid Serum",
      price: 599,
      oldPrice: 899,
      reviews: 2284,
      discount: "33% OFF",
    },
    {
      img: "/moisturizer.jpeg",
      name: "Dot & Key Gel Moisturizer",
      price: 545,
      oldPrice: 795,
      reviews: 1723,
      discount: "31% OFF",
    },
    {
      img: "/s12.jpeg",
      name: "Neutrogena Hydro Boost Gel",
      price: 999,
      oldPrice: 1399,
      reviews: 3168,
      discount: "29% OFF",
    },
    {
      img: "/s13.jpeg",
      name: "Aqualogica Glow Sunscreen SPF50",
      price: 499,
      oldPrice: 699,
      reviews: 2475,
      discount: "29% OFF",
    },
    {
      img: "/s14.jpeg",
      name: "La Shield Sunscreen Gel SPF40",
      price: 899,
      oldPrice: 1299,
      reviews: 1654,
      discount: "31% OFF",
    },
    {
      img: "/s15.jpeg",
      name: "Garnier Micellar Cleansing Water",
      price: 349,
      oldPrice: 499,
      reviews: 2841,
      discount: "30% OFF",
    },
    {
      img: "/s16.jpeg",
      name: "Plum Green Tea Night Gel",
      price: 575,
      oldPrice: 799,
      reviews: 1982,
      discount: "28% OFF",
    },
    {
      img: "/s17.jpeg",
      name: "Mamaearth Ubtan Face Wash",
      price: 299,
      oldPrice: 449,
      reviews: 2568,
      discount: "33% OFF",
    },
    {
      img: "/ygewr.jpeg",
      name: "Lakmé Peach Milk Moisturizer",
      price: 349,
      oldPrice: 499,
      reviews: 2187,
      discount: "30% OFF",
    },
    {
      img: "/hwdka.jpeg",
      name: "Foxtale Daily Duet Cleanser",
      price: 395,
      oldPrice: 595,
      reviews: 1496,
      discount: "34% OFF",
    },
    {
      img: "/sgsg.jpeg",
      name: "Minimalist Niacinamide 10% Serum",
      price: 599,
      oldPrice: 899,
      reviews: 2789,
      discount: "33% OFF",
    },
  ];


  return (
    <>
      {/* Category Section */}
      <CategorySection3 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Skin and Hair Care Collection ✨</h1>

        <p>
        🌟 "Where Fashion Meets Every Step."
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

export default Skincare;