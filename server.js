const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const SQL_PORT = process.env.SQL_PORT;

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
