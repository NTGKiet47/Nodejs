const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// get all contacts
// route GET /contact/getAll
// access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
// create contacts
// route POST /contact/
// access public
const createContact = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  if (!userName || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    userName,
    email,
  });
  res.status(201).json({
    message: `Create contact successfully`,
  });
});
// get 1 contact
// route GET /contact/:id
// access public
const getContact_with_id = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (contact === null) {
    res.status(404);
    throw new Error("Could not find the contact");
  }
  res.status(200).json(contact);
});
// update contacts
// route PUT /contact/:id
// access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (contact === null) {
    res.status(404);
    throw new Error("Could not find the contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedContact);
});
// delete contacts
// route DELETE /contact/:id
// access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Could not find the contact");
  }

  await Contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact_with_id,
  updateContact,
  deleteContact,
};
