const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginInfo = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    unique: true,
    required: true
  },
  userEmail: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("login", loginInfo);
