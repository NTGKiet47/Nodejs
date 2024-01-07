const mongoose = require("mongoose");
const connect_db = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRNG);
    console.log("Database connected successfully");
    console.log(
      "Database infomation:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect_db;
