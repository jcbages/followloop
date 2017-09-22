var express = require('express');
var router = express.Router();

var github = new require('github')({});

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI;

/* GET followers. */
router.get('/followers/:user', function(req, res, next) {
	// authenticate github
	github.authenticate({
    type: 'basic',
    username: process.env.G_USR,
    password: process.env.G_PWD
	});

	// get api call
	github.users.getFollowingForUser({
		username: req.params.user
	}, function (err, data) {
		if (err) return next(err);
		res.json(data);
	});
});

/* POST history. */
router.post('/history', function(req, res, next) {
	MongoClient.connect(url, function(err, db) {
		if (err) return next(err);
		db.collection('history').insertOne(req.body, function(err, data) {
			if (err) return next(err);
			db.close();
			res.json({});
  	});
	});
});

module.exports = router;
