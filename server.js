"use strict";

const express = require("express");

const cartItems = require("./routes/cart");

const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/portal", cartItems);

app.use(express.static(__dirname + "/public"));

let port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});