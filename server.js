const express = require("express");
const path = require("path");
const cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


/*
    *Description;
    *Mapping routers
*/
const products = require('./app/routers/products.rte');

app.use("/",products);


app.listen(3000)