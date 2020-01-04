# 概要
* React + TypeScriptでサクッとWebアプリケーションを作成するプラクティス用リポジトリ。
* AWS Cloud9での開発を前提
* CSSはscssで記述しビルドする
* ビルドはwebpack4を用いて行う

# 構成
```
・
├── dist ...ビルドされたファイルが出力されるフォルダ。
│   ├── index.html
│   ├── main.bundle.js
│   └── style.css
├── node_modules
├── src ...実際に変更するフォルダ。
│   ├── index.html
│   ├── main.tsx
│   └── style.scss
├── package-lock.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```

# 開発セットアップ(Cloud9)
```
// (github) https://github.com/enuswi/react-app
$ git clone https://github.com/enuswi/react-app.git
$ cd app

// パッケージインストール
$ npm install

// 必要なファイルをビルド(dist以下)
$ npm run build

// アプリケーションの起動
$ npm start

// 「Preview > Preview Running Application」で動作確認
```

# 環境作成のメモ書き
```
// ルートディレクトリの作成
$ mkdir app
$ cd app

// package.jsonの作成
$ touch package.json

// 必要なパッケージの追加
$ npm install --save-dev webpack webpack-cli typescript ts-loader css-loader
$ npm install --save-dev extract-text-webpack-plugin@next node-sass sass-loader
$ npm install --save react react-dom @types/react @types/react-dom

// 設定ファイルの作成 (内容はファイルを確認)
$ touch tsconfig.json
$ touch webpack.config.js
```