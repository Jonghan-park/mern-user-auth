const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// Configure ENV file & Require Connection File
dotenv.config({ path: "./.env" });
require("./db/conn");
const port = process.env.PORT || 5000;

//Require Model
const Users = require("./models/userSchema");

// These method is used to get data and cookies from frondend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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

    // Save Method is used to create user or insert user
    // But before saving or inserting, password will hash
    // Because of hashing. After hash, it will save to DB
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login User
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    //Find User if exist
    const user = await Users.findOne({ email: email });
    if (user) {
      // Verify password
      const isMatch = await bcryptjs.compare(password, users.password);

      if (isMatch) {
        // Generate Token which is define in user Schema
        const token = await user.generateToken();
      }
    }
  } catch (error) {}
});

//Run server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
