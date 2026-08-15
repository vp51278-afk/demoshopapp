import "./CategorySection6.css";
import { Link } from "react-router-dom";

function CategorySection6() {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      img: "/fruits.jpeg",
      path: "/fresh/fruits",
    },
    {
      id: 2,
      name: "Vegetables",
      img: "/vegetables.jpeg",
      path: "/fresh/vegetables",
    },
    {
      id: 3,
      name: "Dairy Products",
      img: "/da1.jpeg",
      path: "/fresh/dairy-products",
    },
    {
      id: 4,
      name: "Bakery",
      img: "/da2.jpeg",
      path: "/fresh/bakery",
    },
    {
      id: 5,
      name: "Chips & Snacks",
      img: "/chips.jpeg",
      path: "/fresh/chips-snacks",
    },
    {
      id: 6,
      name: "Cold Drinks & Juices",
      img: "/cold.jpeg",
      path: "/fresh/cold-drinks",
    },
    {
      id: 7,
      name: "Household Essentials",
      img: "/household.jpeg",
      path: "/fresh/household",
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

export default CategorySection6;