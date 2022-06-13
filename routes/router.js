const express = require("express");
const newsrouter = require("../controller/newscontoller")
const router = express.Router();

router.route("/news/new").post(newsrouter.addnews)

module.exports = router;