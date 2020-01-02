const path = require("path");

module.exports = {
    // production: 最適化された状態で出力
    // development: ソースマップ有効で出力
    //mode: "development",
    mode: "production",
    
    // メインとなるJavaScriptファイル(エントリポイント)
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
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