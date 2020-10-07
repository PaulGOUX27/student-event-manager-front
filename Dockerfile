FROM node:carbon-slim

# Utile ?
RUN apt-get -y update \
    && apt-get install -y git

RUN npm install -g @vue/cli

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8080

USER node

CMD ["npm", "run", "serve"]
