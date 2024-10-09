const express = require("express");

const router = express.Router();

//import controller
const {
  createEmp,
  readEmp,
  readOneEmp,
  updateEmp,
  deleteEmp
} = require("../controller/employeeController");

const isAuthenciate= require("../middleware/authMiddleware")

router.use(isAuthenciate)

router.post("/emp/createEmp", createEmp);
router.get("/emp/readEmp", readEmp);
router.get("/emp/readOneEmp", readOneEmp);
router.put("/emp/updateEmp", updateEmp);
router.delete("/emp/deleteEmp", deleteEmp);
module.exports = router;
