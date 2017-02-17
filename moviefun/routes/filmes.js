var express = require('express');
var router = express.Router();
var request = require('request');

/* GET Em cartaz. */
router.get('/emcartaz', function(req, res, next) {
  request('http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page=1', 
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('filmes', {
        filmes: JSON.parse(body).results
      });
    }
  }
)});

/* GET Top. */
router.get('/top', function(req, res, next) {
  request('http://api.themoviedb.org/3/movie/top_rated?api_key=246bf886104d519a1d2bf62aef1054ff&page=1', 
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('filmes', {
        filmes: JSON.parse(body).results
      });
    }
  }
)});

/* GET Aguardados. */
router.get('/aguardados', function(req, res, next) {
  request('http://api.themoviedb.org/3/movie/upcoming?api_key=246bf886104d519a1d2bf62aef1054ff&page=1', 
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('filmes', {
        filmes: JSON.parse(body).results
      });
    }
  }
)});

/* GET ID. */
router.get('/:id', function(req, res, next) { 
  request('http://api.themoviedb.org/3/movie/'+ req.params.id +'?api_key=246bf886104d519a1d2bf62aef1054ff', 
  function(error, response, body) {
    var results  = [
        JSON.parse(body)
    ];
    if (!error && response.statusCode == 200) {
      res.render('filmes', {
        filmes: results
      });
    }
  }
)});

module.exports = router;
