function NotificationForm() {
  return (
    <div className="card">
      <h2>Send Notification</h2>

      <input
        type="email"
        placeholder="Recipient Email"
      />

      <input
        type="text"
        placeholder="Subject"
      />

      <textarea
        placeholder="Message"
      ></textarea>

      <button>Send</button>
    </div>
  );
}

export default NotificationForm;