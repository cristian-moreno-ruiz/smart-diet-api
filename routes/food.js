const Food = require('../models/food');

const get = (req, res) => {
	console.log(`Getting food ${req.params.name}`);
	res.send(`Getting food ${req.params.name}`);
};

const post = (req, res) => {
	console.log(req.body);
	const food = new Food(req.body);
	food.save();
	res.send(req.body);
};

module.exports = {
	get,
	post,
};
