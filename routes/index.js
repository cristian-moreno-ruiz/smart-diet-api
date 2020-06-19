const express = require('express');

const food = require('./food');
const patient = require('./patients');
const recipe = require('./recipe');

// Routes
const routes = express.Router();

routes.get('/food/:name', food.get);
routes.post('/food/:name', food.post);

routes.get('/patients', patient.getAll);
routes.get('/patients/:id', patient.get);
routes.post('/patients/', patient.post);

routes.get('/recipes', recipe.list);
routes.get('/recipe/:id', recipe.get);
routes.get('/recipe/print/:id', recipe.get);
routes.post('/recipes', recipe.create);

module.exports = routes;
