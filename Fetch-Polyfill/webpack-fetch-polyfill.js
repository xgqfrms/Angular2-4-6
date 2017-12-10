const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const folders = {
    APP: path.resolve(__dirname, '../app'),
    BUILD: path.resolve(__dirname, '../build'),
    BOWER: path.resolve(__dirname, '../bower_components'),
    NPM: path.resolve(__dirname, '../node_modules')
};

const config = {
    entry: {
        app: [
            'webpack/hot/dev-server',
            "./js/app.js"
        ]
    },
    debug: true,
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            //'es6-promise': path.join(folders.NPM, 'es6-promise', 'es6-promise.js'),
            //'fetch': path.join(folders.NPM, 'whatwg-fetch', 'fetch.js'),
        }
    },
    stats: {
        colors: true,
        reasons: true,
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 version',
                    'sass?' + ['outputStyle=nested'].join('&')
                ]
            },
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json' },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        //new webpack.optimize.CommonsChunkPlugin('app', null, false),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./', 'index.html'),
            webpackDevServer: '/webpack-dev-server.js'
        })
    ]
};

module.exports = config;