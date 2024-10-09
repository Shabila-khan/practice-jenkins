const Auth = require("../models/authModel"); // require auth model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registration = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newAuth = new Auth({ email, password: hashpassword });
    const saveAuth = await newAuth.save();
    res.status(201).json({ message: "registeration successfull", saveAuth });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.error("error", error);
  }
};

//Login Controller

exports.login = async (req, res) => {
  try {
    // destructuring from body request
    const { email, password } = req.body;
    //checking body fields are empty or not
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    // finding if email is present in db  or not

    const user = await Auth.findOne({ email });
    //checking email is present is or not
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    // compare password of the user

    const comparePassword = await bcrypt.compare(password, user.password);

    //generating payloads

    const data = {
      user: {
        id: user.email,
      },
    };

    //generating jwt token

    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.status(200).json({ message: "login success", authToken });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.error("error", error);
  }
};
