import React, { useState } from "react";
import "./Orders.css";
import {
  FaTruck,
  FaCheckCircle,
  FaUndo,
  FaDownload,
  FaStar,
  FaSearch,
} from "react-icons/fa";

function Orders() {

  const [activeBtn, setActiveBtn] = useState("");

  const orders = [
    {
      id: "#VAJP458721",
      image: "/jk.jpeg",
      name: "Apple iPhone 15 Pro (256GB)",
      price: "₹1,19,999",
      date: "25 July 2026",
      status: "Delivered",
    },

    {
      id: "#VAJP458722",
      image: "/hh1.jpeg",
      name: "Samsung Galaxy Watch 7",
      price: "₹24,999",
      date: "28 July 2026",
      status: "Shipped",
    },

    {
      id: "#VAJP458723",
      image: "/hh.jpeg",
      name: "Wireless Earbuds",
      price: "₹2,499",
      date: "30 July 2026",
      status: "Processing",
    },
  ];

  return (

    <div className="orders-page">

      <div className="orders-header">

        <h1>Your Orders</h1>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search your orders"
          />

        </div>

      </div>

      <div className="filter-bar">

        <button>All Orders</button>
        <button>Delivered</button>
        <button>Shipped</button>
        <button>Processing</button>

      </div>

      <div className="orders-container">

        {orders.map((order) => (

          <div className="order-card" key={order.id}>

            <div className="order-image">
              <img src={order.image} alt={order.name} />
            </div>

            <div className="order-details">

              <h2>{order.name}</h2>

              <p><strong>Order ID :</strong> {order.id}</p>

              <p><strong>Order Date :</strong> {order.date}</p>

              <p><strong>Price :</strong> {order.price}</p>

              <div className="status">
                <FaCheckCircle className="status-icon" />
                <span>{order.status}</span>
              </div>

            </div>
                      {/* Buttons */}
          <div className="order-actions">

<button
  className="track-btn"
  onClick={() =>
    alert(`Tracking details for ${order.name} will be available soon.`)
  }
>
  <FaTruck />
  Track Package
</button>

<button
  className="return-btn"
  onClick={() =>
    alert(`Return request submitted for ${order.name}.`)
  }
>
  <FaUndo />
  Return Item
</button>

<button
  className="invoice-btn"
  onClick={() =>
    alert(`Invoice downloaded for ${order.name}.`)
  }
>
  <FaDownload />
  Invoice
</button>

<button
  className="review-btn"
  onClick={() =>
    alert(`Thanks! Review page for ${order.name} will open soon.`)
  }
>
  <FaStar />
  Write Review
</button>

</div>

</div>

))}

</div>

{/* Empty Orders */}
<div className="empty-orders">

<img
src="/Empty Cart free icons designed by Arkinasi.jpeg"
alt="No Orders"
/>

<h2>No More Orders</h2>

<p>
Looks like you've reached the end of your orders.
Continue shopping to discover amazing products.
</p>

<button
className="shop-btn"
onClick={() => (window.location.href = "/")}
>
Continue Shopping
</button>

</div>

</div>

);
}

export default Orders;