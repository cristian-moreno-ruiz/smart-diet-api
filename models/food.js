const mongoose = require('mongoose');

// Schema
const foodSchema = new mongoose.Schema({
	name: String,
	description: String,
	
});

module.exports = mongoose.model('Food', foodSchema);