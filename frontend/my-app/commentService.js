const db = require('../config/db');

class CommentService {
    async getAllComments() {
        // Récupère les commentaires avec le nom de l'utilisateur associé
        const [rows] = await db.query(`
            SELECT c.id, c.content, u.username 
            FROM comments c 
            LEFT JOIN users u ON c.user_id = u.id
            ORDER BY c.id DESC
        `);
        return rows;
    }
}

module.exports = new CommentService();