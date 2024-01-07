const asyncHandler = require("express-async-handler");

// get all contacts
// route GET /contact/getAll
// access public
const getAllContacts = asyncHandler(async (req, res) => {
  res.json({
    message: "Get all contacts",
  });
});
// get all contacts
// route POST /contact/
// access public
const createContact = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  if (!userName || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({
    message: `Create contact successfully`,
  });
});
// get 1 contact
// route GET /contact/:id
// access public
const getContact_with_id = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: `Get contact with ${req.params.id}`,
  });
});
// update contacts
// route PUT /contact/:id
// access public
const updateContact = asyncHandler(async (req, res) => {
  res.json({
    message: `Update contact for ${req.params.id}`,
  });
});
// delete contacts
// route DELETE /contact/:id
// access public
const deleteContact = asyncHandler(async (req, res) => {
  res.json({
    message: `Delete contact for ${req.params.id}`,
  });
});

module.exports = {
  getAllContacts,
  createContact,
  getContact_with_id,
  updateContact,
  deleteContact,
};
