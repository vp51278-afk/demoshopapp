import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BedroomEssentials.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function BedroomEssentials() {

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
      img: "/BED1.jpeg",
      name: "Double Bed",
      price: 8999,
      oldPrice: 12999,
      reviews: 5421,
      discount: "31% OFF",
    },
    {
      img: "/BED2.jpeg",
      name: "Memory Foam Mattress",
      price: 5999,
      oldPrice: 8499,
      reviews: 4382,
      discount: "29% OFF",
    },
    {
      img: "/BED3.jpeg",
      name: "Soft Sleeping Pillow",
      price: 599,
      oldPrice: 1099,
      reviews: 3245,
      discount: "33% OFF",
    },
    {
      img: "/BED4.jpeg",
      name: "Cotton Bedsheet",
      price: 699,
      oldPrice: 999,
      reviews: 2816,
      discount: "30% OFF",
    },
    {
      img: "/BED5.jpeg",
      name: "Winter Comforter",
      price: 1499,
      oldPrice: 2199,
      reviews: 3654,
      discount: "32% OFF",
    },
    {
      img: "/BED6.jpeg",
      name: "Soft Fleece Blanket",
      price: 999,
      oldPrice: 1499,
      reviews: 2978,
      discount: "33% OFF",
    },
    {
      img: "/BED7.jpeg",
      name: "Premium Duvet",
      price: 1899,
      oldPrice: 2599,
      reviews: 1845,
      discount: "27% OFF",
    },
    {
      img: "/BED8.jpeg",
      name: "Cotton Quilt",
      price: 1399,
      oldPrice: 1999,
      reviews: 2367,
      discount: "30% OFF",
    },
    {
      img: "/BED9.jpeg",
      name: "Decorative Cushion Set",
      price: 599,
      oldPrice: 899,
      reviews: 2148,
      discount: "33% OFF",
    },
    {
      img: "/BED10.jpeg",
      name: "Pillow Cover Set",
      price: 299,
      oldPrice: 499,
      reviews: 1856,
      discount: "40% OFF",
    },
    {
      img: "/BED11.jpeg",
      name: "Luxury Bed Cover",
      price: 1199,
      oldPrice: 1699,
      reviews: 2468,
      discount: "29% OFF",
    },
    {
      img: "/BED12.jpeg",
      name: "LED Night Lamp",
      price: 499,
      oldPrice: 799,
      reviews: 3874,
      discount: "38% OFF",
    },
    {
      img: "/BED13.jpeg",
      name: "Wooden Bedside Table",
      price: 2499,
      oldPrice: 3499,
      reviews: 1726,
      discount: "29% OFF",
    },
    {
      img: "/BED14.jpeg",
      name: "Digital Alarm Clock",
      price: 699,
      oldPrice: 999,
      reviews: 4325,
      discount: "30% OFF",
    },
    {
      img: "/BED15.jpeg",
      name: "Wardrobe Organizer",
      price: 899,
      oldPrice: 1299,
      reviews: 2645,
      discount: "31% OFF",
    },
    {
      img: "/BED16.jpeg",
      name: "Laundry Basket",
      price: 499,
      oldPrice: 699,
      reviews: 1987,
      discount: "29% OFF",
    },
    {
      img: "/BED17.jpeg",
      name: "Wooden Hangers (Pack of 10)",
      price: 399,
      oldPrice: 599,
      reviews: 3564,
      discount: "33% OFF",
    },
    {
      img: "/BED18.jpeg",
      name: "Knitted Throw Blanket",
      price: 899,
      oldPrice: 1299,
      reviews: 1685,
      discount: "31% OFF",
    },
    {
      img: "/BED19.jpeg",
      name: "Mini Air Humidifier",
      price: 999,
      oldPrice: 1499,
      reviews: 2841,
      discount: "33% OFF",
    },
    {
      img: "/BED20.jpeg",
      name: "Essential Oil Diffuser",
      price: 1199,
      oldPrice: 1699,
      reviews: 2256,
      discount: "29% OFF",
    },
    {
      img: "/BED21.jpeg",
      name: "Bedroom Slippers",
      price: 399,
      oldPrice: 599,
      reviews: 4512,
      discount: "33% OFF",
    },
    {
      img: "/BED22.jpeg",
      name: "Soft Bedroom Rug",
      price: 799,
      oldPrice: 1199,
      reviews: 2436,
      discount: "33% OFF",
    },
    {
      img: "/BED23.jpeg",
      name: "Blackout Curtains",
      price: 1499,
      oldPrice: 2199,
      reviews: 3175,
      discount: "32% OFF",
    },
    {
      img: "/BED24.jpeg",
      name: "Under Bed Storage Box",
      price: 699,
      oldPrice: 999,
      reviews: 2089,
      discount: "30% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Bedroom Essentials Collection ✨</h1>

        <p>
       "Everything you need for the sleep you deserve."
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

export default BedroomEssentials;