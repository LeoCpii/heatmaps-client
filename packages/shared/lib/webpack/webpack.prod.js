const base = require('./webpack.base.js');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.EnvironmentPlugin({
            API_GLUE: 'url',
            DEBUG: false
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
    }
});
