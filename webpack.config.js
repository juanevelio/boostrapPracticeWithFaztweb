const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    }
    ,
    devServer: { port: 5000 },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ]

}