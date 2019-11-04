const Patient = require('../models/patient');

const getAll = async (req, res) => {
	console.log('Getting all patients');
	const patients = await Patient.find({});
	return res.send(patients);
};

const get = async (req, res) => {
	if (req.params.id) {
		console.log(`Getting patient ${req.params.id}`);
		const patients = await Patient.find({id: req.params.id});
		return res.send(patients);
	}
	console.log(`Id needed`);
	res.send(`Id needed`);
};



const post = (req, res) => {
	console.log(req.body);
	let patient = new Patient(req.body);
	patient.save();



	res.send(req.body);
}

module.exports = {
	get,
	post,
};