if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const express = require("express");
const app = express();

const products = require('./routes/products');
const { mongoose } = require('./db/connection');

// myblog.save()
// myblog.greet();
// product.greet();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.json()); // parse json data
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// const products = [
//   { id: uuidv4(), name: "latop" },
//   { id: uuidv4(), name: "mobile" },
// ];

app.use('/products', products)



app.listen(3000, () => {
  console.log("App started on port 3000");
});

// GET /products get all products
// POST /products create new products
// PATCH /products/:id update product
// GET /products/:id get single product
// Delete /products/:id delete single product
