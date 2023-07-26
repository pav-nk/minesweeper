const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash:4].js',
    clean: true,
  },
	module: {
    rules: [
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};
