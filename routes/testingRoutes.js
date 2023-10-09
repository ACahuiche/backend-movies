const express = require("express");
const securityToken = require ('../middlewares/securityToken');
const router = express.Router();

const testingController = require("../controllers/testingController");

router.get("/jwt", securityToken.validate ,testingController.validateAuthToken);

module.exports = router;