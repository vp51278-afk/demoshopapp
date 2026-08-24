import React, { useEffect, useState } from "react";
import "./HomeKitchen.css";
import CategorySection2 from "./CategorySection2";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function HomeKitchen() {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
         const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/category/HomeKitchen`
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
          "Error fetching home & kitchen products:",
          error
        );
      }
    };

    fetchProducts();
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

  return (
    <>
      {/* Category Section */}
      <CategorySection2 />

      {/* Products */}
      <div className="products">
        {products.map((item, index) => (
          <div
            key={item._id || index}
            className={`cart ${
              selected[index] ? "active" : ""
            }`}
            onClick={() => toggleCard(index)}
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
              <FaStar className="lastStar" />

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

export default HomeKitchen;



