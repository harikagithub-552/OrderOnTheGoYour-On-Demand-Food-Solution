import express from "express";

Import bodyParser fron "body-parser";

 Import mongoose from "mongoose";

Import cors from "cors";

Import bcrypt fron "bcrypt";

import { Admin, Cart, FoodItem, Orders, Restaurant, User } from "./Schema.js";

const app = express();

 app.use(express.json());

 app.use(bodyParser.json({limit: "30mb", extended: true }));

 app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));

 app.use(cors());

 const PORT = 6001;

mongoose

 .connect("mongodb://localhost:27017/foodDelivery", {

 useNewUrlParser: true,

 useUnifiedTopology: true,
})

