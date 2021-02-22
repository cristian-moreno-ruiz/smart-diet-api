const mongoose = require('mongoose');
const { Macros, Units } = require('../helpers/enums');

const component = {
	name: String,
	quantity: Number,
	type: {
		type: String,
		enum: Object.values(Macros),
	},
	unit: {
		type: String,
		enum: Object.values(Units),
	},
};
// Schema
const recipeSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
	},
	composition: [component],
});

module.exports = mongoose.model('Recipe', recipeSchema);
