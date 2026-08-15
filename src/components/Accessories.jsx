import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accessories.css";
import CategorySection3 from "./CategorySection3";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Accessories() {

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
      img: "/a2.jpeg",
      name: "Bella Vita Luxury Perfume",
      price: 399,
      oldPrice: 999,
      reviews: 4521,
      discount: "60% OFF",
    },
    {
      img: "/a3.jpeg",
      name: "Fogg Scent Perfume",
      price: 299,
      oldPrice: 699,
      reviews: 3825,
      discount: "57% OFF",
    },
    {
      img: "/CELESTE PERFUME SKIN BY TITAN.jpeg",
      name: "Skinn Celeste Perfume",
      price: 999,
      oldPrice: 1899,
      reviews: 2148,
      discount: "47% OFF",
    },
    {
      img: "/ufgwh.jpeg",
      name: "Butterfly Pendant Necklace",
      price: 249,
      oldPrice: 699,
      reviews: 1954,
      discount: "64% OFF",
    },
    {
      img: "/a1.jpeg",
      name: "Layered Heart Necklace",
      price: 299,
      oldPrice: 799,
      reviews: 1768,
      discount: "63% OFF",
    },
    {
      img: "/a4.jpeg",
      name: "Pearl Choker",
      price: 349,
      oldPrice: 899,
      reviews: 1425,
      discount: "61% OFF",
    },
    {
      img: "/a5.jpeg",
      name: "Crystal Hoop Earrings",
      price: 199,
      oldPrice: 599,
      reviews: 2861,
      discount: "67% OFF",
    },
    {
      img: "/a6.jpeg",
      name: "Black Drop Earrings",
      price: 229,
      oldPrice: 699,
      reviews: 2478,
      discount: "67% OFF",
    },
    {
      img: "/a7.jpeg",
      name: "Pearl Stud Earrings(2 Set)",
      price: 149,
      oldPrice: 399,
      reviews: 3024,
      discount: "63% OFF",
    },
    {
      img: "/a8.jpeg",
      name: "Charm Bracelet",
      price: 249,
      oldPrice: 699,
      reviews: 1548,
      discount: "64% OFF",
    },
    {
      img: "/Elegant Rose Gold Bracelet Aesthetic for Women.jpeg",
      name: "Rose Gold Bracelet",
      price: 349,
      oldPrice: 899,
      reviews: 1762,
      discount: "61% OFF",
    },
    {
      img: "/women stylish ring.jpeg",
      name: "Minimal Ring Set",
      price: 199,
      oldPrice: 599,
      reviews: 3187,
      discount: "67% OFF",
    },
    {
      img: "/a9.jpeg",
      name: "Butterfly Ring",
      price: 149,
      oldPrice: 499,
      reviews: 2365,
      discount: "70% OFF",
    },
    {
      img: "/Anklets 1378 - Etsy UK.jpeg",
      name: "Silver Anklet",
      price: 199,
      oldPrice: 549,
      reviews: 1856,
      discount: "64% OFF",
    },
    {
      img: "/a10.jpeg",
      name: "Boho Beaded Anklet",
      price: 169,
      oldPrice: 449,
      reviews: 1265,
      discount: "62% OFF",
    },
    {
      img: "/a11.jpeg",
      name: "Hair Claw Clips Set",
      price: 179,
      oldPrice: 499,
      reviews: 4258,
      discount: "64% OFF",
    },
    {
      img: "/a12.jpeg",
      name: "Pearl Hair Band",
      price: 149,
      oldPrice: 399,
      reviews: 1964,
      discount: "63% OFF",
    },
    {
      img: "/Chouchou en satin - White.jpeg",
      name: "Satin Scrunchies",
      price: 129,
      oldPrice: 349,
      reviews: 2845,
      discount: "63% OFF",
    },
    {
      img: "/a13.jpeg",
      name: "Mini Sling Bag",
      price: 799,
      oldPrice: 1599,
      reviews: 2149,
      discount: "50% OFF",
    },
    {
      img: "/a14.jpeg",
      name: "Classic Wallet",
      price: 499,
      oldPrice: 1099,
      reviews: 1682,
      discount: "55% OFF",
    },
    {
      img: "/a15.jpeg",
      name: "Cat Eye Sunglasses",
      price: 349,
      oldPrice: 899,
      reviews: 2745,
      discount: "61% OFF",
    },
    {
      img: "/a16.jpeg",
      name: "Square Frame Sunglasses",
      price: 449,
      oldPrice: 999,
      reviews: 1836,
      discount: "55% OFF",
    },
    {
      img: "/a17.jpeg",
      name: "Printed Silk Scarf",
      price: 299,
      oldPrice: 799,
      reviews: 1254,
      discount: "63% OFF",
    },
    {
      img: "/a18.jpeg",
      name: "Elegant Analog Watch",
      price: 1299,
      oldPrice: 2499,
      reviews: 3456,
      discount: "48% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection3 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Accessories Collection ✨</h1>

        <p>
    "Elegance in looks"
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


export default Accessories;

