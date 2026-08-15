import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lehenga.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Lehenga() {

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
    img: "/download (12).jpeg",
    name: "Black Sequin Party Wear Lehenga",
    price: 1800,
    oldPrice: 2499,
    reviews: 445,
    discount: "32% OFF",
  },
  {
    img: "/yu32.jpeg",
    name: "Floral Embroidered Lehenga Choli",
    price: 1500,
    oldPrice: 2999,
    reviews: 389,
    discount: "50% OFF",
  },
  {
    img: "/yu33.jpeg",
    name: "Emerald Green Half Saree Lehenga",
    price: 1900,
    oldPrice: 2799,
    reviews: 456,
    discount: "50% OFF",
  },
  {
    img: "/yu31.jpeg",
    name: "Black Sequins Designer Lehenga",
    price: 700,
    oldPrice: 1499,
    reviews: 112,
    discount: "53% OFF",
  },
  {
    img: "/yu30.jpeg",
    name: "Blush Pink Bridal Lehenga",
    price: 1500,
    oldPrice: 2999,
    reviews: 213,
    discount: "50% OFF",
  },
  {
    img: "/yu27.jpeg",
    name: "Sage Green Halter-Neck Lehenga",
    price: 1500,
    oldPrice: 2999,
    reviews: 178,
    discount: "50% OFF",
  },
  {
    img: "/yu28.jpeg",
    name: "Navy Blue Designer Lehenga",
    price: 1900,
    oldPrice: 3999,
    reviews: 145,
    discount: "50% OFF",
  },
  {
    img: "/download (11).jpeg",
    name: "Pink Wedding Lehenga",
    price: 2900,
    oldPrice: 3799,
    reviews: 398,
    discount: "50% OFF",
  },

{
  img: "/wedding.jpeg",
  name: "Red Bridal Lehenga",
  price: 3499,
  oldPrice: 6999,
  reviews: 482,
  discount: "50% OFF",
},
{
  img: "/yu26.jpeg",
  name: "Pink Embroidered Lehenga",
  price: 2999,
  oldPrice: 5999,
  reviews: 368,
  discount: "50% OFF",
},
{
  img: "/foral kehd.jpeg",
  name: "Floral Printed Lehenga",
  price: 2499,
  oldPrice: 4999,
  reviews: 254,
  discount: "50% OFF",
},
{
  img: "/Royal Ethnic Look.jpeg",
  name: " Dandiya lehenga",
  price: 2799,
  oldPrice: 5599,
  reviews: 326,
  discount: "50% OFF",
},
{
  img: "/yu24.jpeg",
  name: "Green Silk Lehenga",
  price: 3999,
  oldPrice: 7999,
  reviews: 415,
  discount: "50% OFF",
},
{
  img: "/yu25.jpeg",
  name: "Royal Blue Party Lehenga",
  price: 3299,
  oldPrice: 6599,
  reviews: 291,
  discount: "50% OFF",
},
{
  img: "/ledfs.jpeg",
  name: "Maroon Velvet Lehenga",
  price: 4499,
  oldPrice: 8999,
  reviews: 378,
  discount: "50% OFF",
},
{
  img: "/yu23.jpeg",
  name: "Peach Designer Lehenga",
  price: 3699,
  oldPrice: 7399,
  reviews: 342,
  discount: "50% OFF",
},
{
  img: "/yu22.jpeg",
  name: "Ivory Wedding Lehenga",
  price: 4999,
  oldPrice: 9999,
  reviews: 445,
  discount: "50% OFF",
},
{
  img: "/yu21.jpeg",
  name: "Black Sequins Lehenga",
  price: 2899,
  oldPrice: 5799,
  reviews: 267,
  discount: "50% OFF",
},
{
  img: "/yu20.jpeg",
  name: "Lavender Net Lehenga",
  price: 3199,
  oldPrice: 6399,
  reviews: 298,
  discount: "50% OFF",
},
{
  img: "/yu18.jpeg",
  name: "Orange Bandhani Lehenga",
  price: 2599,
  oldPrice: 5199,
  reviews: 213,
  discount: "50% OFF",
},
{
  img: "/yu19.jpeg",
  name: "Purple Embellished Lehenga",
  price: 4299,
  oldPrice: 8599,
  reviews: 356,
  discount: "50% OFF",
},
{
  img: "/yu17.jpeg",
  name: "Pastel Pink Reception Lehenga",
  price: 3899,
  oldPrice: 7799,
  reviews: 322,
  discount: "50% OFF",
},
{
  img: "/wedding lehenga.jpeg",
  name: "Golden Bridal Lehenga",
  price: 5499,
  oldPrice: 10999,
  reviews: 406,
  discount: "50% OFF",
},
{
  img: "/yu16.jpeg",
  name: "Traditional Red Wedding Lehenga",
  price: 4699,
  oldPrice: 9399,
  reviews: 518,
  discount: "50% OFF",
},
];
  return (
    <>
      {/* Category Section */}
      <CategorySection/>

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Lehenga Collection ✨</h1>

        <p>
        "Twirling into Elegance."
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



export default Lehenga;

