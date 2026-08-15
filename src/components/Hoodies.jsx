import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hoodies.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Hoodies() {

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
      img: "/bb.jpeg",
      name: "Black Oversized Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 1245,
      discount: "50% OFF",
    },
    {
      img: "/download (67).jpeg",
      name: "Grey Pullover Hoodie",
      price: 849,
      oldPrice: 1699,
      reviews: 986,
      discount: "50% OFF",
    },
    {
      img: "/as1.jpeg",
      name: "White Cotton Hoodie",
      price: 799,
      oldPrice: 1599,
      reviews: 874,
      discount: "50% OFF",
    },
    {
      img: "/as2.jpeg",
      name: "Blue Graphic Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 753,
      discount: "50% OFF",
    },
    {
      img: "/as.jpeg",
      name: "Olive Green Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 689,
      discount: "50% OFF",
    },
    {
      img: "/yyu.jpeg",
      name: "Maroon Casual Hoodie",
      price: 849,
      oldPrice: 1699,
      reviews: 615,
      discount: "50% OFF",
    },
    {
      img: "/m.jpeg",
      name: "Navy Blue Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 824,
      discount: "50% OFF",
    },
    {
      img: "/i5.jpeg",
      name: "Beige Oversized Hoodie",
      price: 999,
      oldPrice: 1999,
      reviews: 592,
      discount: "50% OFF",
    },
    {
      img: "/i4.jpeg",
      name: "Black Zip-Up Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 731,
      discount: "50% OFF",
    },
    {
      img: "/download (66).jpeg",
      name: "Minimal Logo Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 648,
      discount: "50% OFF",
    },
    {
      img: "/i3.jpeg",
      name: "Streetwear Hoodie",
      price: 999,
      oldPrice: 1999,
      reviews: 902,
      discount: "50% OFF",
    },
    {
      img: "/kio.jpeg",
      name: "Printed Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 586,
      discount: "50% OFF",
    },
    {
      img: "/i1.jpeg",
      name: "Winter Fleece Hoodie",
      price: 1099,
      oldPrice: 2199,
      reviews: 712,
      discount: "50% OFF",
    },
    {
      img: "/download (65).jpeg",
      name: "Coffee Brown Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 533,
      discount: "50% OFF",
    },
    {
      img: "/i0.jpeg",
      name: "Charcoal Grey Hoodie",
      price: 849,
      oldPrice: 1699,
      reviews: 864,
      discount: "50% OFF",
    },
    {
      img: "/fg.jpeg",
      name: "Red Sports Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 477,
      discount: "50% OFF",
    },
    {
      img: "/i.jpeg",
      name: "Oversized Graphic Hoodie",
      price: 999,
      oldPrice: 1999,
      reviews: 624,
      discount: "50% OFF",
    },
    {
      img: "/bn.jpeg",
      name: "Relaxed Fit Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 541,
      discount: "50% OFF",
    },
    {
      img: "/ji.jpeg",
      name: "Solid Cotton Hoodie",
      price: 849,
      oldPrice: 1699,
      reviews: 793,
      discount: "50% OFF",
    },
    {
      img: "/gy.jpeg",
      name: "Classic Pullover Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 675,
      discount: "50% OFF",
    },
    {
      img: "/pk2.jpeg",
      name: "Premium Winter Hoodie",
      price: 1099,
      oldPrice: 2199,
      reviews: 518,
      discount: "50% OFF",
    },
    {
      img: "/download (64).jpeg",
      name: "Casual Everyday Hoodie",
      price: 899,
      oldPrice: 1799,
      reviews: 606,
      discount: "50% OFF",
    },
    {
      img: "/pk1.jpeg",
      name: "Essential Zip Hoodie",
      price: 949,
      oldPrice: 1899,
      reviews: 982,
      discount: "50% OFF",
    },
    {
      img: "/ho.jpeg",
      name: "Premium Oversized Hoodie",
      price: 1199,
      oldPrice: 2399,
      reviews: 1108,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Hoodies Collection ✨</h1>

        <p>
        💙 "Soft, Stylish, and Always in Trend."
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

export default Hoodies;