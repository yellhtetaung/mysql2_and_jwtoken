require("dotenv").config();
const express = require("express");
const IP = require("ip");
const app = express();
const PORT = process.env.APP_PORT;
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is rest apis working",
  });
});

app.use("/api/users", userRouter);

app.listen(PORT, "0.0.0.0", () => {
  const ipAddress = IP.address();
  console.log(`Server is running on \nIP: ${ipAddress} \nPort:${PORT}`);
});
