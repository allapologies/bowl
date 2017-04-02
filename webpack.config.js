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
        loaders: [
            {
                test   : /\.jsx?$/,
                loader : 'babel',
                exclude: /node_modules/
            },
            {
                test  : /\.css$/,
                loaders:  [
                  "style-loader",
                    "css-loader?modules&importLoaders=1",
                    "postcss-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        hot: true
    }
}

