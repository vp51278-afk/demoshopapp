import "./CategorySection7.css";
import { Link } from "react-router-dom";

function CategorySection7() {


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

export default CategorySection7;