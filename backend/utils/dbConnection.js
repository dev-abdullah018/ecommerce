const mongoose = require("mongoose");

module.exports.dbConnection = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://ecommerce:ABWKv8p2qGTQFzth@cluster0.rm1qtu3.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => console.log("Database Connected!"));
  } catch (error) {
    console.log(error.message);
  }
};

