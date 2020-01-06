const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //mode: "development",
    mode: "production",
    devtool: "source-map",

    entry: {
        main: "./src/main.tsx",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        // index.htmlファイルをdist以下に配置
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],

    // cloud9用の設定
    devServer: {
        contentBase: path.resolve(__dirname, "dist"), // dist以下のファイルを監視
        port: 8080,
        host: "0.0.0.0",
        disableHostCheck: true
    }
};