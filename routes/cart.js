"use strict";

const express = require("express");
const cartRouter = express.Router();
const pg = require("pg");
const pool = require("../pg-connection-pool");

// GET
cartRouter.get("/cart-items", (req, res) => {
  console.log("GET CART");
  pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
    res.send(result.rows);
  });
});
// POST
cartRouter.post("/cart-items", (req, res) => {
  console.log("POST CART");
  console.log(req.body)
  pool.query("INSERT INTO shoppingcart (product, price, quantity) VALUES ($1::text, $2::smallint, $3::smallint)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});
// DELETE
cartRouter.delete("/cart-items/:id", (req, res) => {
  pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id]).then(() => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});
// PUT
cartRouter.put("/cart-items/:id", (req, res) => {
  console.log("PUT CART");
  pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::smallint, quantity=$3::smallint WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});


module.exports = cartRouter;