const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 4000;

db.getConnection()
    .then(() => console.log('DB Connectée'))
    .catch((err) => console.error('error DB', err));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});