var express = require('express');
var router = express.Router();
var db = require('./../lib/javascripts/database.js');
var validations = require('./../lib/javascripts/validations.js')

// Index Page
router.get('/', function(req, res, next) {
  db.articlesFind(function (err, data) {
    res.render('articles/index', {articles: data.reverse()});
  })
});
// Create Page
router.get('/new', function (req, res, next) {
  res.render('articles/new');
});
// Create New Article
router.post('/new', function (req, res, next) {
  var errors = validations(req.body);
  if(errors === []) {
    db.articleInsert(req.body);
    res.redirect('/articles');
  } else {
    res.render('articles/new', {errors: errors});
  }
});
// Show Page
router.get('/:id', function (req, res, next) {
  db.articleFind(req.params.id, function (err, data) {
    res.render('articles/show', {article: data});
  })
});
// Edit Page
router.get('/:id/edit', function (req, res, next) {
  db.articleFind(req.params.id, function (err, data) {
    res.render('articles/edit', {article: data});
  })
});
// Update Article
router.post('/:id', function (req, res, next) {
  db.articleUpdate(req.params.id, req.body)
  res.redirect('/articles/' + req.params.id);
});
// Delete Article
router.post('/:id/delete', function (req, res, next) {
  db.articleDelete(req.params.id);
  res.redirect('/articles');
})

module.exports = router;
