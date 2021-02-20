import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: String,
  price: Number,
  created_date: { type: Date, default: Date.now }
});
