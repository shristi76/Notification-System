function NotificationList() {
  return (
    <div className="card">
      <h2>Notification History</h2>

      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>No Data</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NotificationList;