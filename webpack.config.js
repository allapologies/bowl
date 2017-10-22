const path = require('path')

module.exports = {
    entry  : {
        app: ['./index.jsx']
    },
    output : {
        path      : path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename  : 'bundle.js'
    },
    module : {
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
        extensions: ['.js', '.jsx']
    },
    devServer: {
        inline: true,
        hot: true
    },
    devtool: 'eval'
}

