'use strict';

/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description APDP\webpack.config.js
 * @author xgqfrms
 *
 * @license MIT
 * @copyright xgqfrms 2016-forever || 2018-present
 *
 */

const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const webpack = require("webpack"); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");// extract css files
const CopyWebpackPlugin = require("copy-webpack-plugin");// copy folder


require("babel-polyfill");
// import "babel-polyfill";

// process.env.NODE_ENV = `production`;
process.env.NODE_ENV = `development`;

if (process.env.NODE_ENV !== 'production') {
    console.log('😃, Looks like we are in development mode!');
}else{
    console.log('Tada, 🎉, we are in production mode!');
}

const BASE_URI = {
    index: `./index`,
    MODULES: `./src/backend-system`,
    FES: `./src/frontend-system`,
    BS: `./src/backend-system/select-tree`,
    COMPONENTS: `./table-components`,
    TEST: `./table-components/test`,
    app: "select-tree",
};

const modulesArray = [
    "index",// index & "babel-polyfill"
    "select-tree",
    "abc-table",
    "abc-form",
    "svn-table",
    "svn-form",
];

const fesArray = [
    // "index",// fes
    // "index",// index & "babel-polyfill"
    "project-table",
    "project-form",
    "server-table",
    "server-form",
    "logs-tree",
    "config-tree",
];

const tableComponents = [
   "basic-table",
   "fixed-header-table",
   "fixed-column-table",
   "fixed-row-table",
   "fixed-header-column-table"
   // "fixed-rows-table",
   // "fixed-cols-table",
];

const tableTest = [
   "basic-table.spec",
   "fixed-header-table.spec",
   "fixed-column-table.spec",
   "fixed-row-table.spec",
   "fixed-header-column-table.spec",
   // "fixed-rows-table.spec",
   // "fixed-cols-table.spec",
];


let entryObject = {};

// entryObject["babel-polyfill"] = "babel-polyfill";
// entryObject["select-tree"] = ["babel-polyfill", `${BASE_URI.BS}`];
// entryObject[`${BASE_URI.app}`] = ["babel-polyfill", `${BASE_URI.BS}`];

// entryObject.babel-polyfill;
// Uncaught ReferenceError: polyfill is not defined


modulesArray.forEach(
    (item, i) => {
        // entryObject[item] = ["babel-polyfill", `${BASE_URI.MODULES}/${item}`];
        // only entry & import "babel-polyfill";
        entryObject[item] = `${BASE_URI.MODULES}/${item}`;
    }
);

fesArray.forEach(
    (item, i) => {
        entryObject[item] = `${BASE_URI.FES}/${item}`;
    }
);

// tableComponents.forEach(
//     (item, i) => {
//         entryObject[item] = `${BASE_URI.COMPONENTS}/${item}`;
//     }
// );

// // test cases
// tableTest.forEach(
//     (item, i) => {
//         entryObject[item] = `${BASE_URI.TEST}/${item}`;
//     }
// );

// index
// entryObject[BASE_URI.init] = `${BASE_URI.init}`;

// BouncedModal
// entryObject[BASE_URI.modal] = `${BASE_URI.libs}/BouncedModal`;



