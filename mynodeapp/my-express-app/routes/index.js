var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',function(req,res,next){
  res.render('about', {title: 'Amoung us'});
});

router.get('/contact',function(req,res,next){
  res.render('contact', {title: 'My Contact'});
});
module.exports = router;
