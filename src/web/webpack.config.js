const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const glob = require('glob');


var bundledFiles = glob.sync('./scripts/**/*.ts').reduce(function(map,el) {
    map[path.join(path.dirname(el), path.parse(el).name )] = el;
    return map;
}, {});

console.log(`Bundled files ${JSON.stringify(bundledFiles, null, 4)}`);

module.exports = {
    target: "web",
    entry: bundledFiles
    ,
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "wwwroot/js"),
        filename: "[name].js",
        sourceMapFilename: "./[name][ext].map",
        publicPath: "/js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".html"],
    },
    module: {
        
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        postcssOptions: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            append: '\n//# sourceMappingURL=[filebase].map',
        }),
        new MiniCssExtractPlugin({
            filename: "../css/[name].css"
        })
    ]
};
