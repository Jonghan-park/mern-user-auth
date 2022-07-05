const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;

const app = express();

// Configure ENV file & Require Connection File
dotenv.config({ path: "./.env" });
require("./db/conn");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
