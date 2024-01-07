const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connect_db = require("./config/dbConnection");

connect_db();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

app.use("/", router);
app.use(errorHandler);
