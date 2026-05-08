import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
};

export default NotificationList;