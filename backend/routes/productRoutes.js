const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// ==========================================
// GET PRODUCTS
// Supports:
// /api/products
// /api/products?category=Fruits
// ==========================================

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let products;

    if (category) {
      products = await Product.find({
        category: {
          $regex: `^${category}$`,
          $options: "i",
        },
      });
    } else {
      products = await Product.find();
    }

    res.json(products);

  } catch (error) {
    console.error("Products error:", error);

    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});


// ==========================================
// GET PRODUCTS BY CATEGORY
// /api/products/category/Fruits
// ==========================================

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const products = await Product.find({
      category: {
        $regex: `^${category}$`,
        $options: "i",
      },
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


// ==========================================
// GET SINGLE PRODUCT
// /api/products/:id
// ==========================================

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);

  } catch (error) {
    console.error("Single product error:", error);

    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
});


module.exports = router;