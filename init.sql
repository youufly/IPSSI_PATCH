-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

-- Création de la table comments
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insertion des utilisateurs (IDs 1 et 2 forcés)
INSERT INTO users (id, username, email) VALUES (1, 'Utilisateur_1', 'user1@example.com') ON DUPLICATE KEY UPDATE username=username;
INSERT INTO users (id, username, email) VALUES (2, 'Utilisateur_2', 'user2@example.com') ON DUPLICATE KEY UPDATE username=username;

-- Insertion d'un commentaire par défaut
INSERT INTO comments (content, user_id) VALUES ('Bienvenue ! Ceci est un commentaire généré automatiquement au démarrage.', 1);