import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dining.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Dining() {

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
      img: "/di.jpeg",
      name: "Ceramic Dinner Set (24 Pcs)",
      price: 1499,
      oldPrice: 2999,
      reviews: 4821,
      discount: "50% OFF",
    },
    {
      img: "/di1.jpeg",
      name: "Opalware Dinner Set",
      price: 999,
      oldPrice: 1999,
      reviews: 3564,
      discount: "50% OFF",
    },
    {
      img: "/di24.jpeg",
      name: "Melamine Dinner Set",
      price: 799,
      oldPrice: 1499,
      reviews: 2875,
      discount: "47% OFF",
    },
    {
      img: "/di23.jpeg",
      name: "Steel Dinner Plate Set",
      price: 499,
      oldPrice: 999,
      reviews: 5428,
      discount: "50% OFF",
    },
    {
      img: "/di22.jpeg",
      name: "Glass Dinner Plate Set",
      price: 699,
      oldPrice: 1399,
      reviews: 2145,
      discount: "50% OFF",
    },
    {
      img: "/di21.jpeg",
      name: "Ceramic Serving Bowl Set",
      price: 599,
      oldPrice: 1199,
      reviews: 3265,
      discount: "50% OFF",
    },
    {
      img: "/di20.jpeg",
      name: "Glass Serving Bowl",
      price: 349,
      oldPrice: 699,
      reviews: 2748,
      discount: "50% OFF",
    },
    {
      img: "/di19.jpeg",
      name: "Salad Bowl Set",
      price: 499,
      oldPrice: 999,
      reviews: 1896,
      discount: "50% OFF",
    },
    {
      img: "/di18.jpeg",
      name: "Wooden Serving Tray",
      price: 399,
      oldPrice: 899,
      reviews: 3125,
      discount: "56% OFF",
    },
    {
      img: "/di17.jpeg",
      name: "Steel Serving Tray",
      price: 299,
      oldPrice: 699,
      reviews: 2987,
      discount: "57% OFF",
    },
    {
      img: "/di16.jpeg",
      name: "Ceramic Tea Cup Set",
      price: 499,
      oldPrice: 999,
      reviews: 4258,
      discount: "50% OFF",
    },
    {
      img: "/di15.jpeg",
      name: "Coffee Mug Set (6 Pcs)",
      price: 449,
      oldPrice: 899,
      reviews: 3812,
      discount: "50% OFF",
    },
    {
      img: "/di14.jpeg",
      name: "Glass Tumbler Set",
      price: 399,
      oldPrice: 799,
      reviews: 2469,
      discount: "50% OFF",
    },
    {
      img: "/di13.jpeg",
      name: "Steel Cutlery Set",
      price: 599,
      oldPrice: 1299,
      reviews: 3578,
      discount: "54% OFF",
    },
    {
      img: "/di12.jpeg",
      name: "Premium Spoon Fork Set",
      price: 349,
      oldPrice: 799,
      reviews: 2634,
      discount: "56% OFF",
    },
    {
      img: "/di11.jpeg",
      name: "Dessert Spoon Set",
      price: 199,
      oldPrice: 499,
      reviews: 4785,
      discount: "60% OFF",
    },
    {
      img: "/di10.jpeg",
      name: "Stainless Steel Thali Set",
      price: 399,
      oldPrice: 899,
      reviews: 5124,
      discount: "56% OFF",
    },
    {
      img: "/di8.jpeg",
      name: "Insulated Casserole",
      price: 699,
      oldPrice: 1499,
      reviews: 2285,
      discount: "53% OFF",
    },
    {
      img: "/di8.jpeg",
      name: "Glass Water Jug",
      price: 299,
      oldPrice: 699,
      reviews: 1874,
      discount: "57% OFF",
    },
    {
      img: "/di7.jpeg",
      name: "Glass Bottle Set",
      price: 499,
      oldPrice: 999,
      reviews: 2651,
      discount: "50% OFF",
    },
    {
      img: "/di6.jpeg",
      name: "Salt & Pepper Shaker Set",
      price: 199,
      oldPrice: 499,
      reviews: 2158,
      discount: "60% OFF",
    },
    {
      img: "/di5.jpeg",
      name: "Ceramic Serving Platter",
      price: 549,
      oldPrice: 1099,
      reviews: 1937,
      discount: "50% OFF",
    },
    {
      img: "/di4.jpeg",
      name: "Snack Bowl Set",
      price: 349,
      oldPrice: 699,
      reviews: 2764,
      discount: "50% OFF",
    },
    {
      img: "/di3.jpeg",
      name: "Cake Stand",
      price: 599,
      oldPrice: 1299,
      reviews: 1489,
      discount: "54% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Dining & Serveware Collection ✨</h1>

        <p>
        "Beautiful Serveware for Memorable Gatherings."
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

export default Dining;