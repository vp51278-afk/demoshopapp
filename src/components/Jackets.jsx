import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jackets.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Jackets() {

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
      img: "/qq19.jpeg",
      name: "Black Leather Jacket",
      price: 1499,
      oldPrice: 2999,
      reviews: 1245,
      discount: "50% OFF",
    },
    {
      img: "/qq18.jpeg",
      name: "Classic Denim Jacket",
      price: 1399,
      oldPrice: 2799,
      reviews: 986,
      discount: "50% OFF",
    },
    {
      img: "/qq20.jpeg",
      name: "Bomber Jacket",
      price: 1599,
      oldPrice: 3199,
      reviews: 874,
      discount: "50% OFF",
    },
    {
      img: "/j.jpeg",
      name: "Hooded Winter Jacket",
      price: 1699,
      oldPrice: 3399,
      reviews: 753,
      discount: "50% OFF",
    },
    {
      img: "/qq17.jpeg",
      name: "Puffer Jacket",
      price: 1799,
      oldPrice: 3599,
      reviews: 689,
      discount: "50% OFF",
    },
    {
      img: "/qq16.jpeg",
      name: "Olive Casual Jacket",
      price: 1499,
      oldPrice: 2999,
      reviews: 615,
      discount: "50% OFF",
    },
    {
      img: "/qq15.jpeg",
      name: "Varsity Jacket",
      price: 1599,
      oldPrice: 3199,
      reviews: 824,
      discount: "50% OFF",
    },
    {
      img: "/qq13.jpeg",
      name: "Brown Leather Jacket",
      price: 1699,
      oldPrice: 3399,
      reviews: 592,
      discount: "50% OFF",
    },
    {
      img: "/qq14.jpeg",
      name: "Windcheater Jacket",
      price: 1299,
      oldPrice: 2599,
      reviews: 731,
      discount: "50% OFF",
    },
    {
      img: "/qq12.jpeg",
      name: "Quilted Jacket",
      price: 1899,
      oldPrice: 3799,
      reviews: 648,
      discount: "50% OFF",
    },
    {
      img: "/download (63).jpeg",
      name: "Blue Denim Jacket",
      price: 1499,
      oldPrice: 2999,
      reviews: 902,
      discount: "50% OFF",
    },
    {
      img: "/download (62).jpeg",
      name: "Grey Bomber Jacket",
      price: 1599,
      oldPrice: 3199,
      reviews: 586,
      discount: "50% OFF",
    },
    {
      img: "/qq11.jpeg",
      name: "Black Puffer Jacket",
      price: 1799,
      oldPrice: 3599,
      reviews: 712,
      discount: "50% OFF",
    },
    {
      img: "/j.png",
      name: "Fleece Jacket",
      price: 1399,
      oldPrice: 2799,
      reviews: 533,
      discount: "50% OFF",
    },
    {
      img: "/qq0.jpeg",
      name: "Track Jacket Set",
      price: 1199,
      oldPrice: 2399,
      reviews: 864,
      discount: "50% OFF",
    },
    {
      img: "/qq8.jpeg",
      name: "Military Style Jacket",
      price: 1699,
      oldPrice: 3399,
      reviews: 477,
      discount: "50% OFF",
    },
    {
      img: "/qq7.jpeg",
      name: "Suede Jacket",
      price: 1999,
      oldPrice: 3999,
      reviews: 624,
      discount: "50% OFF",
    },
    {
      img: "/qq6.jpeg",
      name: "Winter Insulated Jacket",
      price: 1899,
      oldPrice: 3799,
      reviews: 541,
      discount: "50% OFF",
    },
    {
      img: "/qq5.jpeg",
      name: "Waterproof Rain Jacket",
      price: 1299,
      oldPrice: 2599,
      reviews: 793,
      discount: "50% OFF",
    },
    {
      img: "/qq4.jpeg",
      name: "Casual Zip Jacket",
      price: 1499,
      oldPrice: 2999,
      reviews: 675,
      discount: "50% OFF",
    },
    {
      img: "/qq3.jpeg",
      name: "Softshell Jacket",
      price: 1599,
      oldPrice: 3199,
      reviews: 518,
      discount: "50% OFF",
    },
    {
      img: "/qq2.jpeg",
      name: "Coffee Brown Jacket",
      price: 1699,
      oldPrice: 3399,
      reviews: 606,
      discount: "50% OFF",
    },
    {
      img: "/qq1.jpeg",
      name: "Premium Winter Jacket",
      price: 2199,
      oldPrice: 4399,
      reviews: 982,
      discount: "50% OFF",
    },
    {
      img: "/qq.jpeg",
      name: "Stylish Leather Jacket",
      price: 1799,
      oldPrice: 3599,
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
        <h1>✨ Jackets Collection ✨</h1>

       
       <p>
       ✨ "Built for Warmth, Designed for Style."
       </p>

        <button
  className="shopNowBtn"
  onClick={() =>
    navigate("/home-decor-shopping", {
      state: products[5],
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

export default Jackets;