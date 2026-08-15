import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const banners = [
    "/vajp.png",
    "/WhatsApp Image 2026-07-10 at 5.27.59 PM.jpeg",
    "/WhatsApp Image 2026-07-10 at 5.28.00 PM.jpeg",
  ];
  
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };
  
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };
  return (
    <>
 {/* Hero Section */}
<section className="hero">

<button className="hero-btn left" onClick={prevSlide}>
  &#10094;
</button>

<img
  src={banners[current]}
  alt={`Banner ${current + 1}`}
  className="hero-banner"
/>

<button className="hero-btn right" onClick={nextSlide}>
  &#10095;
</button>

</section>

      {/* Shop By Category */}

      <section className="home-section">

        <h2>Shop by Category</h2>

        <div className="home-grid">

          <Link to="/mobiles" className="home-card">
            <img src="/iPhone 16 pro.jpeg" alt="Mobiles" />
            <p>Mobiles</p>
          </Link>

          <Link to="/fashion" className="home-card">
            <img src="/pk4.jpeg" alt="Fashion" />
            <p>Fashion</p>
          </Link>

          <Link to="/beauty" className="home-card">
            <img
              src="/men's outfit inspo🕶🪐.jpeg"
              alt="Beauty"
            />
            <p>Beauty</p>
          </Link>

          <Link to="/home-kitchen" className="home-card">
            <img
              src="/Bold Yellow & Grey Modern Kitchen Design 💛 Statement Home Decor Ideas.jpeg"
              alt="Home & Kitchen"
            />
            <p>Home & Kitchen</p>
          </Link>

        </div>

      </section>

      {/* Today's Deals */}

      <section className="home-section">

        <h2>Today's Deals</h2>

        <div className="deal-row">

          <div className="deal-card">
            <img src="/pk5.jpeg" alt="" />
            <span>Up to 35% OFF</span>
            <h3>iPhone 15 Pro</h3>

            <Link to="/mobiles" className="deal-btn">
              Shop Now
            </Link>
          </div>

          <div className="deal-card">
            <img src="/watch.jpeg" alt="" />
            <span>50% OFF</span>
            <h3>Smart Watches</h3>

            <Link to="/mobiles/smartwatches" className="deal-btn">
              Shop Now
            </Link>
          </div>

          <div className="deal-card">
            <img src="/pk6.jpeg" alt="" />
            <span>60% OFF</span>
            <h3>Wireless Earbuds</h3>

            <Link to="/mobiles/earbuds" className="deal-btn">
              Shop Now
            </Link>
          </div>

          <div className="deal-card">
            <img src="/pk8.jpeg" alt="" />
            <span>45% OFF</span>
            <h3>Bluetooth Speakers</h3>

            <Link
              to="/mobiles/bluetooth-speakers-headphones"
              className="deal-btn"
            >
              Shop Now
            </Link>
          </div>

        </div>

      </section>

      {/* Best Sellers */}

      <section className="home-section">

        <h2>Best Sellers</h2>

        <div className="home-grid">

          <Link to="/mobiles" className="home-card">
            <img src="/pk9.jpeg" alt="" />
            <p>Apple iPhone</p>
          </Link>

          <Link to="/mobiles/smartwatches" className="home-card">
            <img src="/pk7.jpeg" alt="" />
            <p>Smart Watches</p>
          </Link>

          <Link to="/fashion/makeup" className="home-card">
            <img
              src="/pk0.jpeg"
              alt=""
            />
            <p>Makeup</p>
          </Link>

          <Link to="/fashion/jewellery" className="home-card">
            <img
              src="/pk11.jpeg"
              alt=""
            />
            <p>Jewellery</p>
          </Link>

          <Link
            to="/home-kitchen/kitchen-essentials"
            className="home-card"
          >
            <img src="/pk12.jpeg" alt="" />
            <p>Cookware</p>
          </Link>

        </div>

      </section>

      {/* Recommended For You */}

      <section className="home-section">

        <h2>Recommended For You</h2>

        <div className="home-grid">

          <Link to="/fashion/accessories" className="home-card">
            <img src="/fdsy.jpeg" alt="" />
            <p>Accessories</p>
          </Link>

          <Link to="/fashion/skincare" className="home-card">
            <img src="/gdsa.jpeg" alt="" />
            <p>Skin & Hair Care</p>
          </Link>

          <Link to="/mobiles/earbuds" className="home-card">
            <img src="/fwe.jpeg" alt="" />
            <p>Wireless Earbuds</p>
          </Link>

          <Link to="/mobiles/powerbanks" className="home-card">
            <img src="/pk13.jpeg" alt="" />
            <p>Power Banks</p>
          </Link>

        </div>

      </section>

      {/* Back To Top */}

      <div
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Back to Top
      </div>

      {/* Footer */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <h3>Get to Know Us</h3>

            <Link to="/about">About Us</Link>

            <Link to="/contact-us">Contact Us</Link>

            <Link to="/customer-service/feedback">
              Feedback
            </Link>

          </div>

          <div>

            <h3>Customer Service</h3>

            <Link to="/customer-service">
              Help Center
            </Link>

            <Link to="/customer-service/track-order">
              Track Order
            </Link>

            <Link to="/customer-service/returns-refunds">
              Returns & Refunds
            </Link>

            <Link to="/customer-service/shipping-information">
              Shipping Information
            </Link>

          </div>

          <div>

            <h3>Policies</h3>

            <Link to="/customer-service/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/customer-service/terms-conditions">
              Terms & Conditions
            </Link>

            <Link to="/customer-service/payment-options">
              Payment Options
            </Link>

          </div>

          <div>

            <h3>Contact</h3>

            <p>📧 support@vajpmart.com</p>

            <p>📞 +91 9876543210</p>

            <p>📍 India</p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>© 2026 VAJP Mart. All Rights Reserved.</p>

        </div>

      </footer>
    </>
  );
}

export default Home;