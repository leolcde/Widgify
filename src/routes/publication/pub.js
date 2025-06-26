import express from 'express';
import { findPubByTitleAndUser, createPub } from './pub.query.js'; 
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/feed', async (req, res, next) => {
    const { title, content, user_id } = req.body;

    if (!title || !content || !user_id) {
        return res.status(400).send({ "msg": "Bad parameter" });
    }

    try {
        const existingTodo = await findPubByTitleAndUser(title, user_id)

        if (existingTodo) {
            return res.status(409).send({
                status: 'error',
                msg: 'Todo already exists'
            });
        }

        await createPub(title, content, user_id)
        const pub = await findPubByTitleAndUser(title, user_id)

        console.log(todo.due_time, typeof todo.due_time);
        const d = new Date(todo.due_time);
        console.log(d.toLocaleString());
        res.status(201).send(todo);
    } catch (err) {
        next(err);
    }
});


export default router;