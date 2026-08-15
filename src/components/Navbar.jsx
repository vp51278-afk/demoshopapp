import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Search Function
  const handleSearch = () => {

    const value = search.toLowerCase().trim();

    if (
      value.includes("mobile") ||
      value.includes("iphone") ||
      value.includes("phone") ||
      value.includes("samsung")
    ) {
      navigate("/mobiles");
    }

    else if (
      value.includes("fashion")
    ) {
      navigate("/fashion");
    }

    else if (
      value.includes("women")
    ) {
      navigate("/fashion/women");
    }

    else if (
      value.includes("makeup") ||
      value.includes("lipstick")
    ) {
      navigate("/fashion/makeup");
    }

    else if (
      value.includes("jewellery") ||
      value.includes("ring") ||
      value.includes("necklace")
    ) {
      navigate("/fashion/jewellery");
    }

    else if (
      value.includes("accessories") ||
      value.includes("bag")
    ) {
      navigate("/fashion/accessories");
    }

    else if (
      value.includes("skin") ||
      value.includes("hair")
    ) {
      navigate("/fashion/skincare");
    }

    else if (
      value.includes("beauty")
    ) {
      navigate("/beauty");
    }

    else if (
      value.includes("kitchen") ||
      value.includes("cookware")
    ) {
      navigate("/home-kitchen");
    }

    else if (
      value.includes("fresh") ||
      value.includes("fruit") ||
      value.includes("grocery")
    ) {
      navigate("/fresh");
    }

    else {
      alert("No matching category found.");
    }

  };

  return (
    <>
          {/* ================= HEADER ================= */}

          <header className="navbar">

{/* Logo */}
<Link to="/" className="logo-section">

  <img
    src="/vajplogo.png"
    id="logo"
    alt="VAJP Mart Logo"
  />

  <h2 className="brand">
    VAJP<span>Mart</span>
  </h2>

</Link>

{/* Delivery Location */}

<div className="location-box">

  <div className="location-icon">
    <i className="fa-solid fa-location-dot"></i>
  </div>

  <div className="location-info">

    <span className="small-text">
      Deliver to
    </span>

    <select>
      <option>Lucknow 226016</option>
      <option>Delhi 110001</option>
      <option>Mumbai 400001</option>
      <option>Kanpur 208001</option>
      <option>Gorakhpur 273001</option>
    </select>

  </div>

</div>

{/* Search Bar */}

<div className="search-bar">

  <select
    className="category"
    value={category}
    onChange={(e) => {

      const value = e.target.value;
      setCategory(value);

      if (value === "Women's Fashion") {
        navigate("/fashion/women");
      }

      else if (value === "Fashion") {
        navigate("/fashion");
      }

      else if (value === "Books") {
        navigate("/books");
      }

      else if (value === "Home & Kitchen") {
        navigate("/home-kitchen");
      }

      else if (value === "Beauty") {
        navigate("/beauty");
      }

      else {
        navigate("/");
      }

    }}
  >

    <option>All</option>
    <option>Women's Fashion</option>
    <option>Fashion</option>
    <option>Books</option>
    <option>Home & Kitchen</option>
    <option>Beauty</option>

  </select>

  <input
    type="text"
    placeholder="Search VAJP Mart"

    value={search}

    onChange={(e) => setSearch(e.target.value)}

    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
  />

  <button onClick={handleSearch}>
    <i className="fa-solid fa-magnifying-glass"></i>
  </button>

</div>

{/* Language */}

<div className="language">

  <img
    src="https://flagcdn.com/w40/in.png"
    alt="India"
  />

  <select className="language-select">

    <option>EN</option>
    <option>हिन्दी</option>
    <option>বাংলা</option>
    <option>தமிழ்</option>
    <option>తెలుగు</option>

  </select>

</div>

<div
  className="account"
  onClick={() => setShowLogin(true)}
>

  <div className="line1">
    Hello, Sign In
  </div>

  <div className="line2">
    Account & Lists
    <i className="fa-solid fa-caret-down"></i>
  </div>

</div>
            {/* Returns & Orders */}

            <Link to="/orders" className="returns">

<div className="line1">
  Returns
</div>

<div className="line2">
  & Orders
</div>

</Link>

{/* Cart */}

<Link to="/cart" className="cart">

<div className="cart-icon">

  <span className="cart-count">
    0
  </span>

  <i className="fa-solid fa-cart-shopping"></i>

</div>

<span className="cart-text">
  Cart
</span>

</Link>

</header>

{/* ================= MENU ================= */}

<nav className="menu">

<Link to="/">
<i className="fa-solid fa-bars"></i> All
</Link>

<Link to="/fresh">
Fresh
</Link>

<Link to="/mobiles">
Mobiles
</Link>

<Link to="/fashion/women">
Women's Fashion
</Link>

<Link to="/fashion">
Fashion
</Link>

<Link to="/home-kitchen">
Home & Kitchen
</Link>

<Link to="/beauty">
Beauty
</Link>

<Link to="/customer-service">
Customer Service
</Link>

</nav>
{/* Login Popup */}

{showLogin && (

<LoginPopup

  closePopup={() => setShowLogin(false)}

  openSignup={() => {

    setShowLogin(false);
    setShowSignup(true);

  }}

/>

)}

{/* Signup Popup */}

{showSignup && (

<SignupPopup

  closePopup={() => setShowSignup(false)}

  openLogin={() => {

    setShowSignup(false);
    setShowLogin(true);

  }}

/>

)}

</>
);
}

export default Navbar;