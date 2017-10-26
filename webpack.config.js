const path = require('path')
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry  : {
        app: ['./index.jsx']
    },
    output : {
        path      : path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename  : 'bundle.js'
    },
    module: {
        rules: [
            {
                test   : /\.jsx?$/,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test  : /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ]
    },

    devServer: {
        inline: true,
        hot: true
    },
    devtool: 'eval',
    plugins: [
        new Visualizer(),
        new UglifyJSPlugin()
    ],
    externals: {
        react: 'react',
        lodash: 'lodash',
        immutable: 'immutable',
        classnames: 'classnames',
        'redux-thunk': 'redux-thunk',
        reselect: 'reselect'
    }
}

