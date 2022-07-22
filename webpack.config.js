const path = require('path');

module.exports = {
    mode: 'production',
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: ['file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        webp: {
                            quality: 75
                        }
                    }
                }]
            }
        ]
    },
    devtool: 'source-map'
}