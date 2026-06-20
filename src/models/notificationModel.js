const db = require("../config/db");

const createNotification = async (
    userId,
    recipient,
    subject,
    message,
    status = "PENDING"
) => {
    const result = await db.query(
        `INSERT INTO notifications
        (user_id, recipient, subject, message, status)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`,
        [userId, recipient, subject, message, status]
    );

    return result.rows[0];
};

const updateStatus = async (id, status) => {
    await db.query(
        "UPDATE notifications SET status=$1 WHERE id=$2",
        [status, id]
    );
};

module.exports = {
    createNotification,
    updateStatus,
};