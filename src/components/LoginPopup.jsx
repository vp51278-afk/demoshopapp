import React, { useState } from "react";
import "./Modal.css";

function LoginPopup({ closePopup, openSignup }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    // Check empty fields
    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        // Save JWT token
        localStorage.setItem("token", data.token);

        // Save user information
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        setMessage("Login successful!");

        console.log("Logged in user:", data.user);
        console.log("JWT Token:", data.token);

        // Close popup after successful login
        setTimeout(() => {
          closePopup();
        }, 700);

      } else {
        setMessage(data.message || "Invalid email or password");
      }

    } catch (error) {

      console.error("Login error:", error);

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

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="main-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {message && (
          <p className="bottom-text">
            {message}
          </p>
        )}

        <p className="or">OR</p>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="bottom-text">
          New Customer?
          <span onClick={openSignup}>
            Create your account
          </span>
        </p>

      </div>

    </div>
  );
}

export default LoginPopup;