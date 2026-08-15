import React from "react";
import "./Modal.css";

function SignupPopup({ closePopup, openLogin }) {
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
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button className="main-btn">
          Create Account
        </button>

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