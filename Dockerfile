FROM node:latest

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "run", "dev"]