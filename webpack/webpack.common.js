const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const production = process.env.NODE_ENV === 'production';

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.jsx'), 
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: production
			? 'static/scripts/[name].[contenthash].js'
			: 'static/scripts/[name].js',
			publicPath: process.env.PUBLIC_PATH || '/',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/, 
				use: [
					{
						loader: 'ts-loader',
					},
				], 
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /css$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]',
								auto: /\.module\.\w+$/i,
							},
							importLoaders: 2,
						},
					},
					'postcss-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: production
				? 'static/styles/[name].[contenthash].css'
				: 'static/styles/[name].css',
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development',
		}),
		new webpack.DefinePlugin({
      'process.env.CAT_API_URL': JSON.stringify(process.env.CAT_API_URL || ''),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
      'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH || '/'),
    }),
	],
};
