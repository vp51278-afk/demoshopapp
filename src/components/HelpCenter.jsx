import { useState } from "react";
import "./CustomerService.css";

function HelpCenter() {
  const [showFaqs, setShowFaqs] = useState(false);

  return (
    <div className="customer-page">
      <h1>Help Center</h1>

      <p>
        Welcome to the VAJP Mart Help Center. Find answers to the most
        frequently asked questions and get support for your shopping
        experience.
      </p>

      <ul>
        <li>How to place an order?</li>
        <li>How to cancel an order?</li>
        <li>How to return or replace a product?</li>
        <li>Payment and refund related issues.</li>
        <li>Shipping and delivery information.</li>
        <li>Account login and password assistance.</li>
        <li>Offers, coupons, and gift cards.</li>
      </ul>

      <button onClick={() => setShowFaqs(!showFaqs)}>
        {showFaqs ? "Hide Help Center" : "Visit Help Center"}
      </button>

      {showFaqs && (
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>📦 How do I place an order?</h3>
            <p>
              Browse products, add them to your cart, proceed to checkout,
              choose your address and payment method, then place your order.
            </p>
          </div>

          <div className="faq-item">
            <h3>❌ How can I cancel an order?</h3>
            <p>
              Go to <strong>My Orders</strong>, select your order and click
              <strong> Cancel Order</strong> if it has not been shipped.
            </p>
          </div>

          <div className="faq-item">
            <h3>🔄 How do I return a product?</h3>
            <p>
              Open <strong>My Orders</strong>, select the item, click
              <strong> Return Item</strong>, choose a reason and submit the request.
            </p>
          </div>

          <div className="faq-item">
            <h3>💳 When will I receive my refund?</h3>
            <p>
              Refunds are usually processed within <strong>5–7 business days</strong>
              after the returned item passes inspection.
            </p>
          </div>

          <div className="faq-item">
            <h3>🚚 How can I track my order?</h3>
            <p>
              Go to <strong>My Orders</strong> and click
              <strong> Track Package</strong> to see the latest delivery updates.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpCenter;