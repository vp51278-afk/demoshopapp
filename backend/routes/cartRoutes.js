const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Cart = require("../models/Cart");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");


// ======================================================
// GET CART
// ======================================================

router.get("/", authMiddleware, async (req, res) => {
  try {

    let cart = await Cart.findOne({
      userId: req.userId,
    }).populate("items.productId");

    // Create empty cart if cart doesn't exist
    if (!cart) {
      cart = await Cart.create({
        userId: req.userId,
        items: [],
      });
    }

    res.status(200).json(cart);

  } catch (error) {

    console.error("Get cart error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});


// ======================================================
// ADD PRODUCT TO CART
// ======================================================

router.post("/add", authMiddleware, async (req, res) => {
  try {

    const { productId, quantity = 1 } = req.body;

    // Product ID required
    if (!productId) {
      return res.status(400).json({
        message: "Product ID is required",
      });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    // Validate quantity
    const parsedQuantity = Number(quantity);

    if (
      !Number.isInteger(parsedQuantity) ||
      parsedQuantity <= 0
    ) {
      return res.status(400).json({
        message: "Quantity must be a positive number",
      });
    }

    // Check product exists
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Find user's cart
    let cart = await Cart.findOne({
      userId: req.userId,
    });

    // Create cart if not found
    if (!cart) {
      cart = new Cart({
        userId: req.userId,
        items: [],
      });
    }

    // Check existing product
    const existingItem = cart.items.find(
      (item) =>
        item.productId.toString() === productId
    );

    if (existingItem) {

      // Increase quantity
      existingItem.quantity += parsedQuantity;

    } else {

      // Add new product
      cart.items.push({
        productId: productId,
        quantity: parsedQuantity,
      });

    }

    await cart.save();

    // Populate product details
    await cart.populate("items.productId");

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });

  } catch (error) {

    console.error("Add to cart error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});




router.put("/update", authMiddleware, async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    // Required fields
    if (!productId || quantity === undefined) {
      return res.status(400).json({
        message: "Product ID and quantity are required",
      });
    }

    // Validate product ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    // Validate quantity
    const parsedQuantity = Number(quantity);

    if (!Number.isInteger(parsedQuantity)) {
      return res.status(400).json({
        message: "Quantity must be a valid number",
      });
    }

    // Find cart
    const cart = await Cart.findOne({
      userId: req.userId,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    // Find item
    const item = cart.items.find(
      (item) =>
        item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    // Remove if quantity <= 0
    if (parsedQuantity <= 0) {

      cart.items = cart.items.filter(
        (item) =>
          item.productId.toString() !== productId
      );

    } else {

      item.quantity = parsedQuantity;

    }

    await cart.save();

    await cart.populate("items.productId");

    res.status(200).json({
      message: "Cart updated successfully",
      cart,
    });

  } catch (error) {

    console.error("Update cart error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});


router.delete(
  "/remove/:productId",
  authMiddleware,
  async (req, res) => {

    try {

      const { productId } = req.params;

      // Validate product ID
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
          message: "Invalid product ID",
        });
      }

      // Find cart
      const cart = await Cart.findOne({
        userId: req.userId,
      });

      if (!cart) {
        return res.status(404).json({
          message: "Cart not found",
        });
      }

      // Remove product
      cart.items = cart.items.filter(
        (item) =>
          item.productId.toString() !== productId
      );

      await cart.save();

      await cart.populate("items.productId");

      res.status(200).json({
        message: "Product removed from cart",
        cart,
      });

    } catch (error) {

      console.error("Remove cart item error:", error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);


router.delete(
  "/clear",
  authMiddleware,
  async (req, res) => {

    try {

      const cart = await Cart.findOne({
        userId: req.userId,
      });

      if (!cart) {
        return res.status(200).json({
          message: "Cart already empty",
          cart: {
            userId: req.userId,
            items: [],
          },
        });
      }

      cart.items = [];

      await cart.save();

      res.status(200).json({
        message: "Cart cleared successfully",
        cart,
      });

    } catch (error) {

      console.error("Clear cart error:", error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);


module.exports = router;