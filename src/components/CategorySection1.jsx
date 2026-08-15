import "./CategorySection1.css";

function CategorySection() {

  const categories = [
    {
      id: 1,
      name: "Kurti",
      img: "/college & office look.jpeg",
    },
    {
      id: 2,
      name: "Saree",
      img: "/Elegant wedding sarii✨✨.jpeg",
    },
    {
      id: 3,
      name: "Lehenga",
      img: "/beautiful lahgn design.jpeg",
    },
    {
      id: 4,
      name: "Western",
      img: "/HKV Girl's & Women's Solid A-Line Ruched Puff Sleeve Maxi Long Evening One Piece Long Dress for Women Stylish.jpeg",
    },
    {
      id: 5,
      name: "Tops",
      img: "/SHEIN MOD Women's Chic Pale Yellow Summer Top,Elegant Tie-Up Asymmetric Hem Shirt For Brunch,Retro Vintage Cottagecore Outfits,Office Wear,Vacation Summer _ SHEIN.jpeg",
    },
    {
      id: 6,
      name: "Jeans",
      img: "/Cool Summer Outfit.jpeg",
    },
    {
      id: 7,
      name: "Co-ord Set",
      img: "/🫶🏻.jpeg",
    },
    {
      id: 8,
      name: "Footwear",
      img: "/Black high heels.jpeg",
    },
  ];

  return (
    <div className="categorySection">

      <div className="categoryContainer">

        {categories.map((item) => (
          <div className="categoryCard" key={item.id}>

            <div className="categoryImage">
              <img src={item.img} alt={item.name} />
            </div>

            <p>{item.name}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CategorySection;