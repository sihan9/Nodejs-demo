var express = require('express');
var router = express.Router();

var items = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { items: items });
});
router.post('/',function(req,res){
  if(req.body.item !== '') items.push(req.body.item);
  res.render('index', { items: items });
});
module.exports = router;
