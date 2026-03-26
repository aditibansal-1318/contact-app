const router = require("express").Router();
const Contact = require("../models/Contact");

// CREATE
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  const saved = await contact.save();
  res.json(saved);
});

// READ
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// UPDATE ✅ (ADD THIS)
router.put("/:id", async (req, res) => {
  try {
    console.log("PUT /api/contacts/" + req.params.id, req.body);
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;