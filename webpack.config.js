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
                loader: 'style-loader!css-loader'
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

