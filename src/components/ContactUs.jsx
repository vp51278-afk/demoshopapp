import { useState } from "react";
import "./CustomerService.css";

function ContactUs() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="customer-page">
      <h1>Contact Us</h1>

      <p>
        Need help? Our customer support team is available to assist you with
        orders, payments, returns, and account-related queries.
      </p>

      <ul>
        <li><strong>Email:</strong> support@vajpmart.com</li>
        <li><strong>Phone:</strong> +91 9876543210</li>
        <li><strong>Address:</strong> Lucknow, Uttar Pradesh, India</li>
        <li><strong>Support Hours:</strong> Monday - Sunday (9:00 AM - 9:00 PM)</li>
      </ul>

      <button onClick={() => setShowForm(true)}>
        Contact Support
      </button>

      {showForm && (
        <div className="contact-form">

          <h2>Submit Your Request</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>Select Issue</option>
            <option>Order Issue</option>
            <option>Payment Issue</option>
            <option>Return & Refund</option>
            <option>Delivery Issue</option>
            <option>Account Issue</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your issue..."
          ></textarea>

          <button className="submit-btn">
            Submit Request
          </button>

        </div>
      )}

    </div>
  );
}

export default ContactUs;