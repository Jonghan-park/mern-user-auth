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

//Require Model
const Users = require("./models/userSchema");

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Registration
app.post("/register", async (req, res) => {
  try {
    //Get body or data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });

    // Save Method is used to create user
    const created = await createUser.save();
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
