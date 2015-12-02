var vue = require('vue-loader')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: './static',
        publicPath: './static/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?mimetype=image/png"
        }, {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            '$': "jquery",
            'jQuery': "jquery",
            "window.jQuery": "jquery"
        })
    ]
}
