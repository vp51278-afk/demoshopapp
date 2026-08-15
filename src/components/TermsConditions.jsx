import { useState } from "react";
import "./CustomerService.css";

function TermsConditions() {

  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="customer-page">

      <h1>Terms & Conditions</h1>

      <p>
        By accessing and using VAJP Mart, you agree to comply with our terms
        and conditions to ensure a safe and secure shopping experience for all
        customers.
      </p>

      <ul>
        <li>All orders are subject to product availability.</li>
        <li>Prices and offers may change without prior notice.</li>
        <li>Customers must provide accurate delivery information.</li>
        <li>Returns are processed according to our Return Policy.</li>
        <li>Fraudulent orders may be cancelled.</li>
        <li>Users must keep account credentials secure.</li>
      </ul>

      <button onClick={() => setShowTerms(true)}>
        View Complete Terms
      </button>

      {showTerms && (

        <div className="terms-box">

          <h2>Complete Terms & Conditions</h2>

          <div className="terms-content">

            <h3>1. Orders</h3>
            <p>
              Orders are confirmed only after successful verification and
              product availability.
            </p>

            <h3>2. Payments</h3>
            <p>
              All online payments are processed through secure payment gateways.
            </p>

            <h3>3. Shipping</h3>
            <p>
              Delivery timelines may vary depending on your location and weather
              conditions.
            </p>

            <h3>4. Returns & Refunds</h3>
            <p>
              Eligible products can be returned within 7 days of delivery.
              Refunds are processed after quality inspection.
            </p>

            <h3>5. User Responsibilities</h3>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account credentials.
            </p>

            <h3>6. Privacy</h3>
            <p>
              Customer information is kept secure and is never shared without
              permission, except where required by law.
            </p>

          </div>

          <button
            className="submit-btn"
            onClick={() => setShowTerms(false)}
          >
            Close
          </button>

        </div>

      )}

    </div>
  );
}

export default TermsConditions;