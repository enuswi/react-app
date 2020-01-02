const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //mode: "development",      // ソースマップ有効で出力
    mode: "production",         // 最適化された状態で出力

    entry: {
        main: "./src/main.tsx",    // エントリポイントとなるメインのjsファイル
        //style: "./src/style.scss"
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
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            }
                        },
                        'sass-loader'
                    ]
                })
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
        new ExtractTextPlugin("style.css")
    ],

    // cloud9用の設定
    devServer: {
        contentBase: path.resolve(__dirname, "dist"), // dist以下のファイルを監視
        port: 8080,
        host: "0.0.0.0",
        disableHostCheck: true
    }
};