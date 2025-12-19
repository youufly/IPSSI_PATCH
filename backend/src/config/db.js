const mysql = require('mysql2/promise');

// Configuration du pool de connexion avec SSL activé
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Activation de la connexion sécurisée (SSL/TLS)
    ssl: {
        // Accepte les certificats auto-signés générés par le conteneur MySQL
        rejectUnauthorized: false 
    }
});

// Vérification rapide au démarrage
pool.getConnection()
    .then(conn => {
        console.log('🔒 Connecté de manière sécurisée à MySQL');
        conn.release();
    })
    .catch(err => console.error('❌ Erreur de connexion DB:', err.message));

module.exports = pool;