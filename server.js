const express = require("express");
const path = require("path");
const mysql = require("mysql");
const axios = require("axios");
require("dotenv").config();

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "ecommerce",
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
