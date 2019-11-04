const mongoose = require('mongoose');

// Schema
const patientSchema = new mongoose.Schema({
	id: String,
	name: String,
	surnames: String,
	birthDate: Date,
	gender: String, // Male/Female
	
});

module.exports = mongoose.model('Patient', patientSchema);