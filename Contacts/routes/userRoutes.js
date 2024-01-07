const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userCurrentInfo,
} = require("../controllers/userController");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/current", userCurrentInfo);

module.exports = router;