module.exports = {
    entry: Object.assign({}, entryObject),
    // entry: ["babel-polyfill", "./src/backend-system/select-tree"],
    // js map name & push to entry ???
    // node read files name & /**/*.js
    // entry: {
    //     // 输入文件 public/src && no import in app, need to add as an entry
    //     app: './src/index.js',
    //     // module1: BASE_URI.WEB + '/module1',
    //     // module2: BASE_URI.WEB + '/module2',
    //     nim: BASE_URI.WEB + '/no-import-module',
    //     // stock_f9: BASE_URI.WEB + '/es5-global-function',
    //     news: `${BASE_URI.ES5}/company-news`,
    //     // f9fv: `${BASE_URI.F9FV}/turnover-trend-make-market-diagram`,
    //     "turnover-trend-make-market-diagram": `${BASE_URI.F9FV}/turnover-trend-make-market-diagram`,
    // },
    output: {
        // 输出文件 dist/build
        // path: path.resolve(__dirname, "build/"),
        path: path.resolve(__dirname, "build/js/"),
        filename: '[name].min.js',// ??? hash version
        // filename: '[name].[hash:16].min.js',// hash version
        // [hash] 和 [chunkhash] 的长度可以使用 [hash:16]（默认为20）来指定。
        // filename: "[chunkhash].bundle.js",
        // publicPath: '/'
        // pathinfo: true,
        // sourceMapFilename:  [name], [id], [hash] 和 [chunkhash], // 默认使用 "[file].map"。
    },
    resolve: {
        // 自动识别的扩展名
        extensions: ['.js']
    },
    module: {
        // loaders
        rules: [
            {
                test: /\.js$/,// test: /\.(js|jsx)$/,
                exclude: /node_modules/,// exclude: /(node_modules|bower_components)/,
                // use: 'babel-loader',
                loader: "babel-loader",
                options: {
                    // presets: ['@babel/preset-env'],
                    // presets: ["es2015"],
                    presets: ["env"]
                }
                // .babelrc
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // presets: ['es2015'],
                //         // presets: ['preset-env'],
                //         presets: ['env'],
                //         // plugins: [require('babel-plugin-transform-object-rest-spread')]
                //     }
                // }
            },
            {
                test: /\.css$/,// test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            sourceMap: true,
                            minimize: true || {/* CSSNano Options */},
                            // camelCase: true,
                            // importLoaders: 1,
                            // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            // alias: {
                            //     "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                            // },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     includePaths: [
                        //         path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                        //     ]
                        // }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ],
            //     // use: [
            //     //     'to-string-loader',
            //     //     'css-loader'
            //     // ],
            //     // use: [
            //     //     'handlebars-loader', // handlebars loader expects raw resource string
            //     //     'extract-loader',
            //     //     'css-loader'
            //     // ]
            // }
        ]
    },
    devtool: 'source-map',
    // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            // sourceMap: false,
            extractComments: false,
            // extractComments: true,// {Boolean|RegExp|Function<(node, comment) -> {Boolean|Object}>}
            // test: /\.js$/i,// test: /\.js($&#124;\?)/i
            // include: /\/includes/,
            // exclude: /\/excludes/,
            // parallel: true,
            parallel: 2,
            // parallel: 4,
            cache: true,
            // parallel: {
            //     cache: true,
            //     workers: 2, // for e.g
            // },
            // uglifyOptions: {
            //     ie8: true,// ie8: false,
            //     ecma: 5,//ecma: 8,
            //     parse: {...options},
            // mangle: false,
            // mangle: {
            //     // reserved: ['BouncedModal', ],// 标识符
            //     reserved: ["OTC_IP", "OTC_PATH", "OTC_GILCODE"]
            //     // keep_fnames: true,
            //     // ...options,
            //     // properties: {
            //     //     // mangle property options
            //     //     // reserved: ["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"],
            //     //     reserved: ["OTC_IP", "OTC_PATH", "OTC_GILCODE"]
            //     // },
            // },
            // uglifyjs index.js -o ./build/js/index.min.js -c -m reserved=["OTC_IP", "OTC_PATH", "OTC_GILCODE"]
            //     output: {
            //         comments: false,
            //         beautify: false,
            //         ...options
            //     },
            //     compress: {...options},
            //     warnings: false,
            //     except: ['$super', '$', 'exports', 'require'],//排除关键字 ???
            // },
            // warningsFilter: (src) => true
        }),
        // new HtmlWebpackPlugin({
        //     title: 'using ES6 today with webpack3',
        //     template: './src/index.html'
        // }),
        // new CleanWebpackPlugin(['dist']),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['vendor.js']
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //         // ??? config('production')/config('development')
        //     }
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new WebpackDevServer(compiler, options)
    ],
    devServer: {
        contentBase: path.resolve(__dirname, `dist`),
        host: `http://10.1.5.202`,
        compress: true,
        port: 8080
    },
};
