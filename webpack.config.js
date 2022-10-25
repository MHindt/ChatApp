const path = require("path");
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**Mode:
     * the environment development, production, etc d
     * default production
     */
    mode: process.env.NODE_ENV,
    /**
     * entry: 
     * the entry point
     */
    entry: {
        bundle: path.resolve(__dirname, '/index.js')
    },
    /**
     * output
     * the folder path of the output file
     */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/",
        clean: true
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
          publicPath: '/',
          directory: path.resolve(__dirname, 'dist'),
        },
        host: 'localhost',
        port: 8080,
        historyApiFallback: true, //to server you index.html in place of 404
        open: true,
        compress: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chat App',
            template: '/index.html'
        }),
    ],
}
//filename: '[name][contenthash].js', took from ouput 
/* proxy: {
          '*': 'http://localhost:5000',
          secure: false,
        }*/