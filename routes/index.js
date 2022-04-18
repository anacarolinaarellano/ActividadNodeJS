var express = require('express');
var router = express.Router();
var connection = require("../script");

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM category LIMIT 10", function (err, rows) {
    if (err) {
      req.flash("error", err);
      res.render("index", { page_title: "Index", data: "" });
    } else {
      res.render("index", { page_title: "Index", data: rows });
    }
  });
});

module.exports = router;
