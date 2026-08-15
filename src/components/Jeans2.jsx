import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jeans2.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Jeans2() {

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
      img: "/aa20.jpeg",
      name: "Slim Fit Blue Jeans",
      price: 899,
      oldPrice: 1999,
      reviews: 1245,
      discount: "55% OFF",
    },
    {
      img: "/PULL&BEAR.jpeg",
      name: "Black Skinny Jeans",
      price: 999,
      oldPrice: 2199,
      reviews: 986,
      discount: "55% OFF",
    },
    {
      img: "/aa19.jpeg",
      name: "Regular Fit Denim Jeans",
      price: 949,
      oldPrice: 2099,
      reviews: 874,
      discount: "55% OFF",
    },
    {
      img: "/aa18.jpeg",
      name: "Ripped Blue Jeans",
      price: 1099,
      oldPrice: 2399,
      reviews: 753,
      discount: "54% OFF",
    },
    {
      img: "/aa17.jpeg",
      name: "Dark Wash Jeans",
      price: 999,
      oldPrice: 2199,
      reviews: 689,
      discount: "55% OFF",
    },
    {
      img: "/aa16.jpeg",
      name: "Light Blue Jeans",
      price: 949,
      oldPrice: 2099,
      reviews: 615,
      discount: "55% OFF",
    },
    {
      img: "/aa6.jpeg",
      name: "Straight Fit Jeans",
      price: 899,
      oldPrice: 1999,
      reviews: 824,
      discount: "55% OFF",
    },
    {
      img: "/aa15.jpeg",
      name: "Grey Denim Jeans",
      price: 999,
      oldPrice: 2199,
      reviews: 592,
      discount: "55% OFF",
    },
    {
      img: "/aa12.jpeg",
      name: "Cargo Jeans",
      price: 1199,
      oldPrice: 2599,
      reviews: 731,
      discount: "54% OFF",
    },
    {
      img: "/aa13.jpeg",
      name: "Relaxed Fit Jeans",
      price: 949,
      oldPrice: 2099,
      reviews: 648,
      discount: "55% OFF",
    },
    {
      img: "/v1.jpeg",
      name: "Black Formal Pant",
      price: 799,
      oldPrice: 1699,
      reviews: 902,
      discount: "53% OFF",
    },
    {
      img: "/aa11.jpeg",
      name: "Grey Office Pant",
      price: 849,
      oldPrice: 1799,
      reviews: 586,
      discount: "53% OFF",
    },
    {
      img: "/aa9.jpeg",
      name: "Beige Cotton Pant",
      price: 899,
      oldPrice: 1899,
      reviews: 712,
      discount: "53% OFF",
    },
    {
      img: "/aa0.jpeg",
      name: "Navy Blue Formal Pant",
      price: 849,
      oldPrice: 1799,
      reviews: 533,
      discount: "53% OFF",
    },
    {
      img: "/d1.jpeg",
      name: "Slim Fit Chinos",
      price: 999,
      oldPrice: 2099,
      reviews: 864,
      discount: "52% OFF",
    },
    {
      img: "/aa7.jpeg",
      name: "Olive Casual Pant",
      price: 899,
      oldPrice: 1899,
      reviews: 477,
      discount: "53% OFF",
    },
    {
      img: "/aa8.jpeg",
      name: "Khaki Chinos",
      price: 949,
      oldPrice: 1999,
      reviews: 624,
      discount: "53% OFF",
    },
    {
      img: "/aa5.jpeg",
      name: "Baggy jeans",
      price: 999,
      oldPrice: 2099,
      reviews: 541,
      discount: "52% OFF",
    },
    {
      img: "/d.jpeg",
      name: "Regular Fit pant",
      price: 849,
      oldPrice: 1799,
      reviews: 793,
      discount: "53% OFF",
    },
    {
      img: "/aa4.jpeg",
      name: "Classic Office jeans",
      price: 899,
      oldPrice: 1899,
      reviews: 675,
      discount: "53% OFF",
    },
    {
      img: "/aa3.jpeg",
      name: "Slim Fit Formal Pant",
      price: 999,
      oldPrice: 2099,
      reviews: 518,
      discount: "52% OFF",
    },
    {
      img: "/aa2.jpeg",
      name: "Premium Black Jeans",
      price: 1099,
      oldPrice: 2299,
      reviews: 606,
      discount: "52% OFF",
    },
    {
      img: "/aa1.jpeg",
      name: "Vintage Blue Jeans",
      price: 999,
      oldPrice: 2199,
      reviews: 982,
      discount: "55% OFF",
    },
    {
      img: "/aa.jpeg",
      name: "Everyday Casual Pant",
      price: 849,
      oldPrice: 1799,
      reviews: 1108,
      discount: "53% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Jeans Collection ✨</h1>

        <p>
        😎 "Live in Denim. Love the Comfort."
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

export default Jeans2;