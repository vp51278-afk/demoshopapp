import { useState } from "react";
import "./CustomerService.css";

function ReturnsRefunds() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="customer-page">
      <h1>Returns & Refunds</h1>

      <p>
        We want you to be completely satisfied with your purchase.
      </p>

      <ul>
        <li>Return within 7 days of delivery.</li>
        <li>Refund processed within 5-7 business days.</li>
        <li>Item must be unused and in original packaging.</li>
        <li>Some products may not be eligible for return.</li>
      </ul>

      <button onClick={() => setShowForm(true)}>
        Start Return Request
      </button>

      {showForm && (

        <div className="return-form">

          <h2>Return Request Form</h2>

          <input
            type="text"
            placeholder="Order ID"
          />

          <input
            type="text"
            placeholder="Product Name"
          />

          <select>
            <option>Select Return Reason</option>
            <option>Damaged Product</option>
            <option>Wrong Item Received</option>
            <option>Product Defective</option>
            <option>Size Issue</option>
            <option>Quality Not Satisfied</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your issue..."
          ></textarea>

          <button className="submit-btn">
            Submit Return Request
          </button>

        </div>

      )}

    </div>
  );
}

export default ReturnsRefunds;