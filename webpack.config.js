const path = require('path');

module.exports = (env, args) => {
	return {
		mode: args.mode,
		entry: [
			path.resolve(__dirname, 'src/index.tsx'),
		],
		target: 'web',
		output: {
			path: path.resolve(__dirname, 'build'),
			publicPath: '/',
			filename: 'app.js',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		},
		module: {
			rules: [
				{
					use: ['ts-loader'],
					test: /\.tsx?$/,
					exclude: /node_modules/
				}
			],
		},
		plugins: []
	};
}