var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'HELLO',view:'new umbre' });
});
router.get('/tab/:number', function(req, res, next) {
  var number=req.params.number;
  var name='哈哈哈哈'+number;
  res.render('tab', { title: 'HELLO',view:'new umbre' ,name:name});
});
module.exports = router;
