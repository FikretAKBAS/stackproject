/**
 * ! npm packages require
 */
const express = require("express");

/**
 * ! LOCAL IMPORTS
 */

const { register, login } = require("../controllers/auth.js");

/**
 * ! EXPRESS ROUTER
 */

const router = express.Router();

/**
 * ! ROUTINGS
 */

router.post("/register", register);
router.post("/login", login);

/**
 * ! EXPORTING OF THE MODULES
 */

module.exports = router;
