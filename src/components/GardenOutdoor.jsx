import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GardenOutdoor.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function GardenOutdoor() {

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
      img: "/n23.jpeg",
      name: "Indoor Money Plant",
      price: 199,
      oldPrice: 299,
      reviews: 1245,
      discount: "33% OFF",
    },
    {
      img: "/n21.jpeg",
      name: "Ceramic Plant Pot",
      price: 249,
      oldPrice: 399,
      reviews: 986,
      discount: "38% OFF",
    },
    {
      img: "/n22.jpeg",
      name: "Garden Tools Set (5 Pcs)",
      price: 399,
      oldPrice: 699,
      reviews: 874,
      discount: "43% OFF",
    },
    {
      img: "/n20.jpeg",
      name: "Plastic Watering Can",
      price: 299,
      oldPrice: 499,
      reviews: 753,
      discount: "40% OFF",
    },
    {
      img: "/n19.jpeg",
      name: "Metal Plant Stand",
      price: 599,
      oldPrice: 899,
      reviews: 689,
      discount: "33% OFF",
    },
    {
      img: "/n18.jpeg",
      name: "Gardening Gloves",
      price: 149,
      oldPrice: 249,
      reviews: 615,
      discount: "40% OFF",
    },
    {
      img: "/n17.jpeg",
      name: "Hanging Planter",
      price: 349,
      oldPrice: 549,
      reviews: 824,
      discount: "36% OFF",
    },
    {
      img: "/n15.jpeg",
      name: "Decorative Plant Pot",
      price: 199,
      oldPrice: 349,
      reviews: 592,
      discount: "43% OFF",
    },
    {
      img: "/n16.jpeg",
      name: "Plant Spray Bottle",
      price: 129,
      oldPrice: 199,
      reviews: 731,
      discount: "35% OFF",
    },
    {
      img: "/n14.jpeg",
      name: "Garden Pruning Shears",
      price: 299,
      oldPrice: 499,
      reviews: 648,
      discount: "40% OFF",
    },
    {
      img: "/n13.jpeg",
      name: "Mini Garden Rake",
      price: 179,
      oldPrice: 299,
      reviews: 902,
      discount: "40% OFF",
    },
    {
      img: "/n12.jpeg",
      name: "Hand Garden Shovel",
      price: 159,
      oldPrice: 249,
      reviews: 586,
      discount: "36% OFF",
    },
    {
      img: "/n11.jpeg",
      name: "Seed Storage Box",
      price: 249,
      oldPrice: 399,
      reviews: 712,
      discount: "38% OFF",
    },
    {
      img: "/n9.jpeg",
      name: "Garden Water Sprinkler",
      price: 449,
      oldPrice: 699,
      reviews: 533,
      discount: "36% OFF",
    },
    {
      img: "/PortablePowerGuides.jpeg",
      name: "Solar Garden Light",
      price: 399,
      oldPrice: 699,
      reviews: 864,
      discount: "43% OFF",
    },
    {
      img: "/n8.jpeg",
      name: "Outdoor Garden Lantern",
      price: 499,
      oldPrice: 799,
      reviews: 477,
      discount: "38% OFF",
    },
    {
      img: "/n7.jpeg",
      name: "Hanging Bird Feeder",
      price: 299,
      oldPrice: 499,
      reviews: 624,
      discount: "40% OFF",
    },
    {
      img: "/n6.jpeg",
      name: "Decorative Garden Fence",
      price: 599,
      oldPrice: 899,
      reviews: 541,
      discount: "33% OFF",
    },
    {
      img: "/n5.jpeg",
      name: "Outdoor Doormat",
      price: 349,
      oldPrice: 599,
      reviews: 793,
      discount: "42% OFF",
    },
    {
      img: "/n4.jpeg",
      name: "Wind Chime for Garden",
      price: 279,
      oldPrice: 449,
      reviews: 675,
      discount: "38% OFF",
    },
    {
      img: "/n3.jpeg",
      name: "Foldable Garden Stool",
      price: 699,
      oldPrice: 999,
      reviews: 518,
      discount: "30% OFF",
    },
    {
      img: "/n2.jpeg",
      name: "Outdoor Chair Cushion",
      price: 449,
      oldPrice: 699,
      reviews: 606,
      discount: "36% OFF",
    },
    {
      img: "/n1.jpeg",
      name: "Flexible Garden Hose",
      price: 799,
      oldPrice: 999,
      reviews: 982,
      discount: "20% OFF",
    },
    {
      img: "/n.jpeg",
      name: "Home Compost Bin",
      price: 599,
      oldPrice: 899,
      reviews: 1108,
      discount: "33% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Garden Outdoor Collection ✨</h1>

        <p>
        🌿 “Bring Nature Home, One Garden at a Time.”
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

export default GardenOutdoor;