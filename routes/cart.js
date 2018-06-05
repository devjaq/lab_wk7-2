"use strict";

const express = require("express");
const cartRouter = express.Router();

const cart = [
  {
   product: "kale",
   price: "1",
   quantity: "5",
   id: 0
  },
  {
    product: "eggs",
    price: "2",
    quantity: "12",
    id: 1
   },
   {
     product: "chocolate",
     price: "5",
     quantity: "100",
     id: 2
    }
];

let idCount = 3;

cartRouter.get("/cart-items", (req, res) => {
  console.log("GET CART");
  res.send(cart);
});

cartRouter.post("/cart-items", (req, res) => {
  console.log("POST CART");
  cart.push({
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
    id: idCount ++
  })
  res.send(cart);
});

cartRouter.delete("/cart-items/:id", (req, res) => {
  console.log("DELETE CART");
  for (let item of cart) {
    if (item.id == req.params.id) {
      cart.splice(cart.indexOf(item) , 1)
    }
  } // end for loop
  res.send(cart);
});

cartRouter.put("/cart-items/:id", (req, res) => {
  console.log("PUT CART");
  for (let item of cart) {
    if (item.id == req.params.id) {
      cart.splice(cart.indexOf(item) , 1, {
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        id: item.id
      })
    }
  } // end for loop
  res.send(cart);
});


module.exports = cartRouter;