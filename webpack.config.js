var path = require("path");
module.exports = {
    context: __dirname + "/app",
    entry: {
        pubtask: "./pubtask/index.js",
        taskDetail: "./pubtask/taskDetail.js",
        checkdaily: "./checkdaily/index.js",
        checkweekly: "./checkweekly/index.js",
        mydaily: "./mydaily/index.js",
        mytasks: "./mytask/index.js",
        myweekly: "./myweekly/index.js",
        taskstatist: "./taskstatist/index.js",
    },
    // watch:true,
    output: {
        path: path.resolve('./app/scripts/app'),
        filename: "[name].js"
    },
    resolve: {
        alias: {
            jquery: "./scripts/lib/jquery"
        }
    },
    module: {
        loaders: [{
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader'
            }, {
                test: /\.css$/,
                loader: "style!css"
            },
            // required for react jsx
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    }
};
