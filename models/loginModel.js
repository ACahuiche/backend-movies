const dbconn = require("../config/mongodbconnection");
const { Schema } = dbconn;

const userInfo = new Schema({
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

module.exports = dbconn.model("user", userInfo);
