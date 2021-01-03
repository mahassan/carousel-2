const path = require("path");
var common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
});