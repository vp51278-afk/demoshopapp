import { useState } from "react";
import "./CustomerService.css";

function Feedback() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !feedback || rating === 0) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="customer-page">

      <h1>Feedback</h1>

      <p>
        We value your feedback! Share your experience with VAJP Mart and help us
        improve our products and services.
      </p>

      <form className="feedback-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <div className="rating">

          <span>Your Rating:</span>

          {[1,2,3,4,5].map((star)=>(
            <span
              key={star}
              className={rating >= star ? "star active" : "star"}
              onClick={()=>setRating(star)}
            >
              ★
            </span>
          ))}

        </div>

        <textarea
          rows="6"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      {submitted && (
        <div className="feedback-success">
          🎉 Thank you! Your feedback has been submitted successfully.
        </div>
      )}

    </div>
  );
}

export default Feedback;