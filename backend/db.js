const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGODB_URI;
const mongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    let fetched_data = mongoose.connection.db.collection("foodCategory");
    let data = await fetched_data.find({}).toArray();

    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = mongoDB;