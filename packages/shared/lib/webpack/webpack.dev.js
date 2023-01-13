const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            API_GLUE: 'url',
            DEBUG: true
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })]
    }
});
