var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: "./img" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ],
    }
}