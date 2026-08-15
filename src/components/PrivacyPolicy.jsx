import { useState } from "react";
import "./CustomerService.css";

function PrivacyPolicy() {

  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <div className="customer-page">

      <h1>Privacy Policy</h1>

      <p>
        At VAJP Mart, we value your privacy and are committed to protecting your
        personal information.
      </p>

      <ul>
        <li>Your personal information is kept secure and confidential.</li>
        <li>We never sell or share your data with unauthorized third parties.</li>
        <li>Your payment details are protected using secure encryption.</li>
        <li>Information is collected only to improve your shopping experience.</li>
        <li>You can request to update or delete your account information.</li>
      </ul>

      <button onClick={() => setShowPolicy(true)}>
        Read Full Privacy Policy
      </button>

      {showPolicy && (

        <div className="privacy-box">

          <h2>Complete Privacy Policy</h2>

          <div className="privacy-content">

            <h3>1. Information We Collect</h3>
            <p>
              We collect your name, email address, phone number, delivery
              address and order details to process your purchases.
            </p>

            <h3>2. Payment Security</h3>
            <p>
              All online transactions are protected using secure encryption.
              Card details are never stored on our servers.
            </p>

            <h3>3. How We Use Your Data</h3>
            <p>
              Your information is used only for order processing, customer
              support, delivery updates and improving our services.
            </p>

            <h3>4. Data Protection</h3>
            <p>
              We use industry-standard security practices to protect your
              personal information from unauthorized access.
            </p>

            <h3>5. Cookies</h3>
            <p>
              Cookies help us remember your preferences and improve your
              shopping experience.
            </p>

            <h3>6. Your Rights</h3>
            <p>
              You may request to view, update or delete your account
              information by contacting customer support.
            </p>

          </div>

          <button
            className="submit-btn"
            onClick={() => setShowPolicy(false)}
          >
            Close
          </button>

        </div>

      )}

    </div>
  );
}

export default PrivacyPolicy;