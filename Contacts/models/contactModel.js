const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "Contact name cannot be empty"],
    },
    email: {
      type: String,
      require: [true, "Email name cannot be empty"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);
