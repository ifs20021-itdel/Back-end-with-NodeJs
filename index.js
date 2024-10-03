const express = require('express');
const mongoose = require("mongoose");
const Product = require('./models/product.models');
const productRoute = require('./routes/product.route');

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute)



app.get("/", (req, res) => {
  res.send("Hello Ini adlaah perjobaan project Node Js");
});

//connectDb
mongoose
  .connect(
    "mongodb+srv://rolastapane:L62Sz7bHC2SIaKkD@backendmongo.r4m3o.mongodb.net/?retryWrites=true&w=majority&appName=BackendMongo"
  )
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => console.log("http://localhost:3000"));
  })
  .catch((err) => {
    console.log(err);
  });





