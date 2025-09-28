# 🚀 環境構築クイックスタート
## 1. ディレクトリとファイルの準備
まず、以下のファイル構成でプロジェクトの基盤を作成します。
```
my-storybook-project/
├── .devcontainer/
│   └── devcontainer.json
├── Dockerfile
└── docker-compose.yml
```
## 2. Dockerfileの設定
Dockerfileは、コンテナのベースとなるイメージを定義します。プロジェクトのルートディレクトリに以下の内容で作成します。

```:Dockerfile
# ベースイメージとしてNode.jsを使用
FROM node:22-alpine

# Alpine Linuxにzshをインストール
RUN apk add --no-cache zsh

# 作業ディレクトリを設定
WORKDIR /app

# コンテナを起動したままにするコマンド
CMD ["tail", "-f", "/dev/null"]
```
## 3. docker-compose.ymlの設定
docker-compose.ymlは、コンテナの実行設定を定義します。プロジェクトのルートディレクトリに以下の内容で作成します。

```:YAML
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
      - "6006:6006"
    volumes:
      - .:/app
      - /app/node_modules
    stdin_open: true
    tty: true
```
## 4. devcontainer.jsonの設定
devcontainer.jsonは、VS Codeがコンテナに接続する際の動作を定義します。.devcontainerディレクトリ内に以下の内容で作成します。
```:JSON
{
  "name": "My Storybook App",
  "dockerComposeFile": [
    "../docker-compose.yml"
  ],
  "service": "app",
  "workspaceFolder": "/app"
}
```
## 5. コンテナのビルド
```
docker compose up -d --build
```

# 🛠️ 開発環境のセットアップ
1. コンテナ外でチュートリアルをclone
```
npx degit chromaui/intro-storybook-react-template taskbox
```

2. コンテナに接続: VS Codeでコマンドパレット（Cmd + Shift + P）を開き、「Remote-Containers: Attach to Running Container...」を選択します。プロジェクトのルートディレクトリを選ぶと、VS Codeが自動的にコンテナを起動し、接続します。

3. プロジェクトの作成: コンテナ内のVS Codeターミナルで、以下のコマンドを実行。
```:Bash
# コンテナ内で
cd taskbox

# Install dependencies
yarn

# Start the component explorer on port 6006:
yarn storybook

# Run the frontend app proper on port 5173:
yarn dev
```
4. Storybookの起動:
```:Bash
npm run storybook
```
5. これで、ブラウザで http://localhost:6006 にアクセスすると、Storybookの画面が表示されます。

この手順により、ローカル環境を汚さずに、クリーンな開発環境を簡単に構築できます。

# チュートリアルやる中で入れていったもの
### Add the necessary dependencies to your project with:
```
yarn add @reduxjs/toolkit react-redux
```
### In your terminal, run the following command to generate a generic service worker inside your public folder:
package.json
```
"scripts": {
  "init-msw": "msw init ./public"
}
```
```
yarn add msw --dev
yarn init-msw
yarn add msw msw-storybook-addon -D
npx msw init public/ --save
```
### Add the package as a development dependency.
```
yarn add -D chromatic
npx chromatic --project-token=chpt_d97d935304dabd3
```