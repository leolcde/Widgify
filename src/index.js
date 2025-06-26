import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import authRoutes from './routes/auth/auth.js';
import publicationRoutes from './routes/publication/pub.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors
({
    origin: 'http://localhost:3030',
    credentials: true
}));

db.getConnection()
    .then(() => console.log('DB Connectée'))
    .catch((err) => console.error('error DB', err));

app.use(authRoutes);
app.use(publicationRoutes)

app.get('/', (req, res) => {
    res.status(200).send('<body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0"><h1>Serveur is running :)</h1></body>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
