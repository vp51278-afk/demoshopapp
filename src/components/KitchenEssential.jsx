import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./KitchenEssential.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function KitchenEssential() {

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
      img: "/ds15.jpeg",
      name: "Non-Stick Fry Pan",
      price: 499,
      oldPrice: 999,
      reviews: 4821,
      discount: "50% OFF",
    },
    {
      img: "/ds17.jpeg",
      name: "Pressure Cooker 3L",
      price: 899,
      oldPrice: 1699,
      reviews: 3652,
      discount: "47% OFF",
    },
    {
      img: "/ds14.jpeg",
      name: "Kitchen Knife Set",
      price: 299,
      oldPrice: 699,
      reviews: 2741,
      discount: "57% OFF",
    },
    {
      img: "/ds13.jpeg",
      name: "Vegetable Chopper",
      price: 249,
      oldPrice: 599,
      reviews: 6184,
      discount: "58% OFF",
    },
    {
      img: "/ds11.jpeg",
      name: "Mixer Grinder",
      price: 1499,
      oldPrice: 2999,
      reviews: 2456,
      discount: "50% OFF",
    },
    {
      img: "/ds12.jpeg",
      name: "Electric Kettle",
      price: 699,
      oldPrice: 1399,
      reviews: 4315,
      discount: "50% OFF",
    },
    {
      img: "/ds0.jpeg",
      name: "Steel Lunch Box",
      price: 349,
      oldPrice: 799,
      reviews: 2963,
      discount: "56% OFF",
    },
    {
      img: "/Locckmy.jpeg",
      name: "Insulated Water Bottle",
      price: 399,
      oldPrice: 899,
      reviews: 5289,
      discount: "56% OFF",
    },
    {
      img: "/ds9.jpeg",
      name: "Storage Container Set",
      price: 599,
      oldPrice: 1299,
      reviews: 2138,
      discount: "54% OFF",
    },
    {
      img: "/ds8.jpeg",
      name: "Spice Rack Set",
      price: 549,
      oldPrice: 1199,
      reviews: 1976,
      discount: "54% OFF",
    },
    {
      img: "/uhds.jpeg",
      name: "Silicone Spatula Set",
      price: 299,
      oldPrice: 699,
      reviews: 2854,
      discount: "57% OFF",
    },
    {
      img: "/Chopping board.jpeg",
      name: "Wooden Cutting Board",
      price: 249,
      oldPrice: 599,
      reviews: 3157,
      discount: "58% OFF",
    },
    {
      img: "/ds7.jpeg",
      name: "Glass Oil Dispenser",
      price: 199,
      oldPrice: 499,
      reviews: 3568,
      discount: "60% OFF",
    },
    {
      img: "/ds6.jpeg",
      name: "Dish Drying Rack",
      price: 649,
      oldPrice: 1399,
      reviews: 1765,
      discount: "54% OFF",
    },
    {
      img: "/ds4.jpeg",
      name: "Steel Dinner Plate Set",
      price: 799,
      oldPrice: 1599,
      reviews: 2435,
      discount: "50% OFF",
    },
    {
      img: "/ds5.jpeg",
      name: "Ceramic Coffee Mug Set",
      price: 399,
      oldPrice: 899,
      reviews: 2984,
      discount: "56% OFF",
    },
    {
      img: "/ds3.jpeg",
      name: "Tea Cup Set",
      price: 349,
      oldPrice: 799,
      reviews: 1874,
      discount: "56% OFF",
    },
    {
      img: "/ds2.jpeg",
      name: "Glass Bowl Set",
      price: 449,
      oldPrice: 999,
      reviews: 2197,
      discount: "55% OFF",
    },
    {
      img: "/tt.jpeg",
      name: "Rice Storage Bin",
      price: 699,
      oldPrice: 1499,
      reviews: 1648,
      discount: "53% OFF",
    },
    {
      img: "/ds.jpeg",
      name: "Kitchen Sink Organizer",
      price: 249,
      oldPrice: 599,
      reviews: 3412,
      discount: "58% OFF",
    },
    {
      img: "/ds1.jpeg",
      name: "Kitchen Towel Pack",
      price: 199,
      oldPrice: 499,
      reviews: 4125,
      discount: "60% OFF",
    },
    {
      img: "/dsfaj.jpeg",
      name: "Measuring Cups & Spoons",
      price: 299,
      oldPrice: 699,
      reviews: 2387,
      discount: "57% OFF",
    },
    {
      img: "/hg.jpeg",
      name: "Food Storage Box Set",
      price: 499,
      oldPrice: 999,
      reviews: 2834,
      discount: "50% OFF",
    },
    {
      img: "/yi.jpeg",
      name: "Cookware Set",
      price: 1999,
      oldPrice: 3999,
      reviews: 1426,
      discount: "50% OFF",
    },
  ];
  
  return (
    <>
      {/* Category Section */}
      <CategorySection2/>

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Kitchen Essentials Collection ✨</h1>

        <p>
        "Quality Kitchen Essentials at Prices You'll Love." ❤️
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

export default KitchenEssential;