# Utilisation d'une image légère et à jour (Alpine Linux)
FROM node:20-alpine

# Création du répertoire de travail
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
# npm ci est plus sûr et rapide pour la prod
RUN npm ci --only=production

# Copie du code source
# C'est ici que tu dois avoir organisé ton code en dossiers /controllers et /services
COPY . .

# SÉCURITÉ : Ne pas utiliser l'utilisateur root
# L'image node fournit un utilisateur 'node' par défaut
USER node

# Exposition du port (interne au conteneur)
EXPOSE 3000

CMD ["node", "src/index.js"]