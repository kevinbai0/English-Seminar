const path = require("path");
const HWP = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "docs")
    },
    module:{
        rules:[
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins:[
        new HWP(
            {template: path.join(__dirname,"/public/index.html")}
        ),
        new CopyWebpackPlugin([{from: "public/fonts", to: "public/fonts"} ])
    ],
    watch: true
}

module.exports = config;