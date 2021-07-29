var express = require("express");
var router = express.Router();

var saleController = require("../controllers/sale");

router.post("/sale/:customer", saleController.create);

module.exports = router;