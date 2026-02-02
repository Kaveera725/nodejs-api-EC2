const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    console.log("Server will continue without database connection");
    // process.exit(1); // Commented out to allow server to run without DB
  }
};

module.exports = connectDB;
