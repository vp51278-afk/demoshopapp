
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DairyProducts.css";
import CategorySection6 from "./CategorySection6";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function DairyProducts() {

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
      img: "/dai12.jpeg",
      name: "Fresh Cow Milk (1L)",
      price: 62,
      oldPrice: 70,
      reviews: 3245,
      discount: "11% OFF",
    },
    {
      img: "/dai11.jpeg",
      name: "Toned Milk (1L)",
      price: 58,
      oldPrice: 65,
      reviews: 2148,
      discount: "11% OFF",
    },
    {
      img: "/p22.jpeg",
      name: "Fresh Paneer (200g)",
      price: 89,
      oldPrice: 110,
      reviews: 1874,
      discount: "19% OFF",
    },
    {
      img: "/dai10.jpeg",
      name: "Cheese Slices (200g)",
      price: 119,
      oldPrice: 149,
      reviews: 4563,
      discount: "20% OFF",
    },
    {
      img: "/dai9.jpeg",
      name: "Cheddar Cheese Block",
      price: 179,
      oldPrice: 220,
      reviews: 1645,
      discount: "19% OFF",
    },
    {
      img: "/dai8.jpeg",
      name: "Salted Butter (500g)",
      price: 249,
      oldPrice: 289,
      reviews: 1523,
      discount: "14% OFF",
    },
    {
      img: "/dai7.jpeg",
      name: "Pure Cow Ghee (500ml)",
      price: 329,
      oldPrice: 399,
      reviews: 1987,
      discount: "18% OFF",
    },
    {
      img: "/Curd Package design.jpeg",
      name: "Fresh Curd (400g)",
      price: 45,
      oldPrice: 55,
      reviews: 1348,
      discount: "18% OFF",
    },
    {
      img: "/dai6.jpeg",
      name: "Greek Yogurt",
      price: 79,
      oldPrice: 99,
      reviews: 1724,
      discount: "20% OFF",
    },
    {
      img: "/dai5.jpeg",
      name: "Sweet Lassi (500ml)",
      price: 35,
      oldPrice: 45,
      reviews: 2815,
      discount: "22% OFF",
    },
    {
      img: "/gd.jpeg",
      name: "Panner",
      price: 30,
      oldPrice: 40,
      reviews: 5214,
      discount: "25% OFF",
    },
    {
      img: "/UHT FARM FRESH 200ML BY PCS.jpeg",
      name: "Chocolate Milk (200ml)",
      price: 35,
      oldPrice: 45,
      reviews: 3847,
      discount: "22% OFF",
    },
    {
      img: "/vani.jpeg",
      name: "Vanilla Ice Cream (500ml)",
      price: 149,
      oldPrice: 179,
      reviews: 2956,
      discount: "17% OFF",
    },
    {
      img: "/Desi-Licious Kulfi Malai Ice Cream 1 L.jpeg",
      name: "Malai Kulfi (Pack of 4)",
      price: 99,
      oldPrice: 129,
      reviews: 2138,
      discount: "23% OFF",
    },
    {
      img: "/Best mozzarella cheese in India.jpeg",
      name: "Mozzarella Cheese",
      price: 159,
      oldPrice: 199,
      reviews: 1857,
      discount: "20% OFF",
    },
    {
      img: "/dai4.jpeg",
      name: "Fresh Cream (250ml)",
      price: 69,
      oldPrice: 89,
      reviews: 8145,
      discount: "22% OFF",
    },
    {
      img: "/Whole Milk Powder.jpeg",
      name: "Milk Powder (500g)",
      price: 229,
      oldPrice: 269,
      reviews: 6732,
      discount: "15% OFF",
    },
    {
      img: "/milkmaid.jpeg",
      name: "Condensed Milk",
      price: 109,
      oldPrice: 139,
      reviews: 3568,
      discount: "22% OFF",
    },
    {
      img: "/Bauer Chocolate Chip Mild Yoghurt.jpeg",
      name: "Chocolate Yogurt",
      price: 49,
      oldPrice: 65,
      reviews: 4421,
      discount: "25% OFF",
    },
    {
      img: "/Alpro Bio Produkte.jpeg",
      name: "Strawberry Yogurt",
      price: 49,
      oldPrice: 65,
      reviews: 2896,
      discount: "25% OFF",
    },
    {
      img: "/dai3.jpeg",
      name: "Cream Cheese",
      price: 139,
      oldPrice: 169,
      reviews: 2548,
      discount: "18% OFF",
    },
    {
      img: "/whipping cream.jpeg",
      name: "Whipping Cream (250ml)",
      price: 99,
      oldPrice: 129,
      reviews: 1736,
      discount: "23% OFF",
    },
    {
      img: "/dai1.jpeg",
      name: "Mango Lassi (500ml)",
      price: 39,
      oldPrice: 49,
      reviews: 2145,
      discount: "20% OFF",
    },
    {
      img: "/dai.jpeg",
      name: "Probiotic Drink",
      price: 25,
      oldPrice: 35,
      reviews: 2658,
      discount: "29% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Dairy Products Collection ✨</h1>

        <p>
        "Goodness in Every Drop." 🥛
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

export default DairyProducts;