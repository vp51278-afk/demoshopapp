import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WatchesAccessories.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function WatchesAccessories() {

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
      img: "/download (55).jpeg",
      name: "Watches",
      price: 899,
      oldPrice: 1999,
      reviews: 1245,
      discount: "55% OFF",
    },
    {
      img: "/a111.jpeg",
      name: "Vegan Wallets",
      price: 1099,
      oldPrice: 2499,
      reviews: 984,
      discount: "56% OFF",
    },
    {
      img: "/a000.jpeg",
      name: "Fresh Citrus Perfume",
      price: 799,
      oldPrice: 1799,
      reviews: 876,
      discount: "56% OFF",
    },
    {
      img: "/download (54).jpeg",
      name: "Royal Black Perfume",
      price: 999,
      oldPrice: 2299,
      reviews: 752,
      discount: "57% OFF",
    },
    {
      img: "/a00.jpeg",
      name: "Long Lasting Deodorant",
      price: 299,
      oldPrice: 699,
      reviews: 1102,
      discount: "57% OFF",
    },
    {
      img: "/download (53).jpeg",
      name: "Premium Body Perfume",
      price: 349,
      oldPrice: 799,
      reviews: 689,
      discount: "56% OFF",
    },
    {
      img: "/RING.PNG",
      name: "Ring",
      price: 999,
      oldPrice: 2299,
      reviews: 893,
      discount: "57% OFF",
    },
    {
      img: "/a0.jpeg",
      name: "Chain",
      price: 1299,
      oldPrice: 2899,
      reviews: 741,
      discount: "55% OFF",
    },
    {
      img: "/a.jpeg",
      name: "Premium Wallet",
      price: 799,
      oldPrice: 1799,
      reviews: 625,
      discount: "56% OFF",
    },
    {
      img: "/b2.jpeg",
      name: "Safety Razor",
      price: 449,
      oldPrice: 999,
      reviews: 512,
      discount: "55% OFF",
    },
    {
      img: "/b1.jpeg",
      name: "Shaving Foam",
      price: 249,
      oldPrice: 499,
      reviews: 1018,
      discount: "50% OFF",
    },
    {
      img: "/b.jpeg",
      name: "After Shave Lotion",
      price: 349,
      oldPrice: 799,
      reviews: 684,
      discount: "56% OFF",
    },
    {
      img: "/z23.jpeg",
      name: "Beard Growth Oil",
      price: 399,
      oldPrice: 899,
      reviews: 937,
      discount: "56% OFF",
    },
    {
      img: "/z22.jpeg",
      name: "Beard Styling Wax",
      price: 299,
      oldPrice: 699,
      reviews: 573,
      discount: "57% OFF",
    },
    {
      img: "/z21.jpeg",
      name: "Watch",
      price: 299,
      oldPrice: 699,
      reviews: 1234,
      discount: "57% OFF",
    },
    {
      img: "/z20.jpeg",
      name: "Charcoal Face Wash",
      price: 349,
      oldPrice: 799,
      reviews: 846,
      discount: "56% OFF",
    },
    {
      img: "/z19.jpeg",
      name: "Oil-Free Moisturizer",
      price: 399,
      oldPrice: 899,
      reviews: 725,
      discount: "56% OFF",
    },
    {
      img: "/z18.jpeg",
      name: "SPF 50 Sunscreen",
      price: 449,
      oldPrice: 999,
      reviews: 678,
      discount: "55% OFF",
    },
    {
      img: "/z17.jpeg",
      name: "Men BB Cream",
      price: 499,
      oldPrice: 1199,
      reviews: 418,
      discount: "58% OFF",
    },
    {
      img: "/Men.jpeg",
      name: "Men Concealer Stick",
      price: 449,
      oldPrice: 999,
      reviews: 356,
      discount: "55% OFF",
    },
    {
      img: "/z10.jpeg",
      name: "Men Lip Balm",
      price: 199,
      oldPrice: 499,
      reviews: 589,
      discount: "60% OFF",
    },
    {
      img: "/z9.jpeg",
      name: "Hair Styling Wax",
      price: 399,
      oldPrice: 899,
      reviews: 734,
      discount: "56% OFF",
    },
    {
      img: "/z8.jpeg",
      name: "Strong Hold Hair Gel",
      price: 299,
      oldPrice: 699,
      reviews: 618,
      discount: "57% OFF",
    },
    {
      img: "/z7.jpeg",
      name: "Hair Serum",
      price: 499,
      oldPrice: 1099,
      reviews: 692,
      discount: "55% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ WatchesAccessories Collection ✨</h1>

        <p>
        ✨ "Complete Your Look with the Perfect Accessories."
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

export default WatchesAccessories;