const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("server");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
