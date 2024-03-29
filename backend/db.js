const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGODB_URI;
const mongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    global.food_items = data
    const foodCategory = await mongoose.connection.db.collection ("foodCategory");
    let catData = await foodCategory.find({}).toArray();
    global.foodCategory =catData;
    // console.log(global.food_items);
    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

// const mongoDB = async () => {
//   await mongoose.connect(url) => {
//     if (err) console.log("---" + err)
//     else {
//         console.log("connected to mongo")
//         const foodCollection = await mongoose.connection.db.collection("food_items");
//         foodCollection.find({}).toArray(async function (err, data) {
//             const categoryCollection = await mongoose.connection.db.collection("Categories");
//             categoryCollection.find({}).toArray(async function (err, Catdata) {
//               callback(err, data, Catdata);
//             })
//         });
//     }
//   }
// }

module.exports = mongoDB;
