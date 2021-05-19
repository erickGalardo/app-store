var express = require("express");
const productCtrl = require("../controllers/product.ctrl");
var router = express.Router();

router.get("/product", productCtrl.findAll);
router.get("/product/:code", productCtrl.findCode);
router.post("/product", productCtrl.insertProduct);

module.exports = router;