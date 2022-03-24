const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const SQL_PORT = process.env.SQL_PORT;

const db = mysql.createConnection({
  host: "3.145.142.113",
  user: "root",
  password: "password",
  database: "ecommerce",
  // port: "8000",
  port: "3306",
  // port: "8889",
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("DataBase Connection Success");
});

// app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});

app.get("/api/featured-products", (req, res) => {
  db.query(
    "SELECT * FROM products INNER JOIN featured_products ON products.id = featured_products.product_id",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result);
    }
  );
});

app.get("/api/slider", (req, res) => {
  db.query("SELECT * FROM slider", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
});

app.get("/api/drop-filter", (req, res) => {
  db.query("SELECT * FROM drop_filter", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on SQL_PORT ${SQL_PORT}`);
});
