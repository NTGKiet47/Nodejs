require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.SERVER_MONGO_URI;

const connect_to_db = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("error while connecting to mongodb", error.message);
  }
};

module.exports = connect_to_db;
