const cors = require("cors");

require("dotenv").config();
const express = require("express");
const logger = require("./middleware/logger");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/notifications", notificationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});