const express = require('express');

const food = require('./food');
const patient = require('./patients');
const recipe = require('./recipe');

// Routes
const routes = express.Router();

routes.get('/', (_req, res) => res.json('Server Running'));
routes.get('/test/:parameter', (req, res) => res.json(`TEST route works with parameter: ${req.params.parameter}`));

routes.get('/food/:name', food.get);
routes.post('/food/:name', food.post);

routes.get('/patients', patient.getAll);
routes.get('/patients/:id', patient.get);
routes.post('/patients/', patient.post);

routes.get('/recipes', recipe.list);
routes.get('/recipe/:id', recipe.get);
routes.get('/recipe/print/:id', recipe.get);
routes.post('/recipes/:_id', recipe.create);

module.exports = routes;
