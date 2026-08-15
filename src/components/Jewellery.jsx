import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jewellery.css";
import CategorySection3 from "./CategorySection3";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Jewellery() {

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
      img: "/j1.jpeg",
      name: "Gold Plated Necklace Set",
      price: 799,
      oldPrice: 1599,
      reviews: 425,
      discount: "50% OFF",
    },
    {
      img: "/Andkiss Faux Pearl Drop Earrings.jpeg",
      name: "Diamond Stud Earrings",
      price: 499,
      oldPrice: 999,
      reviews: 362,
      discount: "50% OFF",
    },
    {
      img: "/j2.jpeg",
      name: "Traditional Jhumka",
      price: 299,
      oldPrice: 599,
      reviews: 518,
      discount: "50% OFF",
    },
    {
      img: "/j3.jpeg",
      name: "Pearl Necklace",
      price: 699,
      oldPrice: 1399,
      reviews: 287,
      discount: "50% OFF",
    },
    {
      img: "/j4.jpeg",
      name: "Gold Bracelet",
      price: 449,
      oldPrice: 899,
      reviews: 315,
      discount: "50% OFF",
    },
    {
      img: "/bracelet.jpeg",
      name: "Charm Bracelet",
      price: 399,
      oldPrice: 799,
      reviews: 246,
      discount: "50% OFF",
    },
    {
      img: "/Bella Lia Boutique.jpeg",
      name: "Silver Ring",
      price: 249,
      oldPrice: 499,
      reviews: 401,
      discount: "50% OFF",
    },
    {
      img: "/j5.jpeg",
      name: "Adjustable Ring",
      price: 299,
      oldPrice: 599,
      reviews: 332,
      discount: "50% OFF",
    },
    {
      img: "/j6.jpeg",
      name: "Kundan Choker Set",
      price: 999,
      oldPrice: 1999,
      reviews: 214,
      discount: "50% OFF",
    },
    {
      img: "/yhty.jpeg",
      name: "Temple Jewellery Set",
      price: 1199,
      oldPrice: 2399,
      reviews: 186,
      discount: "50% OFF",
    },
    {
      img: "/j7.jpeg",
      name: "Silver Anklet",
      price: 349,
      oldPrice: 699,
      reviews: 275,
      discount: "50% OFF",
    },
    {
      img: "/j8.jpeg",
      name: "Toe Ring Set",
      price: 199,
      oldPrice: 399,
      reviews: 168,
      discount: "50% OFF",
    },
    {
      img: "/j9.jpeg",
      name: "Modern Mangalsutra",
      price: 899,
      oldPrice: 1799,
      reviews: 205,
      discount: "50% OFF",
    },
    {
      img: "/The Aureliette Moissanite Necklace.jpeg",
      name: "Heart Pendant",
      price: 349,
      oldPrice: 699,
      reviews: 256,
      discount: "50% OFF",
    },
    {
      img: "/j10.jpeg",
      name: "Oxidised Jewellery Set",
      price: 599,
      oldPrice: 1199,
      reviews: 412,
      discount: "50% OFF",
    },
    {
      img: "/j11.jpeg",
      name: "Gold Hoop Earrings",
      price: 249,
      oldPrice: 499,
      reviews: 321,
      discount: "50% OFF",
    },
    {
      img: "/j12.jpeg",
      name: "Crystal Drop Earrings",
      price: 299,
      oldPrice: 599,
      reviews: 294,
      discount: "50% OFF",
    },
    {
      img: "/jjj.jpeg",
      name: "Minimal Chain",
      price: 449,
      oldPrice: 899,
      reviews: 183,
      discount: "50% OFF",
    },
    {
      img: "/j13.jpeg",
      name: "Gold Bangles Set",
      price: 699,
      oldPrice: 1399,
      reviews: 374,
      discount: "50% OFF",
    },
    {
      img: "/j15.jpeg",
      name: "Pearl Bracelet",
      price: 349,
      oldPrice: 699,
      reviews: 197,
      discount: "50% OFF",
    },
    {
      img: "/j16.jpeg",
      name: "Diamond Nose Pin",
      price: 199,
      oldPrice: 399,
      reviews: 153,
      discount: "50% OFF",
    },
    {
      img: "/j17.jpeg",
      name: "Designer Brooch",
      price: 399,
      oldPrice: 799,
      reviews: 221,
      discount: "50% OFF",
    },
    {
      img: "/j18.jpeg",
      name: "Bridal Jewellery Set",
      price: 1499,
      oldPrice: 2999,
      reviews: 268,
      discount: "50% OFF",
    },
    {
      img: "/j19.jpeg",
      name: "Kamarbandh ",
      price: 549,
      oldPrice: 1099,
      reviews: 241,
      discount: "50% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection3 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Jewellery Collection ✨</h1>

       
       <p>
       ✨ "Built for Warmth, Designed for Style."
       </p>

        <button
  className="shopNowBtn"
  onClick={() =>
    navigate("/home-decor-shopping", {
      state: products[1],
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

export default Jewellery;



