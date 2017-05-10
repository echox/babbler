FROM mhart/alpine-node:7.10
LABEL maintainer "echox@echox.de

WORKDIR /src
ADD . .

EXPOSE 3000
CMD ["node", "index.js"]
