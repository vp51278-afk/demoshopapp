import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Household.css";
import CategorySection6 from "./CategorySection6";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Household() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://demoshopapp-yfnk.vercel.app/api/products?category=Household"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
        setLiked(Array(data.length).fill(false));
        setSelected(Array(data.length).fill(false));
      } catch (error) {
        console.error(
          "Error fetching household products:",
          error
        );
      }
    };

    fetchProducts();
  }, []);

  // =========================
  // Wishlist
  // =========================
  const toggleLike = (index) => {
    const temp = [...liked];
    temp[index] = !temp[index];
    setLiked(temp);
  };

  // =========================
  // Card Selection
  // =========================
  const toggleCard = (index) => {
    const temp = [...selected];
    temp[index] = !temp[index];
    setSelected(temp);
  };

  // =========================
  // Open Product
  // =========================
  const openProduct = (item, index) => {
    toggleCard(index);

    navigate("/household-shopping", {
      state: item,
    });
  };

  return (
    <>
      {/* Category Section */}
      <CategorySection6 />

      {/* Household Banner */}
      <div className="shopBanner">
        <h1>✨ Household Collection ✨</h1>

        <p>
          Everything Your Home Needs, All in One Place. 🏡
        </p>

        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() =>
              navigate("/household-shopping", {
                state: products[0],
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
                ({item.reviews || 0})
              </span>
            </div>

            {/* Price */}
            <div className="price">
              <span className="newPrice">
                ₹{item.price}
              </span>

              <span className="oldPrice">
                <del>₹{item.oldPrice}</del>
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

export default Household;