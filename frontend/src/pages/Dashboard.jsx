// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//     </div>
//   );
// }

// export default Dashboard;



// import Navbar from "../components/Navbar";
// import NotificationForm from "../components/NotificationForm";
// import NotificationList from "../components/NotificationList";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <>
//       <Navbar onLogout={handleLogout} />

//       <div className="container">
//         <div style={{ width: "700px" }}>
//           <NotificationForm />
//           <NotificationList />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotifications(response.data.notifications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="container">
        <div style={{ width: "700px" }}>
          <NotificationForm refreshNotifications={fetchNotifications} />

          <NotificationList notifications={notifications} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;