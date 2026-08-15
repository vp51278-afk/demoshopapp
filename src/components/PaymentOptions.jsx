import { useState } from "react";
import "./CustomerService.css";

function PaymentOptions() {

  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="customer-page">

      <h1>Payment Options</h1>

      <p>
        VAJP Mart offers multiple secure payment methods to make your shopping
        experience fast, safe, and convenient.
      </p>

      <ul>
        <li>UPI (Google Pay, PhonePe, Paytm, BHIM)</li>
        <li>Debit Cards (Visa, MasterCard, RuPay)</li>
        <li>Credit Cards (Visa, MasterCard, American Express)</li>
        <li>Net Banking</li>
        <li>Cash on Delivery (Available on eligible products)</li>
        <li>VAJP Mart Gift Cards & Promo Coupons</li>
      </ul>

      <button onClick={() => setShowOptions(true)}>
        Choose Payment Method
      </button>

      {showOptions && (
        <div className="payment-box">

          <h2>Select Payment Method</h2>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setSelected(e.target.value)}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Debit Card"
              onChange={(e) => setSelected(e.target.value)}
            />
            Debit Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Credit Card"
              onChange={(e) => setSelected(e.target.value)}
            />
            Credit Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Net Banking"
              onChange={(e) => setSelected(e.target.value)}
            />
            Net Banking
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              onChange={(e) => setSelected(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Gift Card"
              onChange={(e) => setSelected(e.target.value)}
            />
            Gift Card / Coupon
          </label>

          {selected && (
            <div className="selected-payment">
              <strong>Selected Payment Method:</strong> {selected}
            </div>
          )}

          <button className="submit-btn">
            Continue
          </button>

        </div>
      )}

    </div>
  );
}

export default PaymentOptions;