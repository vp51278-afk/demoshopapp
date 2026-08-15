import "./CategorySection2.css";
import { Link } from "react-router-dom";

function CategorySection2() {

  const categories = [
    {
      id: 1,
      name: "Kitchen Essentials",
      img: "/c1.jpeg",
      path: "/home-kitchen/kitchen-essentials",
    },
    {
      id: 2,
      name: "Kitchen Appliances",
      img: "/download (29).jpeg",
      path: "/home-kitchen/kitchen-appliances",
    },
    {
      id: 3,
      name: "Dining & Serveware",
      img: "/c2.jpeg",
      path: "/home-kitchen/dining",
    },
    {
      id: 4,
      name: "Home Decor",
      img: "/c3.jpeg",
      path: "/home-kitchen/home-decor",
    },
    {
      id: 5,
      name: "Bedroom Essentials",
      img: "/c3.jpeg",
      path: "/home-kitchen/bedroom-essentials",
    },
    {
      id: 6,
      name: "Storage & Organization",
      img: "/c4.jpeg",
      path: "/home-kitchen/storage-organization",
    },
    {
      id: 7,
      name: "Cleaning Supplies",
      img: "/download (30).jpeg",
      path: "/home-kitchen/cleaning-supplies",
    },

    {
      id: 8,
      name: "Garden & Outdoor",
      img: "/décoration extérieure.jpeg",
      path: "/home-kitchen/garden-outdoor",
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
                <img src={item.img} alt={item.name} />
              </div>

              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySection2;