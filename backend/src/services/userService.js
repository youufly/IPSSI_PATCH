const db = require('../config/db');

class UserService {
    // Récupérer tous les utilisateurs
    async getAllUsers() {
        const [rows] = await db.query('SELECT id, username, email FROM users');
        return rows;
    }

    // Créer un utilisateur
    async createUser(username, email) {
        if (!username || !email) {
            throw new Error('Username et Email sont requis');
        }
        
        const [result] = await db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
        return { id: result.insertId, username, email };
    }
}

module.exports = new UserService();