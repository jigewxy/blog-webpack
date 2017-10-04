const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })

               // use: ['style-loader', 'css-loader?url=false']  
               // option [url=false] will keep url() as it is, and in that case, the old folder structure 
               //need to be retained in build folder.
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                //use:['url-loader?limit=10000&name=fonts/[hash].[ext]'],
                use:{
                    loader: 'url-loader',
                    options: {
                          limit: '10000',
                          name: '[path][name].[ext]'
                    }

                }

                //use:['file-loader']
                //use 'file-loader' will extract everything in url('') and put in public folder
                //while 'url-loader' can convert file smaller than a limit to binary.
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                //use:['url-loader?limit=10000&name=fonts/[hash].[ext]'],
                use:{
                    loader: 'url-loader',
                    options: {
                          limit: '10000',
                          name: '[name].[ext]',
                         // publicPath:'assets/'
                          outputPath: 'images/'

                        }

                 }

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

        new ExtractTextPlugin("style.css"),


    ]

}
