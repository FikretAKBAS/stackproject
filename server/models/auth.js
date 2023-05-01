/**
 * ! npm packages require
 */

const mongoose = require("mongoose");

/**
 * ! definitions of the Authentication Schemas
 */

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

/**
 * ! exporting of the modules
 */

module.exports = mongoose.model("auth", AuthSchema);
