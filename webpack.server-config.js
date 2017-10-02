const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'SSR',
    target: 'node',
    entry: {
        //testServerBundle: './test_server/server.js',
        serverBundle: './server/index.js',
    },
    context: `${__dirname}/`,
    output: {
        path: `${__dirname}/static/server`,
        filename: '[name].js',
        publicPath: '/static/server/',
        library: '[name]',
    },

    externals: nodeExternals(),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1',
                //include: [`${__dirname}/static_src`, `${__dirname}/server`]
            },
            {
                test: /\.(css|scss)$/,
                loader: 'ignore-loader',
                include: [`${__dirname}/static_src`, `${__dirname}/server`]
            },
        ],
    },

    resolve: {
        modules: [`${__dirname}/static_src`, `${__dirname}/server`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
};













