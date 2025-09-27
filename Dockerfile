# ベースイメージをNode.js 22系に変更
FROM node:22-alpine

# Alpine Linuxにzshをインストール
RUN apk add --no-cache zsh

# 作業ディレクトリを設定
WORKDIR /app

# コンテナを起動したままにするコマンド
CMD ["tail", "-f", "/dev/null"]