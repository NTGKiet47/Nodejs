const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "Add username"],
    },
    email: {
      type: String,
      require: [true, "Add email address"],
      unique: [true, "Email address is used for another account"],
    },
    password: {
      type: String,
      require: [true, "Add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
