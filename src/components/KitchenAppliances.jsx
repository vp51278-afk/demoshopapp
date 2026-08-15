import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./KitchenAppliances.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function KitchenAppliances() {

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
      img: "/ww23.jpeg",
      name: "Prestige Mixer Grinder",
      price: 2499,
      oldPrice: 4999,
      reviews: 4821,
      discount: "50% OFF",
    },
    {
      img: "/ww21.jpeg",
      name: "Philips Electric Kettle",
      price: 899,
      oldPrice: 1799,
      reviews: 6235,
      discount: "50% OFF",
    },
    {
      img: "/ww22.jpeg",
      name: "Pigeon Air Fryer",
      price: 3299,
      oldPrice: 6599,
      reviews: 3548,
      discount: "50% OFF",
    },
    {
      img: "/ghy.jpeg",
      name: "Prestige Induction Cooktop",
      price: 1799,
      oldPrice: 3599,
      reviews: 4186,
      discount: "50% OFF",
    },
    {
      img: "/ww20.jpeg",
      name: "Panasonic Rice Cooker",
      price: 1999,
      oldPrice: 3999,
      reviews: 1724,
      discount: "50% OFF",
    },
    {
      img: "/ww18.jpeg",
      name: "Havells Sandwich Maker",
      price: 1499,
      oldPrice: 2999,
      reviews: 2875,
      discount: "50% OFF",
    },
    {
      img: "/ww17.jpeg",
      name: "Bajaj Pop-Up Toaster",
      price: 1299,
      oldPrice: 2599,
      reviews: 2368,
      discount: "50% OFF",
    },
    {
      img: "/ww16.jpeg",
      name: "Philips Juicer",
      price: 2899,
      oldPrice: 5799,
      reviews: 2647,
      discount: "50% OFF",
    },
    {
      img: "/ww15.jpeg",
      name: "Morphy Richards Hand Blender",
      price: 999,
      oldPrice: 1999,
      reviews: 1956,
      discount: "50% OFF",
    },
    {
      img: "/ww12.jpeg",
      name: "Inalsa Food Processor",
      price: 3999,
      oldPrice: 7999,
      reviews: 3174,
      discount: "50% OFF",
    },
    {
      img: "/ww13.jpeg",
      name: "Prestige Coffee Maker",
      price: 2199,
      oldPrice: 4399,
      reviews: 2516,
      discount: "50% OFF",
    },
    {
      img: "/ww0.jpeg",
      name: "Agaro OTG Oven",
      price: 4499,
      oldPrice: 8999,
      reviews: 1842,
      discount: "50% OFF",
    },
    {
      img: "/ww11.jpeg",
      name: "Elica Kitchen Chimney",
      price: 6999,
      oldPrice: 13999,
      reviews: 2965,
      discount: "50% OFF",
    },
    {
      img: "/ww8.jpeg",
      name: "Sunflame Gas Stove",
      price: 2499,
      oldPrice: 4999,
      reviews: 2134,
      discount: "50% OFF",
    },
    {
      img: "/ww9.jpeg",
      name: "Kent Water Purifier",
      price: 7499,
      oldPrice: 14999,
      reviews: 1546,
      discount: "50% OFF",
    },
    {
      img: "/ww5.jpeg",
      name: "Bosch Dishwasher",
      price: 28999,
      oldPrice: 57999,
      reviews: 1365,
      discount: "50% OFF",
    },
    {
      img: "/ww6.jpeg",
      name: "Pigeon Electric Cooker",
      price: 1899,
      oldPrice: 3799,
      reviews: 1823,
      discount: "50% OFF",
    },
    {
      img: "/ww4.jpeg",
      name: "Kent Mini Chopper",
      price: 1099,
      oldPrice: 2199,
      reviews: 1748,
      discount: "50% OFF",
    },
    {
      img: "/yt.jpeg",
      name: "Baltra Roti Maker",
      price: 2299,
      oldPrice: 4599,
      reviews: 1268,
      discount: "50% OFF",
    },
    {
      img: "/ww3.jpeg",
      name: "Kent Egg Boiler",
      price: 799,
      oldPrice: 1599,
      reviews: 1589,
      discount: "50% OFF",
    },
    {
      img: "/ww2.jpeg",
      name: "Prestige Electric Tandoor",
      price: 2599,
      oldPrice: 5199,
      reviews: 1457,
      discount: "50% OFF",
    },
    {
      img: "/ww1.jpeg",
      name: "Agaro Slow Juicer",
      price: 4999,
      oldPrice: 9999,
      reviews: 1369,
      discount: "50% OFF",
    },
    {
      img: "/ww.jpeg",
      name: "Agaro Milk Frother",
      price: 999,
      oldPrice: 1999,
      reviews: 1938,
      discount: "50% OFF",
    },
    {
      img: "/jkl.jpeg",
      name: "Food Vacuum Sealer",
      price: 2999,
      oldPrice: 5999,
      reviews: 1186,
      discount: "50% OFF",
    },
  ];
  
  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Kitchen Appliances Collection ✨</h1>

        <p>
       "Modern Appliances for Modern Kitchens."
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

export default KitchenAppliances;