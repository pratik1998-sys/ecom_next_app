import mongoose from "mongoose";

// Schema for Product
export const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  starRating: {
    type: Number,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});
