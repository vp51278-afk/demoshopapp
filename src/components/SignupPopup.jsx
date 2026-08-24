import React, { useState } from "react";
import "./Modal.css";

function SignupPopup({ closePopup, openLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all required fields");
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        setMessage("Account created successfully!");

        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");

        // Optional:
        // Signup successful hone ke baad login popup open kar sakti ho
        setTimeout(() => {
          openLogin();
        }, 1000);

      } else {
        setMessage(data.message || "Signup failed");
      }

    } catch (error) {

      console.error("Signup error:", error);

      setMessage(
        "Unable to connect to server. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={closePopup}
        >
          ✖
        </button>

        <img
          src="/vajplogo.png"
          alt="logo"
          className="popup-logo"
        />

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="main-btn"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {message && (
          <p className="bottom-text">
            {message}
          </p>
        )}

        <p className="bottom-text">
          Already have an account?
          <span onClick={openLogin}>
            Sign In
          </span>
        </p>

      </div>

    </div>
  );
}

export default SignupPopup;