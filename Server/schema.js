import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

const productSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  image:       { type: String },
  category:    { type: String },
  price:       { type: Number, required: true },
  stock:       { type: Number, default: 0 }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);

const ordersSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId:    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  productName:  { type: String },
  quantity:     { type: Number, required: true },
  size:         { type: String },
  orderDate:    { type: Date, default: Date.now },
  orderStatus:  { type: String, default: "Order Placed" }
}, { timestamps: true });

export const Orders = mongoose.model("Orders", ordersSchema);

const cartSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId:    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  productName:  { type: String },
  quantity:     { type: Number, required: true },
  size:         { type: String },
  addedDate:    { type: Date, default: Date.now }
}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);

const adminSchema = new mongoose.Schema({
  categories:          { type: [String], default: [] },
  promotedRestaurants: { type: [String], default: [] }
}, { timestamps: true });

export const Admin = mongoose.model("Admin", adminSchema);

const restaurantSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  address:  { type: String },
  mainImg:  { type: String },
  ownerId:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  menu:     { type: [String], default: [] }
}, { timestamps: true });

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
