require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Sample Product",
    description: "This is a sample product.",
    price: 999,
    oldPrice: 1499,
    image: "https://via.placeholder.com/300",
    category: "Demo",
    stock: 10,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products added successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

seedProducts();