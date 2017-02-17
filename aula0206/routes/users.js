var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('https://randomuser.me/api/?results=10', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('user', {
        results: JSON.parse(body).results
      });
    }
  }
)});

module.exports = router;
