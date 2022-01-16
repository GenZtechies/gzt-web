module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,png,jpg,ico,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};