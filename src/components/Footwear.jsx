import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footwear.css";
import CategorySection from "./CategorySection";
import { addToCart } from "./addToCart";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function Footwear() {

  // Navigation
  const navigate = useNavigate();

  // Products from MongoDB
  const [products, setProducts] = useState([]);

  // Wishlist
  const [liked, setLiked] = useState([]);

  // Selected cards
  const [selected, setSelected] = useState([]);




  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
          "https://demoshopapp-tn4i.vercel.app/api/products?category=Footwear"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        const data = await response.json();

        console.log(
          "Fetched Footwear Products:",
          data
        );

        setProducts(data);

        setLiked(
          Array(data.length).fill(false)
        );

        setSelected(
          Array(data.length).fill(false)
        );

      } catch (error) {

        console.error(
          "Error fetching footwear products:",
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



  const openProduct = (item, index) => {

    toggleCard(index);

    navigate(
      "/home-decor-shopping",
      {
        state: item,
      }
    );

  };


  return (
    <>

      {/* Category Section */}

      <CategorySection />


      {/* Footwear Banner */}

      <div className="shopBanner">

        <h1>
          ✨ Footwear Collection ✨
        </h1>

        <p>
          "For Elegant look."
        </p>


        {products.length > 0 && (

          <button
            className="shopNowBtn"
            onClick={() =>
              navigate(
                "/home-decor-shopping",
                {
                  state: products[0],
                }
              )
            }
          >
            Shop Now
          </button>

        )}

      </div>


      {/* Products */}

      <div className="products">

        {products.map(
          (item, index) => (

            <div
              key={
                item._id || index
              }
              className={`cart ${
                selected[index]
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                openProduct(
                  item,
                  index
                )
              }
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

                  <FaHeart
                    color="#123C7A"
                  />

                ) : (

                  <FaRegHeart />

                )}

              </div>


              {/* Product Image */}

              <img
                src={
                  item.image ||
                  item.img
                }
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

                <FaShoppingCart
                  style={{
                    marginRight: "8px",
                  }}
                />

                Add to Cart

              </button>


            </div>

          )
        )}

      </div>

    </>
  );
}

export default Footwear;