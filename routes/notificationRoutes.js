const express=require("express");
const router= express.Router();

const{
    fetchNotifications,
    getPriorityNotifications,
} = require("../services/notificationService");

router.get("/", async (req,res)=>{
    try {
        const notifications = await fetchNotifications();

        const topNotifications = 
            getPriorityNotifications(notifications);
        res.status(200).json({
  success: true,
  count: topNotifications.length,
  notifications: topNotifications,
});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Failed to fetch notifications",
        });
    }
});

module.exports = router;