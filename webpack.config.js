const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function root() {
	const args = Array.prototype.slice.call(arguments, 0);
	return path.resolve.apply(path, [path.resolve(__dirname)].concat(args));
}

module.exports = (env = {}) => ({
	entry: ['react-hot-loader/patch', './src/index.tsx'],
	devtool: env.WEBPACK_SERVE ? 'cheap-module-source-map' : false,
	output: {
		path: root('dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
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
		static: './dist',
		host: 'localhost',
		port: 3001,
		hot: 'only',
		open: true,
		client: {
			logging: 'warn',
			overlay: true
		},
		devMiddleware: {
			stats: 'errors-only'
		}
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: root('babel.config.js')
						}
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
});
