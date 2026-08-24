import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./KitchenEssential.css";
import CategorySection2 from "./CategorySection2";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function KitchenEssential() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
       const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/category/Kitchen`
        );

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching kitchen products:", error);
      }
    };

    fetchProducts();
  }, []);


  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const toggleCard = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShopNow = () => {
    if (products.length > 0) {
      navigate("/home-decor-shopping", {
        state: products[0],
      });
    }
  };

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Banner */}
      <div className="shopBanner">
        <h1>✨ Kitchen Essentials Collection ✨</h1>

        <p>
          "Quality Kitchen Essentials at Prices You'll Love." ❤️
        </p>

        <button
          className="shopNowBtn"
          onClick={handleShopNow}
        >
          Shop Now
        </button>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item) => (
          <div
            key={item._id}
            className={`cart ${
              selected[item._id] ? "active" : ""
            }`}
            onClick={() => {
              toggleCard(item._id);

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
                toggleLike(item._id);
              }}
            >
              {liked[item._id] ? (
                <FaHeart color="#123C7A" />
              ) : (
                <FaRegHeart />
              )}
            </div>

            {/* Product Image */}
            <img
              src={item.img}
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
    </>
  );
}

export default KitchenEssential;