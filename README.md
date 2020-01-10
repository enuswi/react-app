# 概要
* React + TypeScriptでサクッとWebアプリケーションを作成するプラクティス用リポジトリ。
* AWS Cloud9/Dockerで動作確認済み(2020.01.10)
* CSSはscssで記述しビルドする
* ビルドはwebpack4を用いて行う

# 構成
```
・
├── docker
│   └── nginx ...とりあえずnginxの設定ファイルのみ配置している
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

# cloud9

## 開発セットアップ
```
$ git clone https://github.com/enuswi/react-app.git
$ cd react-app

// パッケージインストール
$ npm install

// アプリケーションの起動
$ npm start
```

## 動作確認
「Preview > Preview Running Application」で動作確認

## ビルド
```
$ npm run build
```
＊dist以下に配置される。

# docker

## 開発セットアップ
```
$ git clone https://github.com/enuswi/react-app.git

$ docker-compose build
$ docker-compose up -d
```

## 動作確認
http://localhost:8080

## ビルド
コンテナ起動時からwebpackが変更を検知し自動でビルドしてくれる為、不要
nodeコンテナに入れば手動実行もできるはず

```
$ docker exec -it {container} /bin/bash
```
＊多分こんな感じで入れるはず

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

// react-routerを使う為にパッケージを追加
$ npm install react-router-dom @types/react-router-dom

// dockerでの開発環境構築

```
