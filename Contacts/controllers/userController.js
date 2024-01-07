const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register
// POST /user/register
const userRegister = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All field must be fill");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already used");
  }
  //   HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  console.log(newUser);
  if (newUser) {
    res.status(200).json({
      _id: newUser.id,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Could not create new user");
  }
});
// Login
// POST /user/login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Type in the infomation");
  }
  const checkUser = User.findOne({ email });
  if (checkUser && bcrypt.compare(password, checkUser.password)) {
    const accessToken = jwt.sign(
      {
        checkUser: {
          userName: checkUser.userName,
          email: checkUser.email,
          id: checkUser.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Wrong login infomation");
  }
});
// Current infomation
// GET /user/current
// access private
const userCurrentInfo = asyncHandler(async (req, res) => {
  res.json({
    message: "Current user",
  });
});

module.exports = {
  userRegister,
  userLogin,
  userCurrentInfo,
};
