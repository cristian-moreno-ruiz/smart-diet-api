const Recipe = require('../models/recipe');
const { tuneRecipe, printRecipe } = require('../helpers');

const list = async (req, res) => {
	const recipes = await Recipe.find();
	res.send(recipes);
};

const get = async (req, res) => {
	try {
		const { id } = req.params;
		let recipe = await Recipe.findById(id).lean().exec();
		if (!recipe) {
			return res.status(404).json('Recipe not found');
		}
		if (req.query) {
			recipe = tuneRecipe(recipe, req.query);
		}
		if (req.path.search('/print/') !== -1) {
			return res.json(printRecipe(recipe));
		}
		return res.json(recipe);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const create = async (req, res) => {
	try {
		const { body } = req;
		const recipe = new Recipe(body);
		await recipe.save();
		res.send('Recipe saved successfully');
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

module.exports = {
	list,
	get,
	create,
};
