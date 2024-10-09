const mongoose = require("mongoose");
// to connect to mongodb

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("db connection error", error);
  }
};
module.exports = db;
