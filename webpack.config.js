const path = require("path");

module.exports = {
    entry: "./src/game.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        contentBase: './dist'
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}