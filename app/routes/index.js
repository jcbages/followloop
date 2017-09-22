var express = require('express');
var router = express.Router();

var github = new require('github')({});

/* GET home page. */
router.get('/followers/:user', function(req, res, next) {
	github.users.getFollowingForUser({
    username: req.params.user
	}, (err, data) => {
  	res.json(data);
  });
});

module.exports = router;
