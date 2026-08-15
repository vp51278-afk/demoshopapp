import { useState } from "react";
import "./CustomerService.css";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = () => {
    if (orderId.trim() === "") {
      alert("Please enter your Order ID.");
      return;
    }

    setShowStatus(true);
  };

  return (
    <div className="customer-page">
      <h1>Track Your Order</h1>

      <p>
        Enter your Order ID below to check the current status of your order.
        You can track your shipment from the moment it is confirmed until it
        reaches your doorstep.
      </p>

      <input
        type="text"
        placeholder="Enter your Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="track-input"
      />

      <br />

      <button onClick={handleTrack}>
        Track Order
      </button>

      {showStatus && (
        <div className="tracking-card">

          <h2>Tracking Details</h2>

          <div className="tracking-info">
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Status:</strong> 🚚 Shipped</p>
            <p><strong>Current Location:</strong> 📍 Kanpur Distribution Center</p>
            <p><strong>Last Updated:</strong> 05 Aug 2026, 09:45 AM</p>
            <p><strong>Expected Delivery:</strong> 07 Aug 2026</p>
          </div>

          <div className="timeline">

            <div className="timeline-item active">
              <div className="circle"></div>
              <div>
                <h4>Order Confirmed</h4>
                <p>05 Aug • 09:10 AM</p>
              </div>
            </div>

            <div className="timeline-item active">
              <div className="circle"></div>
              <div>
                <h4>Packed</h4>
                <p>05 Aug • 10:30 AM</p>
              </div>
            </div>

            <div className="timeline-item active">
              <div className="circle"></div>
              <div>
                <h4>Shipped</h4>
                <p>Kanpur Distribution Center</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="circle"></div>
              <div>
                <h4>Out for Delivery</h4>
                <p>Expected Tomorrow</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="circle"></div>
              <div>
                <h4>Delivered</h4>
                <p>Pending</p>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default TrackOrder;