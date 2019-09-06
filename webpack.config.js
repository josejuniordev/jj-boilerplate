const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: './src/home/index.js',
        contact: './src/contact/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Página Inicial',
            hash: true,
            cache: true,
            filename: 'index.html',
            template: 'src/templates/home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'Fale conosco',
            hash: true,
            cache: true,
            template: 'src/templates/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        })
    ]
};
