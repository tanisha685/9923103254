const axios =require("axios");

const fetchNotifications =async ()=> {
    const response =await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,

            },
        }
    );
    return response.data.notifications;
};

const typeWeights ={
    Placement: 3,
    Result: 2,
    Event: 1,
};

const getPriorityNotifications = (notifications) => {
  return notifications
    .map((notification) => {
      const priorityScore =
        typeWeights[notification.Type] * 1000000000000 +
        new Date(notification.Timestamp).getTime();

      return {
        ...notification,
        priorityScore,
      };
    })
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 10)
    .map(({ priorityScore, ...rest }) => rest);
};

module.exports ={
    fetchNotifications,
    getPriorityNotifications,
}