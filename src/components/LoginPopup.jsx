import React from "react";
import "./Modal.css";

function LoginPopup({ closePopup, openSignup }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close-btn" onClick={closePopup}>
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
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="main-btn">
          Sign In
        </button>

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