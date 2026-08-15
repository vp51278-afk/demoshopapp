import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeDecor.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function HomeDecor() {

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
      img: "/download (34).jpeg",
      name: "Modern Wall Clock",
      price: 799,
      oldPrice: 1499,
      reviews: 425,
      discount: "47% OFF",
    },
    {
      img: "/q16.jpeg",
      name: "Artificial Plant",
      price: 499,
      oldPrice: 999,
      reviews: 362,
      discount: "50% OFF",
    },
    {
      img: "/q15.jpeg",
      name: "LED Fairy Lights",
      price: 299,
      oldPrice: 699,
      reviews: 512,
      discount: "57% OFF",
    },
    {
      img: "/download (35).jpeg",
      name: "Wooden Wall Shelf",
      price: 899,
      oldPrice: 1699,
      reviews: 284,
      discount: "47% OFF",
    },
    {
      img: "/q14.jpeg",
      name: "Ceramic Flower Vase",
      price: 649,
      oldPrice: 1299,
      reviews: 198,
      discount: "50% OFF",
    },
    {
      img: "/q13.jpeg",
      name: "Cushion Cover Set",
      price: 399,
      oldPrice: 799,
      reviews: 320,
      discount: "50% OFF",
    },
    {
      img: "/q12.jpeg",
      name: "Boho Wall Hanging",
      price: 749,
      oldPrice: 1499,
      reviews: 267,
      discount: "50% OFF",
    },
    {
      img: "/download (36).jpeg",
      name: "Designer Table Lamp",
      price: 999,
      oldPrice: 1999,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/q11.jpeg",
      name: "Minimalist Wall Art",
      price: 599,
      oldPrice: 1199,
      reviews: 254,
      discount: "50% OFF",
    },
    {
      img: "/download (40).jpeg",
      name: "Decorative Wall Mirror",
      price: 899,
      oldPrice: 1799,
      reviews: 318,
      discount: "50% OFF",
    },
    {
      img: "/q10.jpeg",
      name: "Indoor Money Plant",
      price: 449,
      oldPrice: 899,
      reviews: 286,
      discount: "50% OFF",
    },
    {
      img: "/q9.jpeg",
      name: "Macrame Wall Hanging",
      price: 699,
      oldPrice: 1399,
      reviews: 192,
      discount: "50% OFF",
    },
    {
      img: "/q8.jpeg",
      name: "Luxury Candle Holder",
      price: 549,
      oldPrice: 1099,
      reviews: 241,
      discount: "50% OFF",
    },
    {
      img: "/download (39).jpeg",
      name: "Wooden Photo Frame Set",
      price: 699,
      oldPrice: 1499,
      reviews: 354,
      discount: "53% OFF",
    },
    {
      img: "/download (38).jpeg",
      name: "Modern Floor Lamp",
      price: 1499,
      oldPrice: 2999,
      reviews: 210,
      discount: "50% OFF",
    },
    {
      img: "/q7.jpeg",
      name: "Soft Area Rug",
      price: 1199,
      oldPrice: 2399,
      reviews: 378,
      discount: "50% OFF",
    },
    {
      img: "/q6.jpeg",
      name: "3D Wall Stickers",
      price: 349,
      oldPrice: 699,
      reviews: 487,
      discount: "50% OFF",
    },
    {
      img: "/q5.jpeg",
      name: "Floating Wall Shelf",
      price: 899,
      oldPrice: 1799,
      reviews: 265,
      discount: "50% OFF",
    },
    {
      img: "/q4.jpeg",
      name: "Boho Dream Catcher",
      price: 399,
      oldPrice: 799,
      reviews: 314,
      discount: "50% OFF",
    },
    {
      img: "/q3.jpeg",
      name: "Designer Curtains",
      price: 999,
      oldPrice: 1999,
      reviews: 275,
      discount: "50% OFF",
    },
    {
      img: "/download (37).jpeg",
      name: "Vintage Table Clock",
      price: 649,
      oldPrice: 1299,
      reviews: 223,
      discount: "50% OFF",
    },
    {
      img: "/q2.jpeg",
      name: "Decor Storage Basket",
      price: 599,
      oldPrice: 1199,
      reviews: 180,
      discount: "50% OFF",
    },
    {
      img: "/q1.jpeg",
      name: "Wall Sconce Light",
      price: 1299,
      oldPrice: 2599,
      reviews: 168,
      discount: "50% OFF",
    },
    {
      img: "/q.jpeg",
      name: "Artificial Bonsai Plant",
      price: 549,
      oldPrice: 1099,
      reviews: 331,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Home Decor Collection ✨</h1>
<p>
"Home is the story of who we are, and a collection of things we love."
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

export default HomeDecor;