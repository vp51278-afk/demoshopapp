import "./CategorySection.css";
import { Link } from "react-router-dom";

function CategorySection() {

  const categories = [
    {
      id: 1,
      name: "Kurti",
      img: "/college & office look.jpeg",
      path: "/fashion/women/kurti",
    },
    {
      id: 2,
      name: "Saree",
      img: "/Elegant wedding sarii✨✨.jpeg",
      path: "/fashion/women/saree",
    },
    {
      id: 3,
      name: "Lehenga",
      img: "/beautiful lahgn design.jpeg",
      path: "/fashion/women/lehenga",
    },
    {
      id: 4,
      name: "Western",
      img: "/SHA.jpeg",
      path: "/fashion/women/western",
    },
    {
      id: 5,
      name: "Tops",
      img: "/GG.jpeg",
      path: "/fashion/women/tops",
    },
    {
      id: 6,
      name: "Jeans",
      img: "/Cool Summer Outfit.jpeg",
      path: "/fashion/women/jeans",
    },
    {
      id: 7,
      name: "Coord Set",
      img: "/pk15.jpeg",
      path: "/fashion/women/coord",
    },
    {
      id: 8,
      name: "Footwear",
      img: "/Black high heels.jpeg",
      path: "/fashion/women/footwear",
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

export default CategorySection;