import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shoes.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Shoes() {

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
      img: "/shoes (1).jpeg",
      name: "White Sneakers",
      price: 999,
      oldPrice: 2499,
      reviews: 1245,
      discount: "60% OFF",
    },
    {
      img: "/cv.jpeg",
      name: "Black Running Shoes",
      price: 1299,
      oldPrice: 2999,
      reviews: 986,
      discount: "57% OFF",
    },
    {
      img: "/x0.jpeg",
      name: "Casual Canvas Shoes",
      price: 899,
      oldPrice: 2199,
      reviews: 874,
      discount: "59% OFF",
    },
    {
      img: "/vbn.jpeg",
      name: "High Top Sneakers",
      price: 1499,
      oldPrice: 3499,
      reviews: 753,
      discount: "57% OFF",
    },
    {
      img: "/cv5.jpeg",
      name: "Sports Training Shoes",
      price: 1399,
      oldPrice: 3199,
      reviews: 689,
      discount: "56% OFF",
    },
    {
      img: "/cv1.jpeg",
      name: "Leather Loafers",
      price: 1599,
      oldPrice: 3699,
      reviews: 615,
      discount: "57% OFF",
    },
    {
      img: "/x9.jpeg",
      name: "Formal Oxford Shoes",
      price: 1799,
      oldPrice: 3999,
      reviews: 824,
      discount: "55% OFF",
    },
    {
      img: "/x8.jpeg",
      name: "Slip-On Casual Shoes",
      price: 1099,
      oldPrice: 2599,
      reviews: 592,
      discount: "58% OFF",
    },
    {
      img: "/cv2.jpeg",
      name: "Gym Training Shoes",
      price: 1499,
      oldPrice: 3399,
      reviews: 731,
      discount: "56% OFF",
    },
    {
      img: "/x7.jpeg",
      name: "Grey Walking Shoes",
      price: 1199,
      oldPrice: 2799,
      reviews: 648,
      discount: "57% OFF",
    },
    {
      img: "/x12.jpeg",
      name: "Basketball Shoes",
      price: 1999,
      oldPrice: 4499,
      reviews: 902,
      discount: "56% OFF",
    },
    {
      img: "/vb.jpeg",
      name: "Trekking Shoes",
      price: 1899,
      oldPrice: 4299,
      reviews: 586,
      discount: "56% OFF",
    },
    {
      img: "/x6.jpeg",
      name: "Black Leather Boots",
      price: 2199,
      oldPrice: 4999,
      reviews: 712,
      discount: "56% OFF",
    },
    {
      img: "/xc.jpeg",
      name: "Chelsea Boots",
      price: 2399,
      oldPrice: 5399,
      reviews: 533,
      discount: "56% OFF",
    },
    {
      img: "/xx.jpeg",
      name: "Running Sneakers",
      price: 1399,
      oldPrice: 3199,
      reviews: 864,
      discount: "56% OFF",
    },
    {
      img: "/x15.jpeg",
      name: "Minimal White Shoes",
      price: 1299,
      oldPrice: 2999,
      reviews: 477,
      discount: "57% OFF",
    },
    {
      img: "/x14.jpeg",
      name: "Lifestyle Sneakers",
      price: 1599,
      oldPrice: 3599,
      reviews: 624,
      discount: "56% OFF",
    },
    {
      img: "/cv6.jpeg",
      name: "Classic Running Shoes",
      price: 1499,
      oldPrice: 3399,
      reviews: 541,
      discount: "56% OFF",
    },
    {
      img: "/shoesa.jpeg",
      name: "Chunky Sneakers",
      price: 1699,
      oldPrice: 3799,
      reviews: 793,
      discount: "55% OFF",
    },
    {
      img: "/cv7.jpeg",
      name: "Slip Resistant Shoes",
      price: 1399,
      oldPrice: 3199,
      reviews: 675,
      discount: "56% OFF",
    },
    {
      img: "/x11.jpeg",
      name: "Designer Casual Shoes",
      price: 1799,
      oldPrice: 3999,
      reviews: 518,
      discount: "55% OFF",
    },
    {
      img: "/x5.jpeg",
      name: "Premium Leather Shoes",
      price: 1999,
      oldPrice: 4499,
      reviews: 606,
      discount: "56% OFF",
    },
    {
      img: "/x14.jpeg",
      name: "Mesh Sports Shoes",
      price: 1299,
      oldPrice: 2999,
      reviews: 982,
      discount: "57% OFF",
    },
    {
      img: "/x4.jpeg",
      name: "Everyday Casual Sneakers",
      price: 1199,
      oldPrice: 2799,
      reviews: 1108,
      discount: "57% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Shoes Collection ✨</h1>

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

export default Shoes;