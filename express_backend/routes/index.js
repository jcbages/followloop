var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/followers', function(req, res, next) {
  res.json({message: 'hola hola'});
});

module.exports = router;
