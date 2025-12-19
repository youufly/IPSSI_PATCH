# Étape 1 : Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
ENTRYPOINT [ "tail", "-f" "/dev/null" ]

