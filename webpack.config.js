const HtmlWebpackPlugin = require('html-webpack-plugin');
// const miniCssPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {src: './client/index'},
        // styles: './client/scss/application.scss'
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react'],
            }
        },
        {
            test: /\.s?css/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
    ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: 'localhost',
        static: {
            directory: path.join(__dirname, './dist/index.html')
        },
        open: true,
        hot: true,
        compress: true,
        port: 8080,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    },
} //http://localhost:8080/webpack-dev-server