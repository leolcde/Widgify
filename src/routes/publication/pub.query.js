import dotenv from 'dotenv'
dotenv.config();


export const createPub = async (title, content, userId) => {
    await db.query(
        `INSERT INTO todo (title, content, user_id)
         VALUES (?, ?, ?)`,
        [title, content, userId]
    );
};

export const findPubByTitleAndUser = async (title, userId) => {
    const [rows] = await db.query(
        `SELECT
           id,
           title,
           content,
           DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at,
           user_id,
           FROM todo
         WHERE title = ? AND user_id = ?`,
        [title, userId]
    );
    return rows.length > 0 ? rows[0] : null;
};

// export const deletePubByTitle = async (pubTitle) => {
//     await db.query(
//         "DELETE FROM todo WHERE title = ?",
//         [pubTitle]
//     );
// };
