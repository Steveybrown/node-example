var _ = require('lodash')
var Dog = require('../models/dog.js');

module.exports = function(app) {

	app.post('/dog', function (req, res) {
		var newDog = new Dog(req.body);
		newDog.save(function(err){
			if (err) {
				res.json({info: 'error during cat create', error: err});
			}
		});
		res.json({info: 'dog created successfully'});
	});

	app.get('/dog', function(req, res) {
		Dog.find(function(err, cats){
			if (err) {
				res.json({info: 'error during finding cats', error: err});
			}
			res.json({info: 'dogs found', data: cats})
		});
	});

	app.put('/dog', function (req, res) {
	  res.send('PUT request');
	});

	app.delete('/dog', function (req, res) {
	  res.send('DELETE request');
	});
}