import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StorageOrganization.css";
import CategorySection2 from "./CategorySection2";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function StorageOrganization() {

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
      img: "/mm20.jpeg",
      name: "Plastic Storage Container Set (6 Pieces)",
      price: 399,
      oldPrice: 549,
      reviews: 3250,
      discount: "27% OFF",
    },
    {
      img: "/mm18.jpeg",
      name: "Airtight Kitchen Storage Jars (Set of 4)",
      price: 499,
      oldPrice: 699,
      reviews: 2840,
      discount: "29% OFF",
    },
    {
      img: "/mm19.jpeg",
      name: "3-Tier Steel Storage Rack",
      price: 1299,
      oldPrice: 1699,
      reviews: 1760,
      discount: "24% OFF",
    },
    {
      img: "/wrk.jpeg",
      name: "Foldable Fabric Storage Box",
      price: 249,
      oldPrice: 349,
      reviews: 2150,
      discount: "29% OFF",
    },
    {
      img: "/mm17.jpeg",
      name: "Wardrobe Clothes Organizer",
      price: 349,
      oldPrice: 499,
      reviews: 2460,
      discount: "30% OFF",
    },
    {
      img: "/mm15.jpeg",
      name: "Plastic Drawer Organizer",
      price: 199,
      oldPrice: 279,
      reviews: 1820,
      discount: "29% OFF",
    },
    {
      img: "/mm16.jpeg",
      name: "Kitchen Storage Trolley (4 Layer)",
      price: 1499,
      oldPrice: 1999,
      reviews: 1350,
      discount: "25% OFF",
    },
    {
      img: "/mm14.jpeg",
      name: "Multipurpose Plastic Storage Cabinet",
      price: 2999,
      oldPrice: 3999,
      reviews: 940,
      discount: "25% OFF",
    },
    {
      img: "/mm13.jpeg",
      name: "Wooden Shoe Cabinet",
      price: 3499,
      oldPrice: 4499,
      reviews: 1180,
      discount: "22% OFF",
    },
    {
      img: "/trtr.jpeg",
      name: "Steel Storage Almirah",
      price: 7999,
      oldPrice: 9999,
      reviews: 780,
      discount: "20% OFF",
    },
    {
      img: "/mm12.jpeg",
      name: "Laundry Storage Hamper",
      price: 599,
      oldPrice: 799,
      reviews: 1960,
      discount: "25% OFF",
    },
    {
      img: "/mm10.jpeg",
      name: "Under Bed Storage Bag",
      price: 299,
      oldPrice: 399,
      reviews: 1720,
      discount: "25% OFF",
    },
    {
      img: "/menuiserie.jpeg",
      name: "Wall Mounted Storage Shelf",
      price: 899,
      oldPrice: 1199,
      reviews: 1580,
      discount: "25% OFF",
    },
    {
      img: "/mm0.jpeg",
      name: "Plastic Utility Cabinet",
      price: 2499,
      oldPrice: 3299,
      reviews: 980,
      discount: "24% OFF",
    },
    {
      img: "/mm1.jpeg",
      name: "Kitchen Pantry Storage Cabinet",
      price: 4599,
      oldPrice: 5899,
      reviews: 720,
      discount: "22% OFF",
    },
    {
      img: "/mm8.jpeg",
      name: "Rolling Storage Cart (3 Tier)",
      price: 1199,
      oldPrice: 1599,
      reviews: 1860,
      discount: "25% OFF",
    },
    {
      img: "/mm9.jpeg",
      name: "Storage Basket Set (Pack of 3)",
      price: 449,
      oldPrice: 599,
      reviews: 2740,
      discount: "25% OFF",
    },
    {
      img: "/mm5.jpeg",
      name: "Kitchen Container Rack",
      price: 799,
      oldPrice: 999,
      reviews: 1450,
      discount: "20% OFF",
    },
    {
      img: "/mm6.jpeg",
      name: "Modular Wardrobe",
      price: 8999,
      oldPrice: 11999,
      reviews: 610,
      discount: "25% OFF",
    },
    {
      img: "/mm3.jpeg",
      name: "Plastic Storage Cupboard",
      price: 3299,
      oldPrice: 4299,
      reviews: 870,
      discount: "23% OFF",
    },
    {
      img: "/mm4.jpeg",
      name: "Stackable Storage Bins (Set of 4)",
      price: 699,
      oldPrice: 949,
      reviews: 2130,
      discount: "26% OFF",
    },
    {
      img: "/mm0.jpeg",
      name: "Closet Organizer Shelf",
      price: 999,
      oldPrice: 1299,
      reviews: 1520,
      discount: "23% OFF",
    },
    {
      img: "/mm1.jpeg",
      name: "Portable Wardrobe Closet",
      price: 2799,
      oldPrice: 3699,
      reviews: 1180,
      discount: "24% OFF",
    },
    {
      img: "/mm.jpeg",
      name: "4-Drawer Storage Tower",
      price: 1899,
      oldPrice: 2499,
      reviews: 940,
      discount: "24% OFF",
    },

  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Storage & Organisation Collection ✨</h1>

        <p>
        "Store Smart. Live Large."
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

export default StorageOrganization;