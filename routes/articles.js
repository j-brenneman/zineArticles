var express = require('express');
var router = express.Router();
var db = require('./../lib/javascripts/database.js');


// Create New Article
router.get('/new', function (req, res, next) {
  res.render('articles/new');
});
// Collect User Info
router.post('/new', function (req, res, next) {
  db.articleInsert(req.body);
  res.redirect('/');
})


module.exports = router;
