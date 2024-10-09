const express = require("express");

//import controller
const { registration, login } = require("../controller/authController");

const router = express.Router();

//creating routes

router.post("/auth/registeration", registration);

router.post("/auth/login", login);

module.exports = router;
