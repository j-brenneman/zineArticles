var express = require('express');
var router = express.Router();
var db = require('./../lib/javascripts/database.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index');

});

module.exports = router;
