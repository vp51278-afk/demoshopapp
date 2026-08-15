import "./CategorySection3.css";
import { Link } from "react-router-dom";

function CategorySection3() {

  const categories = [
    {
      id: 1,
      name: "Makeup",
      img: "/c11.jpeg",
      path: "/fashion/makeup",
    },
    {
      id: 2,
      name: "Jewellery",
      img: "/c12.jpeg",
      path: "/fashion/jewellery",
    },
    {
      id: 3,
      name: "Accessories",
      img: "/fdsy.jpeg",
      path: "/fashion/accessories",
    },
    {
      id: 4,
      name: "Skin and Hair care",
      img: "/gdsa.jpeg",
      path: "/fashion/skincare",
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

export default CategorySection3;