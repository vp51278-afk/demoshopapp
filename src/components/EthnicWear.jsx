import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EthnicWear.css";
import CategorySection4 from "./CategorySection4";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function EthnicWear() {

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
      img: "/r15.jpeg",
      name: "Classic White Kurta",
      price: 799,
      oldPrice: 1799,
      reviews: 1245,
      discount: "56% OFF",
    },
    {
      img: "/r16.jpeg",
      name: "Black Cotton Kurta",
      price: 899,
      oldPrice: 1999,
      reviews: 986,
      discount: "55% OFF",
    },
    {
      img: "/r14.jpeg",
      name: "Blue Embroidered Kurta",
      price: 999,
      oldPrice: 2199,
      reviews: 874,
      discount: "55% OFF",
    },
    {
      img: "/r13.jpeg",
      name: "Maroon Festive Kurta",
      price: 1099,
      oldPrice: 2399,
      reviews: 753,
      discount: "54% OFF",
    },
    {
      img: "/r12.jpeg",
      name: "Beige Linen Kurta",
      price: 899,
      oldPrice: 1999,
      reviews: 689,
      discount: "55% OFF",
    },
    {
      img: "/r11.jpeg",
      name: "Pathani Kurta Set",
      price: 1299,
      oldPrice: 2799,
      reviews: 615,
      discount: "54% OFF",
    },
    {
      img: "/r10.jpeg",
      name: "Silk Kurta Pajama",
      price: 1499,
      oldPrice: 3199,
      reviews: 824,
      discount: "53% OFF",
    },
    {
      img: "/r9.jpeg",
      name: "Printed Cotton Kurta",
      price: 849,
      oldPrice: 1899,
      reviews: 592,
      discount: "55% OFF",
    },
    {
      img: "/rr8.jpeg",
      name: "Nehru Jacket Set",
      price: 1799,
      oldPrice: 3799,
      reviews: 731,
      discount: "53% OFF",
    },
    {
      img: "/l.jpeg",
      name: "Royal Sherwani",
      price: 3499,
      oldPrice: 6999,
      reviews: 648,
      discount: "50% OFF",
    },
    {
      img: "/r7.jpeg",
      name: "Wedding Sherwani",
      price: 3999,
      oldPrice: 7999,
      reviews: 902,
      discount: "50% OFF",
    },
    {
      img: "/gold.png",
      name: "Golden Embroidered Kurta",
      price: 1199,
      oldPrice: 2499,
      reviews: 586,
      discount: "52% OFF",
    },
    {
      img: "/r7.jpeg",
      name: "Green Festive Kurta",
      price: 999,
      oldPrice: 2199,
      reviews: 712,
      discount: "55% OFF",
    },
    {
      img: "/rr6.jpeg",
      name: "Yellow Cotton Kurta",
      price: 899,
      oldPrice: 1999,
      reviews: 533,
      discount: "55% OFF",
    },
    {
      img: "/r5.jpeg",
      name: "Designer Kurta Pajama",
      price: 1399,
      oldPrice: 2999,
      reviews: 864,
      discount: "53% OFF",
    },
    {
      img: "/k.jpeg",
      name: "Ivory Wedding Kurta",
      price: 1599,
      oldPrice: 3399,
      reviews: 477,
      discount: "53% OFF",
    },
    {
      img: "/r5.jpeg",
      name: "Traditional Pathani Suit",
      price: 1499,
      oldPrice: 3199,
      reviews: 624,
      discount: "53% OFF",
    },
    {
      img: "/ethnic.jpeg",
      name: "Printed Nehru Jacket",
      price: 1199,
      oldPrice: 2599,
      reviews: 541,
      discount: "54% OFF",
    },
    {
      img: "/r4.jpeg",
      name: "Embroidered Sherwani",
      price: 3799,
      oldPrice: 7599,
      reviews: 793,
      discount: "50% OFF",
    },
    {
      img: "/r2.jpeg",
      name: "Premium Kurta Set",
      price: 1699,
      oldPrice: 3499,
      reviews: 675,
      discount: "51% OFF",
    },
    {
      img: "/r3.jpeg",
      name: "Wedding Indo-Western",
      price: 2999,
      oldPrice: 5999,
      reviews: 518,
      discount: "50% OFF",
    },
    {
      img: "/r1.jpeg",
      name: "Cotton Kurta Pajama",
      price: 999,
      oldPrice: 2199,
      reviews: 606,
      discount: "55% OFF",
    },
    {
      img: "/r.jpeg",
      name: "Royal Blue Kurta",
      price: 1099,
      oldPrice: 2399,
      reviews: 982,
      discount: "54% OFF",
    },
    {
      img: "/download (68).jpeg",
      name: "Festive Ethnic Wear Set",
      price: 1899,
      oldPrice: 3899,
      reviews: 1108,
      discount: "51% OFF",
    },
  ];

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Ethnic Wear Collection ✨</h1>

        <p>
        ✨ "Celebrate Every Occasion with Elegance."
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

export default EthnicWear;