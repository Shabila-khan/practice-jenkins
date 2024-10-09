const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

//import routes
const auth = require("./routes/authRoute");
const Emp = require("./routes/employeeRoute");

const app = express();

//communicate between two ports
app.use(cors());

//req res in json format
app.use(express.json());

//read the env file
dotenv.config();

// database call
db();

//home route
app.get("/", (req, res) => {
  res.send("server is live");
});

//routes
app.use("/api/v1", auth);
app.use("/api/v1", Emp);

//intialize port
app.listen(process.env.PORT, () => {
  console.log(`server is live on port ${process.env.PORT}`);
});
