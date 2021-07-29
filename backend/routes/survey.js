var express = require("express");
var router = express.Router();

var surveyController = require("../controllers/survey");

router.post("/survey", surveyController.create);

module.exports = router;