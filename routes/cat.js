var _ = require('lodash')
var Cat = require('../models/cat.js');

module.exports = function(app) {

	app.post('/cat', function (req, res) {
		var newCat = new Cat(req.body);
		newCat.save(function(err){
			if (err) {
				res.json({info: 'error during cat creation', error: err});
			}
		});
		res.json({info: 'Cat created successfully'});
	});

	app.get('/cat', function(req, res) {
		Cat.find(function(err, cats){
			if (err) {
				res.json({info: 'error during finding cats', error: err});
			}
			res.json({info: 'cats found', data: cats})
		});
	});

	app.put('/cat', function (req, res) {
	  res.send('PUT request');
	});

	app.delete('/cat', function (req, res) {
	  res.send('DELETE request');
	});
}