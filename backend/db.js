const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://goFood:goFood@cluster0.bkjhpn9.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    let fetched_data = mongoose.connection.db.collection("foodCategory");
    let data = await fetched_data.find({}).toArray();

    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
module.exports = mongoDB;
