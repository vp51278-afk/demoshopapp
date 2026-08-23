import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shoes.css";
import CategorySection4 from "./CategorySection4";
import { addToCart } from "./addToCart";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Shoes() {
  // Navigation
  const navigate = useNavigate();

  // Products
  const [products, setProducts] = useState([]);

  // Wishlist
  const [liked, setLiked] = useState([]);

  // Selected cards
  const [selected, setSelected] = useState([]);

  // Loading
  const [loading, setLoading] = useState(true);

  // Error
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchShoes = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://demoshopapp-yfnk.vercel.app/api/products/category/Shoes"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch shoes");
        }

        const data = await response.json();

        console.log(
          "Shoes fetched from MongoDB:",
          data
        );

        setProducts(data);

        // Wishlist state
        setLiked(Array(data.length).fill(false));

        // Selected card state
        setSelected(Array(data.length).fill(false));
      } catch (err) {
        console.error(
          "Error fetching shoes:",
          err
        );

        setError("Unable to load shoes collection.");
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);



  const toggleLike = (index) => {
    setLiked((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };

  const toggleCard = (index) => {
    setSelected((previous) => {
      const temp = [...previous];

      temp[index] = !temp[index];

      return temp;
    });
  };


  const getImage = (item) => {
    return `/${String(
      item.image || item.img || ""
    ).replace(/^\/+/, "")}`;
  };


  if (loading) {
    return (
      <>
        <CategorySection4 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading shoes collection...
        </div>
      </>
    );
  }

 
  if (error) {
    return (
      <>
        <CategorySection4 />

        <div
          style={{
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
            color: "red",
          }}
        >
          {error}
        </div>
      </>
    );
  }

  return (
    <>
      {/* Category Section */}
      <CategorySection4 />

      {/* Shoes Banner */}
      <div className="shopBanner">
        <h1>✨ Shoes Collection ✨</h1>

        <p>
          🌟 "Where Fashion Meets Every Step."
        </p>

        {/* Shop Now */}
        {products.length > 0 && (
          <button
            className="shopNowBtn"
            onClick={() =>
              navigate("/home-decor-shopping", {
                state: {
                  ...products[0],
                  img: getImage(products[0]),
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
            onClick={() => {
              toggleCard(index);

              navigate("/home-decor-shopping", {
                state: {
                  ...item,
                  img: getImage(item),
                },
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
            <img
              src={getImage(item)}
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

              {item.oldPrice && (
                <span className="oldPrice">
                  ₹{item.oldPrice}
                </span>
              )}

              {item.discount && (
                <span className="discount">
                  {item.discount}
                </span>
              )}
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

export default Shoes;