const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});


// Get products by category
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const products = await Product.find({
      category: category
    });

    res.json(products);

  } catch (error) {
    console.error("Category error:", error);

    res.status(500).json({
      message: "Failed to fetch category products",
      error: error.message,
    });
  }
});


module.exports = router;



router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const products = await Product.find({
      category: category,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch category products",
      error: error.message,
    });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
});

module.exports = router;