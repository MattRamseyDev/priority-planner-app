const path = require('path');

module.exports = {
    // requires entry and output
    entry: "./src/app.js",
    output: {
        // requires path and filename
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
           test:/\.s?css$/,
           use: [
               'style-loader',
               'css-loader',
               'sass-loader'
           ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// loader
