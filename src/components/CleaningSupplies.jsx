
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CleaningSupplies.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function CleaningSupplies() {

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
      img: "/clean17.jpeg",
      name: "Vanish (500ml)",
      price: 98,
      oldPrice: 110,
      reviews: 4215,
      discount: "11% OFF",
    },
    {
      img: "/ttryry.jpeg",
      name: "Lizol Disinfectant Floor Cleaner (1L)",
      price: 215,
      oldPrice: 245,
      reviews: 8940,
      discount: "12% OFF",
    },
    {
      img: "/tdeytg.jpeg",
      name: "Harpic Power Plus Toilet Cleaner (1L)",
      price: 195,
      oldPrice: 220,
      reviews: 7632,
      discount: "11% OFF",
    },
    {
      img: "/clean16.jpeg",
      name: "Vim Lemon Dishwash Gel (750ml)",
      price: 155,
      oldPrice: 180,
      reviews: 6520,
      discount: "14% OFF",
    },
    {
      img: "/clean15.jpeg",
      name: "Dettol Disinfectant Spray & Surface Cleaner",
      price: 299,
      oldPrice: 349,
      reviews: 3120,
      discount: "14% OFF",
    },
    {
      img: "/clean14.jpeg",
      name: "Domex Fresh Guard Bathroom Cleaner (500ml)",
      price: 120,
      oldPrice: 140,
      reviews: 2410,
      discount: "14% OFF",
    },
    {
      img: "/clean13.jpeg",
      name: "Surf Excel Matic Liquid Detergent (1L)",
      price: 230,
      oldPrice: 260,
      reviews: 5840,
      discount: "12% OFF",
    },
    {
      img: "/clean12.jpeg",
      name: "Comfort Fabric Conditioner (860ml)",
      price: 210,
      oldPrice: 240,
      reviews: 4180,
      discount: "13% OFF",
    },
    {
      img: "/clean11.jpeg",
      name: "Pril Lime Liquid Dishwash (425ml)",
      price: 105,
      oldPrice: 120,
      reviews: 1950,
      discount: "13% OFF",
    },
    {
      img: "/Gala e-Quick Spin Mop,.jpeg",
      name: "Gala Spin Mop & Bucket Set",
      price: 1199,
      oldPrice: 1599,
      reviews: 3420,
      discount: "25% OFF",
    },
    {
      img: "/clean10.jpeg",
      name: "Microfiber Cleaning Cloth (Pack of 4)",
      price: 199,
      oldPrice: 299,
      reviews: 5120,
      discount: "33% OFF",
    },
    {
      img: "/clean9.jpeg",
      name: "Odopic Dishwash Cleaning Powder (1kg)",
      price: 60,
      oldPrice: 70,
      reviews: 1240,
      discount: "14% OFF",
    },
    {
      img: "/clean8.jpeg",
      name: "Scotch-Brite Scrub Pad (Pack of 6)",
      price: 89,
      oldPrice: 110,
      reviews: 3850,
      discount: "19% OFF",
    },
    {
      img: "/clean7.jpeg",
      name: "Gala Floor Wiper",
      price: 145,
      oldPrice: 180,
      reviews: 2540,
      discount: "19% OFF",
    },
    {
      img: "/clean6.jpeg",
      name: "Dettol Handwash Refill (750ml)",
      price: 175,
      oldPrice: 210,
      reviews: 4720,
      discount: "17% OFF",
    },
    {
      img: "/fbxf.jpeg",
      name: "Air Wick Room Freshener Spray",
      price: 149,
      oldPrice: 189,
      reviews: 3240,
      discount: "21% OFF",
    },
    {
      img: "/Captain Hygiene Rose Phenyl.jpeg",
      name: "White Phenyl Floor Cleaner (1L)",
      price: 110,
      oldPrice: 130,
      reviews: 1640,
      discount: "15% OFF",
    },
    {
      img: "/clean5.jpeg",
      name: "Multipurpose Cleaning Brush",
      price: 79,
      oldPrice: 99,
      reviews: 2150,
      discount: "20% OFF",
    },
    {
      img: "/clean3.jpeg",
      name: "Toilet Brush with Holder",
      price: 149,
      oldPrice: 199,
      reviews: 1830,
      discount: "25% OFF",
    },
    {
      img: "/clean4.jpeg",
      name: "Garbage Bags Roll (30 Pieces)",
      price: 99,
      oldPrice: 125,
      reviews: 2970,
      discount: "21% OFF",
    },
    {
      img: "/clean2.jpeg",
      name: "Reusable Cleaning Gloves",
      price: 129,
      oldPrice: 159,
      reviews: 2280,
      discount: "19% OFF",
    },
    {
      img: "/Kdepelwş.jpeg",
      name: "Plastic Laundry Basket",
      price: 349,
      oldPrice: 449,
      reviews: 1420,
      discount: "22% OFF",
    },
    {
      img: "/clean1.jpeg",
      name: "Sponge Wipes (Pack of 5)",
      price: 95,
      oldPrice: 120,
      reviews: 2650,
      discount: "21% OFF",
    },
    {
      img: "/clean.jpeg",
      name: "Premium Broom & Dustpan Set",
      price: 299,
      oldPrice: 399,
      reviews: 1960,
      discount: "25% OFF",
    }
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Cleaning Products Collection ✨</h1>

        <p>
        Clean Home, Happy Life. ✨
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

export default CleaningSupplies;