const express = require('express');
require('dotenv').config();

const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/auth/auth');

const PORT = process.env.PORT || 4000;

app.use(express.json());

db.getConnection()
    .then(() => console.log('DB Connectée'))
    .catch((err) => console.error('error DB', err));

app.use(authRoutes);

app.get('/', (req, res) => {
    res.status(200).send('<body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0"><h1>Serveur is running :)</h1></body>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});