const path = require("path"),
    webpack = require("webpack");

module.exports = {
    entry: "./src/lightgallery.js",
    resolve: {
        extensions: [ ".js", ],
        modules: [ "node_modules", ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "tmp.js",
    },
};