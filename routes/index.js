
const express = require('express');

const food = require('./food');
const patient = require('./patients');


// Routes
const routes = express.Router();

routes.get('/food/:name', food.get);
routes.post('/food/:name', food.post);

routes.get('/patients', patient.getAll);
routes.get('/patients/:id', patient.get);
routes.post('/patients/', patient.post);

module.exports = routes;