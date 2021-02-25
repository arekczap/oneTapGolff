const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, './src/game.js'),
    // entry: "./src/game.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],
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
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {

                            name: 'assets/[hash]-[name].[ext]',
                            esModule: false,
                        }
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    }
}