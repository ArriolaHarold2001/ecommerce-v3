const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const SQL_PORT = process.env.SQL_PORT;

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "ecommerce",
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

app.listen(SQL_PORT, () => {
  console.log(`Listening on SQL_PORT ${SQL_PORT}`);
});
