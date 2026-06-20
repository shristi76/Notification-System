// function NotificationForm() {
//   return (
//     <div className="card">
//       <h2>Send Notification</h2>

//       <input
//         type="email"
//         placeholder="Recipient Email"
//       />

//       <input
//         type="text"
//         placeholder="Subject"
//       />

//       <textarea
//         placeholder="Message"
//       ></textarea>

//       <button>Send</button>
//     </div>
//   );
// }

// export default NotificationForm;


import { useState } from "react";
import api from "../services/api";

function NotificationForm({ refreshNotifications }) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/notifications/send",
        {
          recipient,
          subject,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Notification sent successfully!");

      setRecipient("");
      setSubject("");
      setMessage("");

      refreshNotifications();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send notification");
    }
  };

  return (
    <div className="card">
      <h2>Send Notification</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Recipient Email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Notification</button>
      </form>
    </div>
  );
}

export default NotificationForm;