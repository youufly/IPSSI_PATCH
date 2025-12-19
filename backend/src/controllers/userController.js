const userService = require('../services/userService');

class UserController {
    // GET /users
    async getAll(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
        }
    }

    // POST /users
    async create(req, res) {
        try {
            const { username, email } = req.body;
            const newUser = await userService.createUser(username, email);
            res.status(201).json(newUser);
        } catch (error) {
            if (error.message === 'Username et Email sont requis') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: 'Erreur serveur' });
        }
    }
}

module.exports = new UserController();