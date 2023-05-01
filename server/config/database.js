/**
 * ! npm packages require
 */

const mongoose = require("mongoose");

/**
 * ! connection of the database
 */

const database = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * ! exporting of the modules
 */

module.exports = database;
