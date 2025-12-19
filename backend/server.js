const express = require('express');
const cors = require('cors');
const userController = require('./src/controllers/userController');
const commentController = require('./src/controllers/commentController');

const app = express();
const port = 8000;

// Middleware
app.use(express.json()); // Remplace express.text() pour gérer le JSON
app.use(cors());

// Routes Utilisateurs
app.get('/api/users', (req, res) => userController.getAll(req, res));
app.post('/api/users', (req, res) => userController.create(req, res));

// Routes Commentaires
app.get('/api/comments', (req, res) => commentController.getAll(req, res));

// Route de test simple
app.get('/', (req, res) => res.send('API Backend MySQL opérationnelle'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
