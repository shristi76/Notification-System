const { sendEmail } = require("../services/emailService");

const {
    createNotification,
    updateStatus,
} = require("../models/notificationModel");

const sendNotification = async (req, res) => {
    try {
        const { recipient, subject, message } = req.body;

        const notification = await createNotification(
            req.user.id,
            recipient,
            subject,
            message
        );

        try {
            await sendEmail(recipient, subject, message);

            await updateStatus(notification.id, "SUCCESS");

            res.status(200).json({
                message: "Notification sent successfully",
                notification,
            });

        } catch (emailError) {

            await updateStatus(notification.id, "FAILED");

            res.status(500).json({
                message: "Email sending failed",
            });
        }

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error",
        });

    }
};

module.exports = {
    sendNotification,
};