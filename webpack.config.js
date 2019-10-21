const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function isWebpackDevServer() {
	return process.argv[1] && !!/webpack-dev-server/.exec(process.argv[1]);
}

function root() {
	const args = Array.prototype.slice.call(arguments, 0);
	return path.resolve.apply(path, [path.resolve(__dirname)].concat(args));
}

module.exports = {
	entry: ['./src/index.tsx'],
	devtool: isWebpackDevServer() && '#cheap-module-source-map',
	output: {
		path: root('dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
					enforce: true,
					filename: '[name].js'
				}
			}
		}
	},
	devServer: {
		compress: true,
		clientLogLevel: 'warning',
		contentBase: './dist',
		host: 'localhost',
		port: 3001,
		hotOnly: true,
		open: true,
		overlay: true,
		stats: 'errors-only'
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'EOS',
			template: './src/index.html'
		})
	]
};
