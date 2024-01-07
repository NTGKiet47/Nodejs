const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact_with_id,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/contact/getAll", getAllContacts);

router.post("/contact", createContact);

router.get("/contact/:id", getContact_with_id);

router.put("/contact/:id", updateContact);

router.delete("/contact/:id", deleteContact);

module.exports = router;
