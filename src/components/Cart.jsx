import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);



  const fetchCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCart(null);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://demoshopapp-tn4i.vercel.app/api/cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setCart(null);

        alert("Your session has expired. Please login again.");

        navigate("/");
        return;
      }

      if (!response.ok) {
        throw new Error("Unable to fetch cart");
      }

      const data = await response.json();

      setCart(data);
    } catch (error) {
      console.error("Fetch cart error:", error);
      alert("Unable to load cart.");
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    fetchCart();

    // Navbar cart count update
    const handleCartUpdate = () => {
      fetchCart();
    };

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, []);


  const updateQuantity = async (productId, quantity) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    // Don't allow quantity below 1
    if (quantity < 1) {
      return;
    }

    try {
      setActionLoading(true);

      const response = await fetch(
       "https://demoshopapp-tn4i.vercel.app/api/cart/update",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            productId,
            quantity,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

        navigate("/");
        return;
      }

      if (!response.ok) {
        alert(
          data.message ||
          "Unable to update cart."
        );
        return;
      }

      setCart(data.cart);

      // Update Navbar count
      window.dispatchEvent(
        new Event("cartUpdated")
      );

    } catch (error) {
      console.error(
        "Update quantity error:",
        error
      );

      alert(
        "Unable to update cart."
      );

    } finally {
      setActionLoading(false);
    }
  };



  const removeItem = async (productId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      setActionLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/cart/remove/${productId}`,
      
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

        navigate("/");
        return;
      }

      if (!response.ok) {
        alert(
          data.message ||
          "Unable to remove product."
        );
        return;
      }

      setCart(data.cart);

      // Update Navbar count
      window.dispatchEvent(
        new Event("cartUpdated")
      );

    } catch (error) {
      console.error(
        "Remove item error:",
        error
      );

      alert(
        "Unable to remove product."
      );

    } finally {
      setActionLoading(false);
    }
  };




  const clearCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    const confirmClear = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (!confirmClear) {
      return;
    }

    try {
      setActionLoading(true);

      const response = await fetch(
        "https://demoshopapp-yfnk.vercel.app/api/cart/clear",
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert(
          "Your session has expired. Please login again."
        );

        navigate("/");
        return;
      }

      if (!response.ok) {
        alert(
          data.message ||
          "Unable to clear cart."
        );
        return;
      }

      setCart(data.cart);

      // Update Navbar count
      window.dispatchEvent(
        new Event("cartUpdated")
      );

    } catch (error) {
      console.error(
        "Clear cart error:",
        error
      );

      alert(
        "Unable to clear cart."
      );

    } finally {
      setActionLoading(false);
    }
  };




  if (loading) {
    return (
      <div className="cartLoading">
        <h2>Loading Cart...</h2>
      </div>
    );
  }


  

  if (!localStorage.getItem("token")) {
    return (
      <div className="emptyCart">

        <div className="emptyCartIcon">
          🛒
        </div>

        <h2>
          Please Login First
        </h2>

        <p>
          Login to view your cart and continue shopping.
        </p>

        <button
          onClick={() => navigate("/")}
          className="continueButton"
        >
          Continue Shopping
        </button>

      </div>
    );
  }




  if (
    !cart ||
    !cart.items ||
    cart.items.length === 0
  ) {
    return (
      <div className="emptyCart">

        <div className="emptyCartIcon">
          🛒
        </div>

        <h2>
          Your Cart is Empty
        </h2>

        <p>
          Looks like you haven't added anything
          to your cart yet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="continueButton"
        >
          Continue Shopping
        </button>

      </div>
    );
  }



  const totalItems = cart.items.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );


  const totalPrice = cart.items.reduce(
    (total, item) => {

      const product = item.productId;

      if (!product) {
        return total;
      }

      return (
        total +
        Number(product.price || 0) *
          Number(item.quantity || 0)
      );
    },
    0
  );


  const totalOldPrice = cart.items.reduce(
    (total, item) => {

      const product = item.productId;

      if (!product) {
        return total;
      }

      const oldPrice =
        product.oldPrice || product.price || 0;

      return (
        total +
        Number(oldPrice) *
          Number(item.quantity || 0)
      );
    },
    0
  );


  const totalDiscount =
    Math.max(
      0,
      totalOldPrice - totalPrice
    );




  return (
    <div className="cartPage">

      {/* 
          LEFT SECTION
    */}

      <div className="cartLeft">

        <div className="cartHeader">

          <h1>
            Shopping Cart
          </h1>

          <button
            onClick={clearCart}
            className="clearCartButton"
            disabled={actionLoading}
          >
            Clear Cart
          </button>

        </div>


        <p className="cartItemsCount">
          {totalItems} item
          {totalItems !== 1 ? "s" : ""}
          {" "}in your cart
        </p>


        {/* 
            CART ITEMS
       */}

        {cart.items.map((item) => {

          const product = item.productId;

          if (!product) {
            return null;
          }

          return (
            <div
              className="cartItem"
              key={product._id}
            >

              {/* Product Image */}

              <div className="cartProductImage">

                <img
                  src={
                    product.image ||
                    product.img
                  }
                  alt={product.name}
                />

              </div>


              {/* Product Information */}

              <div className="cartProductInfo">

                <h2>
                  {product.name}
                </h2>

                <p className="cartProductPrice">
                  ₹{product.price}
                </p>

                {product.oldPrice && (
                  <del>
                    ₹{product.oldPrice}
                  </del>
                )}


                {/* Quantity */}

                <div className="quantityBox">

                  <button
                    onClick={() =>
                      updateQuantity(
                        product._id,
                        item.quantity - 1
                      )
                    }
                    disabled={
                      actionLoading ||
                      item.quantity <= 1
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        product._id,
                        item.quantity + 1
                      )
                    }
                    disabled={actionLoading}
                  >
                    +
                  </button>

                </div>


                {/* Remove */}

                <button
                  className="removeButton"
                  onClick={() =>
                    removeItem(product._id)
                  }
                  disabled={actionLoading}
                >
                  Remove
                </button>

              </div>


              {/* Item Total */}

              <div className="itemTotal">

                <strong>
                  ₹
                  {Number(product.price || 0) *
                    Number(item.quantity || 0)}
                </strong>

              </div>

            </div>
          );
        })}

      </div>


      {/*
          RIGHT SECTION
      */}

      <div className="cartRight">

        <div className="summaryBox">

          <h2>
            Order Summary
          </h2>


          <div className="summaryRow">

            <span>
              Items ({totalItems})
            </span>

            <span>
              ₹{totalOldPrice}
            </span>

          </div>


          <div className="summaryRow">

            <span>
              Discount
            </span>

            <span className="discount">
              - ₹{totalDiscount}
            </span>

          </div>


          <div className="summaryRow">

            <span>
              Delivery
            </span>

            <span className="free">
              FREE
            </span>

          </div>


          <hr />


          <div className="totalRow">

            <strong>
              Total
            </strong>

            <strong>
              ₹{totalPrice}
            </strong>

          </div>


          <button
            className="checkoutButton"
            onClick={() =>
              alert(
                "Checkout will be available soon."
              )
            }
          >
            Proceed to Checkout
          </button>


          <button
            className="continueButton"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;