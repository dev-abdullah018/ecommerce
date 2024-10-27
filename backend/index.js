require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const { dbConnection } = require("./utils/dbConnection");

app.use(cors({
    origin: ["http://localhost:5173"]
}))

let port = process.env.PORT;

app.use(express.json());
app.use("/api", authRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

dbConnection()

app.listen(port, function () {
  console.log(`Port is running on ${port}`);
});
