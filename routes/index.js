var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/actions_sociales', function(req, res, next) {
  res.render('actions_sociales');
});

router.get('/activites_edu_cultu', function(req, res, next) {
  res.render('activites_edu_cultu');
});

router.get('/actualite', function(req, res, next) {
  res.render('actualite');
});

router.get('/apropos', function(req, res, next) {
  res.render('apropos');
});

router.get('/don', function(req, res, next) {
  res.render('don');
});

router.get('/rejoignez', function(req, res, next) {
  res.render('rejoignez');
}); 

module.exports = router;
