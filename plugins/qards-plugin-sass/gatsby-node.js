const resolve = require("./resolve");
const jsonImporter = require("node-sass-json-importer");

exports.onCreateWebpackConfig = (
	{ actions, stage, rules, plugins, loaders },
	{ postCssPlugins, ...sassOptions }
) => {
	const { setWebpackConfig } = actions;
	const PRODUCTION = stage !== `develop`;
	const isSSR = stage.includes(`html`);

	const sassLoader = {
		loader : resolve(`sass-loader`),
		options: {
			sourceMap: !PRODUCTION,
			importer : jsonImporter(),
			...sassOptions
		}
	};

	const sassRule = {
		test: /\.s(a|c)ss$/,
		use : isSSR
			? [loaders.null()]
			: [
				loaders.miniCssExtract(),
				loaders.css({ importLoaders: 2 }),
				loaders.postcss({ plugins: postCssPlugins }),
				sassLoader
			]
	};

	const sassRuleModules = {
		test: /\.module\.s(a|c)ss$/,
		use : [
			!isSSR && loaders.miniCssExtract(),
			loaders.css({ modules: true, importLoaders: 2 }),
			loaders.postcss({ plugins: postCssPlugins }),
			sassLoader
		].filter(Boolean)
	};

	let configRules = [];

	switch (stage) {
		case `develop`:
		case `build-javascript`:
		case `build-html`:
		case `develop-html`:
			configRules = configRules.concat([{
				oneOf: [sassRuleModules, sassRule]
			}]);
			break;
	}

	setWebpackConfig({
		module: {
			rules: configRules
		}
	});
};