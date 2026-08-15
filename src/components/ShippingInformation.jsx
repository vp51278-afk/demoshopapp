import { useState } from "react";
import "./CustomerService.css";

function ShippingInformation() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="customer-page">
      <h1>Shipping Information</h1>

      <p>
        VAJP Mart offers fast, reliable, and secure delivery services across
        India. Choose the shipping option that best suits your needs.
      </p>

      <ul>
        <li>🚚 Standard Delivery: 2–5 Business Days</li>
        <li>⚡ Express Delivery: 1–2 Business Days</li>
        <li>🎁 Free Shipping on orders above ₹499</li>
        <li>📦 Real-time order tracking available</li>
        <li>🏠 Delivery available across India</li>
        <li>⏰ Delivery time may vary depending on your location.</li>
      </ul>

      <button onClick={() => setShowDetails(true)}>
        View Shipping Details
      </button>

      {showDetails && (
        <div className="shipping-details">

          <h2>Shipping Options</h2>

          <table className="shipping-table">
            <thead>
              <tr>
                <th>Shipping Method</th>
                <th>Delivery Time</th>
                <th>Charges</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Standard Delivery</td>
                <td>2–5 Business Days</td>
                <td>₹49</td>
              </tr>

              <tr>
                <td>Express Delivery</td>
                <td>1–2 Business Days</td>
                <td>₹99</td>
              </tr>

              <tr>
                <td>Same Day Delivery</td>
                <td>Within 24 Hours</td>
                <td>₹199</td>
              </tr>

              <tr>
                <td>Orders Above ₹499</td>
                <td>Standard Delivery</td>
                <td><strong>FREE</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="shipping-note">
            <h3>Additional Information</h3>

            <p>✔ Orders are processed within 24 hours.</p>

            <p>✔ Tracking details are sent via Email and SMS.</p>

            <p>✔ Delivery partners: Delhivery, Blue Dart, DTDC, Ekart.</p>

            <p>✔ Delivery time may vary due to weather or public holidays.</p>

          </div>

        </div>
      )}
    </div>
  );
}

export default ShippingInformation;


