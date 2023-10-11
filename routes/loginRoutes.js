const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");

router.post("/", loginController.authLogin);

module.exports = router;
