/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const json = require('../package.json');

module.exports = {
    entry: {
        index: { import: './src/index.ts' },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src'),
            '@api': path.resolve(__dirname, '..', 'src', 'api'),
            '@environment': path.resolve(__dirname, '..', 'src', 'environment')
        },
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!index*'],
        })
    ],
    externals: [...Object.keys(json.dependencies)],
};
