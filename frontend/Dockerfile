# Étape 1 : Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Web Sécurisé
# Utilisation de nginx-unprivileged pour ne pas tourner en root
FROM nginxinc/nginx-unprivileged:alpine

# Copie des fichiers buildés depuis l'étape 1
# Adapte le dossier 'dist' ou 'build' selon ton framework
COPY --from=build /app/build /usr/share/nginx/html

# Le port par défaut de l'image unprivileged est 8080
EXPOSE 8080