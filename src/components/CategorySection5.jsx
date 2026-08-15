import "./CategorySection5.css";
import { Link } from "react-router-dom";

function CategorySection5() {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      img: "/Apple iPhone 14.jpeg",
      path: "/mobiles/smartphones",
    },
{
      id: 2,
      name: "Smart Watches",
      img: "/kk1.jpeg",
      path: "/mobiles/smartwatches",
    },
    {
      id: 3,
      name: "Earbuds",
      img: "/kk2.jpeg",
      path: "/mobiles/earbuds",
    },

    {
      id: 4,
      name: "Bluetooth Speakers & Headphones",
      img: "/kk3.jpeg",
      path: "/mobiles/bluetooth-speakers",
    },
    {
      id: 5,
      name: "Power Banks",
      img: "/kk3.jpeg",
      path: "/mobiles/powerbanks",
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
export default CategorySection5;