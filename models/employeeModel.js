const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  phone_no: { type: String, required: true },
});

const Emp = mongoose.model("Emp", empSchema);

module.exports = Emp;
