const express = require("express");
const newsrouter = require("../controller/newscontoller")
const router = express.Router();

router.route("/news/new").post(newsrouter.addnews)
// router.route("/news/get").get(newsrouter.getnews)
router.route("/news/getbytitle").get(newsrouter.getbytitle)
router.route("/news/getbyid").get(newsrouter.getbyid)
router.route("/news/get",newsrouter.searchNews)

module.exports = router;