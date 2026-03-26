const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  fav: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Contact", contactSchema);