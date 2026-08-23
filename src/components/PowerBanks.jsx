import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PowerBanks.css";
import CategorySection5 from "./CategorySection5";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function PowerBanks() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://demoshopapp-yfnk.vercel.app/api/products?category=PowerBanks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);

        setLiked(Array(data.length).fill(false));
        setSelected(Array(data.length).fill(false));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

 
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


  const openProduct = (item, index) => {
    toggleCard(index);

    navigate("/home-decor-shopping", {
      state: {
        ...item,

        // MongoDB image field
        img: item.image,
      },
    });
  };

  return (
    <>
      {/* Category Section */}
      <CategorySection5 />

      {/* Banner */}
      <div className="shopBanner">
        <h1>✨ Power Banks Collection ✨</h1>

        <p>
          🔌 "Your Backup Power, Always Ready."
        </p>

        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() =>
              navigate("/home-decor-shopping", {
                state: {
                  ...products[0],
                  img: products[0].image,
                },
              })
            }
          >
            Shop Now
          </button>
        )}
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={item._id || index}
            className={`cart ${
              selected[index] ? "active" : ""
            }`}
            onClick={() => openProduct(item, index)}
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
            <img
              src={item.image}
              alt={item.name}
            />

            {/* Product Name */}
            <h3 className="head">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span>
                ({item.reviews})
              </span>
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
  onClick={(e) => {
    e.stopPropagation();
    addToCart(item);
  }}
>
  <FaShoppingCart style={{ marginRight: "8px" }} />
  Add to Cart
</button>

           
          </div>
        ))}
      </div>

      {/* Loading */}
      {products.length === 0 && (
        <p
          style={{
            textAlign: "center",
            margin: "40px",
          }}
        >
          Loading products...
        </p>
      )}
    </>
  );
}

export default PowerBanks;