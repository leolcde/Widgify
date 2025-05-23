const express = require('express');
const app = express();
const db = require('./config/db');

db.getConnection()
    .then(() => console.log('DB Connectée'))
    .catch((err) => console.error('error DB', err));


app.get('/', (req, res) => {
  res.send('Widgify - Backend');
});

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});
