const Emp = require("../models/employeeModel");

// create api
exports.createEmp = async (req, res) => {
  try {
    const { name, email, gender, phone_no } = req.body; // body input
    //check whether the fields are empty or  not
    if (!name || !email || !phone_no || !gender) {
      return res.status(400).json({ message: "all fields are required" });
    }

    //create an obj where these body input fields are store
    const newEmp = new Emp({
      name,
      email,
      gender,
      phone_no,
    });

    //save the object
    const saveEmp = await newEmp.save();
    res.status(201).json({ message: "employee added succesful", saveEmp });
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};

//read
exports.readEmp = async (req, res) => {
  try {
    const getAllEmp = await Emp.find({});
    if (!getAllEmp) {
      return res.status(400).json({ message: "employee not found" });
    }

    res.status(200).json(getAllEmp);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};

// get one employee

exports.readOneEmp = async (req, res) => {
  try {
    const { id } = req.query;
    const getOneEmp = await Emp.findById(id);
    if (!getOneEmp) {
      return res.status(400).json({ message: "employee not found" });
    }

    res.status(200).json(getOneEmp);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};

//update

exports.updateEmp = async (req, res) => {
  try {
    const { id } = req.query;
    const updateEmp = await Emp.findById(id);
    if (!updateEmp) {
      return res.status(400).json({ message: "employee not found" });
    }
    const { name, email, gender, phone_no } = req.body;
    updateEmp.name=name,
    updateEmp.email=email,
    updateEmp.gender=gender,
    updateEmp.phone_no=phone_no

    await updateEmp.save()

    res.status(200).json(updateEmp);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};

//Delete

exports.deleteEmp = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteEmp = await Emp.findById(id);
    if (!deleteEmp) {
      return res.status(400).json({ message: "employee not found" });
    }
   
    const removeEmp=await Emp.findByIdAndDelete(id);

    res.status(200).json({message:"employee delete successfully"});
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};
