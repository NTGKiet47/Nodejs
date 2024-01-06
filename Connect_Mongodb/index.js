const express = require("express");
const path = require("path");

const connectDB = require("./database");
connectDB();

const app = express();
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
