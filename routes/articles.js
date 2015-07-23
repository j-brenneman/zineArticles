var express = require('express');
var router = express.Router();
var db = require('./../lib/javascripts/database.js');


// Index Page
router.get('/', function(req, res, next) {
  db.articlesFind(function (err, data) {
    res.render('articles/index', {articles: data.reverse()});
  })
});
// Create New Article
router.get('/new', function (req, res, next) {
  res.render('articles/new');
});
// Collect User Info
router.post('/new', function (req, res, next) {
  db.articleInsert(req.body);
  res.redirect('/articles');
})


module.exports = router;
