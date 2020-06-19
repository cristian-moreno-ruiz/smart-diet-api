const { Macros, Units } = require('./enums');
const { base } = require('../models/food');

const tuneRecipe = (recipe, exchange) => {
	const baseComposition = {};
	Object.keys(exchange).forEach(macro => {
		const component = {};
		baseComposition[macro.toUpperCase()] = recipe.composition.filter(c => c.type === macro.toUpperCase()).length;
		return component;
	});

	const tunedComponents = recipe.composition.map(comp => {
		if (!baseComposition[comp.type]) {
			return comp;
		}
		return {
			...comp,
			quantity: comp.quantity * +exchange[comp.type.toLowerCase()] / +baseComposition[comp.type],
		};
	});

	return {
		...recipe,
		composition: tunedComponents,
	};
};

const pluralize = word => {
	switch (word) {
	case Units.CUCHARADA:
	case Units.CUCHARADITA:
	case Units.TAZA:
		return `${word}s`;
	default:
		return word;
	}
};

const fraction = qty => {
	if (qty >= 1) {
		return qty;
	}

	const gcd = function (a, b) {
		if (b < 0.0000001) return a; // Since there is a limited precision we need to limit the value.

		return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
	};

	const len = qty.toString().length - 2;

	let denominator = Math.pow(10, len);
	let numerator = qty * denominator;

	const divisor = gcd(numerator, denominator); // Should be 5

	numerator /= divisor; // Should be 687
	denominator /= divisor; // Should be 2000

	if (numerator === 1 && denominator === 2) {
		return `${numerator}/${denominator}`;
	}

	return `${numerator}/${denominator} de`;
};

const printRecipe = recipe => {
	const components = recipe.composition.reduce((text, comp) => `${text ? `${text}, ` : ''}${fraction(comp.quantity)} ${comp.quantity <= 1 ? comp.unit : pluralize(comp.unit)} de ${comp.name}`, '');
	const print = {
		Nombre: recipe.name,
		Preparacion: `${components}.`,
	};

	return print;
};

module.exports = {
	tuneRecipe,
	printRecipe,
	pluralize,
};
