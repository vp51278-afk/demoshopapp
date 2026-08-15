import "./CategorySection4.css";
import { Link } from "react-router-dom";

function CategorySection4() {
    const categories = [
        {
          id: 1,
          name: "T-Shirts",
          img: "/c111.jpeg",
          path: "/beauty/t-shirts",
        },
        {
          id: 2,
          name: "Shirts",
          img: "/c112.jpeg",
          path: "/beauty/shirts",
        },
        {
          id: 3,
          name: "Jeans",
          img: "/bagg jeans in just 499🤯.jpeg",
          path: "/beauty/jeans2",
        },
        {
          id: 4,
          name: "Trousers",
          img: "/ck1.jpeg",
          path: "/beauty/trousers",
        },
        {
          id: 5,
          name: "Hoodies",
          img: "/ck2.jpeg",
          path: "/beauty/hoodies",
        },
        {
          id: 6,
          name: "Jackets",
          img: "/ck3.jpeg",
          path: "/beauty/jackets",
        },
        {
          id: 7,
          name: "Shoes",
          img: "/ck4.jpeg",
          path: "/beauty/shoes",
        },
        {
          id: 8,
          name: "Ethnic Wear",
          img: "/download (47).jpeg",
          path: "/beauty/ethnic-wear",
        },
        {
          id: 9,
          name: "Watches & Accessories",
          img: "/ck5.jpeg",
          path: "/beauty/watches-accessories",
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

export default CategorySection4;