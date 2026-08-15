import "./CategorySection8.css";
import { Link } from "react-router-dom";

function CategorySection8() {
  const categories = [
    {
      id: 1,
      name: "Contact Us",
      img: "/Contact Me.jpeg",
      path: "/customer-service/contact-us",
    },
    {
      id: 2,
      name: "Help Center",
      img: "/Help Center.jpeg",
      path: "/customer-service/help-center",
    },
    {
      id: 3,
      name: "Track Order",
      img: "/k1.jpeg",
      path: "/customer-service/track-order",
    },
    {
      id: 4,
      name: "Returns & Refunds",
      img: "/Returned.jpeg",
      path: "/customer-service/returns-refunds",
    },
    {
      id: 5,
      name: "Shipping Information",
      img: "/k2.jpeg",
      path: "/customer-service/shipping-information",
    },
    {
      id: 6,
      name: "Payment Options",
      img: "/k3.jpeg",
      path: "/customer-service/payment-options",
    },
    {
      id: 7,
      name: "Terms & Conditions",
      img: "/k4.jpeg",
      path: "/customer-service/terms-conditions",
    },
    {
      id: 8,
      name: "Privacy Policy",
      img: "/k5.jpeg",
      path: "/customer-service/privacy-policy",
    },
    {
      id: 9,
      name: "Feedback",
      img: "/k6.jpeg",
      path: "/customer-service/feedback",
    },
  ];

  return (
    <div className="categorySection">
      <div className="categoryContainer">
        {categories.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="categoryLink"
          >
            <div className="categoryCard">
              <div className="categoryImage">
                <img
                  src={item.img}
                  alt={item.name}
                />
              </div>

              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySection8;