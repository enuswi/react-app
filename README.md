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
├── src ...実際に作業するフォルダ。
│   ├── index.html
│   ├── main.tsx
│   └── style.scss
├── package-lock.json
├── package.json
├── tsconfig.json ... typescriptの設定ファイル
└── webpack.config.js ...webpackの設定ファイル
```

# 開発セットアップ(Cloud9)
```
// (github) https://github.com/enuswi/react-app
$ git clone https://github.com/enuswi/react-app.git
$ cd react-app

// パッケージインストール
$ npm install

// アプリケーションの起動
$ npm start

// 「Preview > Preview Running Application」で動作確認
```

# ビルド
```
$ npm run build
```
＊dist以下に配置される。

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
