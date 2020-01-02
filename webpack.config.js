const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //mode: "development",      // ソースマップ有効で出力
    mode: "production",         // 最適化された状態で出力

    entry: "./src/main.tsx",    // エントリポイントとなるメインのjsファイル
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        // index.htmlファイルをdist以下に配置
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // cloud9用の設定
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 8080,
        host: "0.0.0.0",
        disableHostCheck: true
    }
};