require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;



app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://demoshopapp-rosy.vercel.app",
    ],

    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true,
  })
);




app.use(express.json());


// SERVE PRODUCT IMAGES


// Images stored inside backend/uploads
// will be accessible through:
// http://localhost:5000/uploads/filename.jpg

app.use(
  "/uploads",
  express.static("uploads")
);




app.get("/", (req, res) => {
  res.json({
    message: "VAJP Mart Backend is running!",
  });
});


const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/cart",
  cartRoutes
);




mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log("================================");
    console.log("MongoDB connected successfully");
    console.log("================================");



    app.listen(PORT, () => {

      console.log(
        `Server running on port ${PORT}`
      );

      console.log(
        `Products API: http://localhost:${PORT}/api/products`
      );

      console.log(
        `Users API: http://localhost:${PORT}/api/users`
      );

      console.log(
        `Signup API: http://localhost:${PORT}/api/users/signup`
      );

      console.log(
        `Login API: http://localhost:${PORT}/api/users/login`
      );

      console.log(
        `Cart API: http://localhost:${PORT}/api/cart`
      );

      console.log(
        `Uploads: http://localhost:${PORT}/uploads`
      );

    });

  })

  .catch((error) => {

    console.error(
      "MongoDB connection failed:",
      error.message
    );

  });

