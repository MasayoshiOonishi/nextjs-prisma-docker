# Install dependencies only when needed
FROM node:19-bullseye-slim AS deps


RUN apt-get update -y \
&& apt-get upgrade -y \
&& apt-get autoremove -y

# 必要なライブラリのインストール
RUN apt-get install -y gettext \
    libcurl4-gnutls-dev \
    libexpat1-dev \
    libghc-zlib-dev \
    libssl-dev \
    make \
    wget \
    git
    


