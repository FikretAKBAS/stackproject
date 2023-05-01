/**
 *  ! npm packages require
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./config/database.js");

/**
 * * USAGE OF DOTENV
 */

dotenv.config();

/**
 ** EXPRESS PACKAGE USAGE
 */

const app = express();

/**
 * * USING OF PACKAGES
 */

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/**
 * * DEFINITION OF PORTNAME
 */

const PORT = 5000;

/**
 * * CALLING DATABASE
 */

database();

/**
 * * Listening of the app on the port that is definint above this command line
 */

app.listen(PORT, () => {
  console.log(`Server Is Running On The ${PORT}. Your Port Name Is:`, PORT);
});
