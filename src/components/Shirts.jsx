import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shirts.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Shirts() {

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
      img: "/jh5.jpeg",
      name: "Slim Fit Casual Shirt",
      price: 499,
      oldPrice: 1199,
      reviews: 1254,
      discount: "58% OFF",
    },
    {
      img: "/jh8.jpeg",
      name: "Classic White Shirt",
      price: 549,
      oldPrice: 1299,
      reviews: 986,
      discount: "58% OFF",
    },
    {
      img: "/jh4.jpeg",
      name: "Checked Cotton Shirt",
      price: 599,
      oldPrice: 1399,
      reviews: 845,
      discount: "57% OFF",
    },
    {
      img: "/jh6.jpeg",
      name: "Blue Denim Shirt",
      price: 649,
      oldPrice: 1499,
      reviews: 721,
      discount: "57% OFF",
    },
    {
      img: "/jh2.jpeg",
      name: "Formal Office Shirt",
      price: 699,
      oldPrice: 1599,
      reviews: 918,
      discount: "56% OFF",
    },
    {
      img: "/jh3.jpeg",
      name: "Linen Full Sleeve Shirt",
      price: 749,
      oldPrice: 1699,
      reviews: 653,
      discount: "56% OFF",
    },
    {
      img: "/download (52).jpeg",
      name: "Printed Casual Shirt",
      price: 599,
      oldPrice: 1399,
      reviews: 574,
      discount: "57% OFF",
    },
    {
      img: "/Black cotton shirt (1).jpeg",
      name: "Black Solid Shirt",
      price: 549,
      oldPrice: 1299,
      reviews: 810,
      discount: "58% OFF",
    },
    {
      img: "/download (51).jpeg",
      name: "Sky Blue Formal Shirt",
      price: 699,
      oldPrice: 1599,
      reviews: 693,
      discount: "56% OFF",
    },
    {
      img: "/jh1.jpeg",
      name: "Mandarin Collar Shirt",
      price: 649,
      oldPrice: 1499,
      reviews: 547,
      discount: "57% OFF",
    },
    {
      img: "/jh.jpeg",
      name: "Olive Green Shirt",
      price: 599,
      oldPrice: 1399,
      reviews: 631,
      discount: "57% OFF",
    },
    {
      img: "/vh2.jpeg",
      name: "Striped Cotton Shirt",
      price: 649,
      oldPrice: 1499,
      reviews: 714,
      discount: "57% OFF",
    },
    {
      img: "/vh1.jpeg",
      name: "Premium Oxford Shirt",
      price: 799,
      oldPrice: 1799,
      reviews: 882,
      discount: "56% OFF",
    },
    {
      img: "/vbnn.jpeg",
      name: "Beige Casual Shirt",
      price: 549,
      oldPrice: 1299,
      reviews: 468,
      discount: "58% OFF",
    },
    {
      img: "/vbnn.jpeg",
      name: "Flannel Check Shirt",
      price: 699,
      oldPrice: 1599,
      reviews: 790,
      discount: "56% OFF",
    },
    {
      img: "/vh.jpeg",
      name: "Navy Blue Shirt",
      price: 649,
      oldPrice: 1499,
      reviews: 654,
      discount: "57% OFF",
    },
    {
      img: "/vbn9.jpeg",
      name: "Printed Hawaiian Shirt",
      price: 599,
      oldPrice: 1399,
      reviews: 518,
      discount: "57% OFF",
    },
    {
      img: "/vbn7.jpeg",
      name: "Grey Casual Shirt",
      price: 549,
      oldPrice: 1299,
      reviews: 607,
      discount: "58% OFF",
    },
    {
      img: "/vbn6.jpeg",
      name: "Maroon Formal Shirt",
      price: 699,
      oldPrice: 1599,
      reviews: 742,
      discount: "56% OFF",
    },
    {
      img: "/vbn5.jpeg",
      name: "Light Pink Shirt",
      price: 599,
      oldPrice: 1399,
      reviews: 533,
      discount: "57% OFF",
    },
    {
      img: "/vbn3.jpeg",
      name: "Khaki Cotton Shirt",
      price: 649,
      oldPrice: 1499,
      reviews: 675,
      discount: "57% OFF",
    },
    {
      img: "/vbn4.jpeg",
      name: "Classic Checked Shirt",
      price: 549,
      oldPrice: 1299,
      reviews: 701,
      discount: "58% OFF",
    },
    {
      img: "/vbn2.jpeg",
      name: "Premium Linen Shirt",
      price: 799,
      oldPrice: 1799,
      reviews: 928,
      discount: "56% OFF",
    },
    {
      img: "/vbn1.jpeg",
      name: "Regular Fit Shirt",
      price: 499,
      oldPrice: 1199,
      reviews: 1186,
      discount: "58% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Shirts Collection ✨</h1>

        <p>
        💼 "Confidence Begins with the Perfect Shirt."
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

export default Shirts;