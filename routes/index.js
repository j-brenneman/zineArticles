var express = require('express');
var router = express.Router();
var db = require('./../lib/javascripts/database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.articlesFind(function (err, data) {
    res.render('articles/index', {articles: data.reverse()});
  })
});

module.exports = router;
