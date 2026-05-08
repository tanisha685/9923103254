import { useEffect, useState } from "react";

import API from "../services/api";

import NotificationList from "../components/NotificationList";

import { Container, Typography } from "@mui/material";

const AllNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
  const loadNotifications = async () => {
    try {
      const response = await API.get("/notifications");

      setNotifications(response.data.notifications);
    } catch (error) {
      console.error(error);
    }
  };

  loadNotifications();
}, []);
  useEffect(() => {
  const loadNotifications = async () => {
    try {
      const response = await API.get("/notifications");

      setNotifications(response.data.notifications);
    } catch (error) {
      console.error(error);
    }
  };

  loadNotifications();
}, []);
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <NotificationList notifications={notifications} />
    </Container>
  );
};

export default AllNotifications;