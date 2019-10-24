/* eslint-disable */
module.exports = {
	plugins: ['macros', 'react-hot-loader/babel'],
	presets: [
		['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
		'@babel/preset-typescript',
		['@babel/preset-react', { development: true }],
		'@lingui/babel-preset-react'
	],
	env: {
		development: {
			plugins: ['babel-plugin-styled-components']
		},
		production: {
			presets: ['@babel/preset-react', { development: false }]
		}
	}
};
