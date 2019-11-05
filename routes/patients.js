const Patient = require('../models/patient');

const getAll = async (req, res) => {
	console.log('Getting all patients');
	const patients = await Patient.find({});
	//return res.send('hola');
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



const post = async (req, res) => {

	let response;
	if (!req.body.id) {
		return res.send('Id needed');
	} 
	let patient = await Patient.findOne({id: req.body.id});
	if (patient) {
		response = await Patient.findOneAndUpdate({ id: req.body.id }, req.body)
		return res.send(response.toObject());
	}
	patient = new Patient(req.body);
	response = patient.save();

	res.send(response.toObject());
}

module.exports = {
	get,
	post,
	getAll,
};