import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Kurti.css";
import CategorySection from "./CategorySection";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Kurti() {

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
      img: "/yu13.jpeg",
      name: "Ivory Embroidered Sharara Set",
      price: 2199,
      oldPrice: 4399,
      reviews: 445,
      discount: "50% OFF",
    },
    {
      img: "/yu14.jpeg",
      name: "Pink Anarkali Suit",
      price: 1799,
      oldPrice: 3599,
      reviews: 389,
      discount: "50% OFF",
    },
    {
      img: "/College outfit ideas.jpeg",
      name: "Printed Short Kurti",
      price: 899,
      oldPrice: 1799,
      reviews: 456,
      discount: "50% OFF",
    },
    {
      img: "/outfit ideas.jpeg",
      name: "Kurti with Palazzo Set",
      price: 1499,
      oldPrice: 2999,
      reviews: 112,
      discount: "50% OFF",
    },
    {
      img: "/download (20).jpeg",
      name: "Punjabi Patiala Suit Set",
      price: 1699,
      oldPrice: 3399,
      reviews: 300,
      discount: "50% OFF",
    },
    {
      img: "/Pashmina Fashion.jpeg",
      name: "Kashmiri Pashmina Suit",
      price: 2499,
      oldPrice: 4999,
      reviews: 178,
      discount: "50% OFF",
    },
    {
      img: "/yu12.jpeg",
      name: "Wine & Cream Designer Suit",
      price: 1999,
      oldPrice: 3999,
      reviews: 440,
      discount: "50% OFF",
    },
    {
      img: "/Perfect outfit.jpeg",
      name: "Designer Cotton Suit Set",
      price: 1599,
      oldPrice: 3199,
      reviews: 400,
      discount: "50% OFF",
    },
  
      {
        img: "/yu11.jpeg",
        name: "Floral Cotton Kurti",
        price: 499,
        oldPrice: 999,
        reviews: 452,
        discount: "50% OFF",
      },
      {
        img: "/yu0.jpeg",
        name: "Rayon Straight Kurti",
        price: 599,
        oldPrice: 1199,
        reviews: 387,
        discount: "50% OFF",
      },
      {
        img: "/yu9.jpeg",
        name: "Printed Anarkali Kurti",
        price: 799,
        oldPrice: 1599,
        reviews: 521,
        discount: "50% OFF",
      },
      {
        img: "/fjei.jpeg",
        name: "Chikankari Kurti",
        price: 899,
        oldPrice: 1799,
        reviews: 618,
        discount: "50% OFF",
      },
      {
        img: "/yu9.jpeg",
        name: "Kurta Pant Set",
        price: 999,
        oldPrice: 1999,
        reviews: 412,
        discount: "50% OFF",
      },
      {
        img: "/yu7.jpeg",
        name: "Kurta Palazzo Set",
        price: 1099,
        oldPrice: 2199,
        reviews: 356,
        discount: "50% OFF",
      },
      {
        img: "/kutiurew.jpeg",
        name: "Cotton Straight Suit Set",
        price: 1199,
        oldPrice: 2399,
        reviews: 441,
        discount: "50% OFF",
      },
      {
        img: "/krtui.jpeg",
        name: "Embroidered Suit Set",
        price: 1499,
        oldPrice: 2999,
        reviews: 328,
        discount: "50% OFF",
      },
      {
        img: "/Hand Made Maxi.jpeg",
        name: "Anarkali Suit",
        price: 1399,
        oldPrice: 2799,
        reviews: 392,
        discount: "50% OFF",
      },
      {
        img: "/yu5.jpeg",
        name: "Printed Cotton Suit",
        price: 899,
        oldPrice: 1799,
        reviews: 284,
        discount: "50% OFF",
      },
      {
        img: "/yu6.jpeg",
        name: "Kurta with Dupatta",
        price: 1299,
        oldPrice: 2599,
        reviews: 364,
        discount: "50% OFF",
      },
      {
        img: "/yu4.jpeg",
        name: "Rayon Suit Set",
        price: 1099,
        oldPrice: 2199,
        reviews: 309,
        discount: "50% OFF",
      },
      {
        img: "/yu3.jpeg",
        name: "Designer Party Wear Suit",
        price: 1799,
        oldPrice: 3599,
        reviews: 256,
        discount: "50% OFF",
      },
      {
        img: "/yu2.jpeg",
        name: "Daily Wear Cotton Kurti",
        price: 449,
        oldPrice: 899,
        reviews: 578,
        discount: "50% OFF",
      },
      {
        img: "/yu1.jpeg",
        name: "Office Wear Kurti",
        price: 699,
        oldPrice: 1399,
        reviews: 331,
        discount: "50% OFF",
      },
      {
        img: "/yu.jpeg",
        name: "Festive Kurta Set",
        price: 1599,
        oldPrice: 3199,
        reviews: 417,
        discount: "50% OFF",
      },
    ];
  return (
    <>
      {/* Category Section */}
      <CategorySection/>

      {/* Home Decor Banner */}
      <div className="shopBanner">
        <h1>✨ Kurti Collection ✨</h1>

        <p>
        "Twirling into Elegance."
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

export default Kurti;


