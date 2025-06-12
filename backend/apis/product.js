import express from "express";
import mongoose from "mongoose";
import { ProductSchema } from "../schema/Product.js";

export const ProductRouter = express.Router();

const Product = mongoose.model("products", ProductSchema);

// 1. Add new product
ProductRouter.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    let result = await product.save();
    if (result) {
      res
        .status(201)
        .send({ message: "product added successfully", data: result });
    } else {
      res.status(400).send("product already exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 2. Get a product by ID
ProductRouter.get("/:productId", async (req, res) => {
  try {
    const result = await Product.find({ productId: req.params.productId });
    if (result) {
      res.status(200).send({ message: "fetched successfully", data: result });
    } else {
      res.status(404).send("product does not exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 3. Delete a product by ID
ProductRouter.delete("/:productId", async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({
      productId: req.params.productId,
    });
    if (result) {
      res
        .status(200)
        .send({ message: "product deleted successfully", data: result });
    } else {
      res.status(404).send("product does not exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 4. Get all products
ProductRouter.get("/", async (req, res) => {
  try {
    const result = await Product.find();
    // console.log(result);
    res
      .status(200)
      .send({ message: "products fetched successfully", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});

// 5. Update a product by ID
ProductRouter.put("/:productId", async (req, res) => {
  try {
    const result = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (result) {
      res
        .status(200)
        .send({ message: "product updated successfully", data: result });
    } else {
      res.status(404).send("product does not exist");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: err.message });
  }
});
