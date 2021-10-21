const express = require("express");
const router = express.Router();
const { getProducts } = require("../controller/productControllers");

router.get("/", getProducts);

module.exports = router;
