const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
    entry: './src/app.js',

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'build')
    },

    resolve:{

        alias:{
            jquery: path.resolve(__dirname, 'src', 'plugins', 'jquery.min.js'),
        }
    },

    module:{
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude: [/node_modules/, /plugins/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?url=false']  //to solve the url() problem in .css
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['url-loader?limit=10000']

            }
          ]

    },

    plugins:[

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            //'app': path.resolve(__dirname, 'src', 'app,js')
             //'angular': 'angular'

        }),


    ]

}
