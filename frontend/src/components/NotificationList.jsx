// function NotificationList() {
//   return (
//     <div className="card">
//       <h2>Notification History</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Recipient</th>
//             <th>Subject</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>No Data</td>
//             <td>-</td>
//             <td>-</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default NotificationList;

function NotificationList({ notifications }) {
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
          {notifications.length === 0 ? (
            <tr>
              <td colSpan="3">No notifications found.</td>
            </tr>
          ) : (
            notifications.map((notification) => (
              <tr key={notification.id}>
                <td>{notification.recipient}</td>
                <td>{notification.subject}</td>
                <td>{notification.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationList;