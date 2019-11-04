
const express = require('express');

const food = require('./food');
const patient = require('./patient');


// Routes
const routes = express.Router();

routes.get('/food/:name', food.get);
routes.post('/food/:name', food.post);

routes.get('/patient', patient.get);
routes.get('/patient/:id', patient.get);
routes.post('/patient/', patient.post);

module.exports = routes;