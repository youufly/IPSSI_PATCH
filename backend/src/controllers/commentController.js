const commentService = require('../services/commentService');

class CommentController {
    // GET /api/comments
    async getAll(req, res) {
        try {
            const comments = await commentService.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
        }
    }
}

module.exports = new CommentController();