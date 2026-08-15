import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tops.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Tops() {

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
      img: "/nm13.jpeg",
      name: "Pink Off-Shoulder Y2K Top",
      price: 999,
      oldPrice: 1999,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/download (18).jpeg",
      name: "Ribbed Crop Top",
      price: 799,
      oldPrice: 1599,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/download (19).jpeg",
      name: "Party Wear Satin Top",
      price: 1299,
      oldPrice: 2499,
      reviews: 456,
      discount: "48% OFF",
    },
    {
      img: "/nm12.jpeg",
      name: "Elegant Lantern Sleeve Blouse",
      price: 899,
      oldPrice: 1799,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/nm11.jpeg",
      name: "Black Gothic Off-Shoulder Top",
      price: 1099,
      oldPrice: 2199,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/nm9.jpeg",
      name: "Ruched Sleeveless Tank Top",
      price: 699,
      oldPrice: 1399,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/nm00.jpeg",
      name: "Shirt",
      price: 1599,
      oldPrice: 3199,
      reviews: 440,
      discount: "50% OFF",
    },
    {
      img: "/nm8.jpeg",
      name: "Floral Shirt Dress ",
      price: 1399,
      oldPrice: 2799,
      reviews: 400,
      discount: "50% OFF",
    },
  
      {
        img: "/nm7.jpeg",
        name: "Basic Cotton Top",
        price: 299,
        oldPrice: 599,
        reviews: 425,
        discount: "50% OFF",
      },
      {
        img: "/Site Maintenance.jpeg",
        name: "Floral Printed Top",
        price: 399,
        oldPrice: 799,
        reviews: 386,
        discount: "50% OFF",
      },
      {
        img: "/nm6.jpeg",
        name: "Casual Crop Top",
        price: 349,
        oldPrice: 699,
        reviews: 512,
        discount: "50% OFF",
      },
      {
        img: "/jds.jpeg",
        name: "Ribbed Full Sleeve Top",
        price: 449,
        oldPrice: 899,
        reviews: 278,
        discount: "50% OFF",
      },
      {
        img: "/nm4.jpeg",
        name: "Puff Sleeve Top",
        price: 499,
        oldPrice: 999,
        reviews: 341,
        discount: "50% OFF",
      },
      {
        img: "/nm5.jpeg",
        name: "Off Shoulder Top",
        price: 549,
        oldPrice: 1099,
        reviews: 432,
        discount: "50% OFF",
      },
      {
        img: "/nm3.jpeg",
        name: "V-Neck Solid Top",
        price: 399,
        oldPrice: 799,
        reviews: 290,
        discount: "50% OFF",
      },
      {
        img: "/nm0.jpeg",
        name: "Peplum Top",
        price: 599,
        oldPrice: 1199,
        reviews: 364,
        discount: "50% OFF",
      },
      {
        img: "/gfhdhgfygffyg.jpeg",
        name: "Satin Party Top",
        price: 699,
        oldPrice: 1399,
        reviews: 315,
        discount: "50% OFF",
      },
      {
        img: "/uieawitoy.jpeg",
        name: "Printed Shirt Top",
        price: 449,
        oldPrice: 899,
        reviews: 276,
        discount: "50% OFF",
      },
      {
        img: "/nm2.jpeg",
        name: "Sleeveless Casual Top",
        price: 349,
        oldPrice: 699,
        reviews: 421,
        discount: "50% OFF",
      },
      {
        img: "/croptop.jpeg",
        name: "Wrap Style Top",
        price: 549,
        oldPrice: 1099,
        reviews: 248,
        discount: "50% OFF",
      },
      {
        img: "/topsjdska.jpeg",
        name: "High Neck Top",
        price: 499,
        oldPrice: 999,
        reviews: 337,
        discount: "50% OFF",
      },
      {
        img: "/nm1.jpeg",
        name: "Ruffle Sleeve Top",
        price: 599,
        oldPrice: 1199,
        reviews: 302,
        discount: "50% OFF",
      },
      {
        img: "/topsg.jpeg",
        name: "Floral Crop Top",
        price: 399,
        oldPrice: 799,
        reviews: 389,
        discount: "50% OFF",
      },
      {
        img: "/nm.jpeg",
        name: "Long Tunic Top",
        price: 649,
        oldPrice: 1299,
        reviews: 355,
        discount: "50% OFF",
      },
    
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Tops Collection ✨</h1>

        <p>
        🌟 "Classic Comfort. Modern Style."
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

export default Tops;

