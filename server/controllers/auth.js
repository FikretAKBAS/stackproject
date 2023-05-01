/**
 * ! npm packages require
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * ! local imports
 */

const AuthSchema = require("../models/auth");

/**
 * ! definitions of the register  controllers
 */
const register = async (req, res) => {
  try {
    /**
     * * We'll take this 3 data from FrontEnd Body
     */
    const { username, password } = req.body;
    /**
     * * ASYNC function for find a useremail
     */

    const user = await AuthSchema.findOne(email);

    /**
     * * if email address is already registered
     */

    if (user) {
      return res
        .status(500)
        .json({ msg: "This email address is already registered" });
    }

    /**
     * * if password lenght is shorter than registration conditions
     */

    if (password.length < 6) {
      return res.status(500).json({
        msg: "Your password is too short to be registration conditions. Please try a new password that is longer than 6 characters",
      });
    }

    /**
     * * Hashing password after password control.
     */

    const passwordHash = await bcrypt.hash(password, 12);

    /**
     * * validation of the email addres according to email regex response (24:20 de kaldın)
     */

    if (!isEmail(email)) {
      return res.status(500).json({
        msg: "Please enter an acceptable email address to register.",
      });
    }
  } catch (error) {}
};

/**
 * ! definitions of the login  controllers
 */

const login = async (req, res) => {
  try {
  } catch (error) {}
};

/**
 * ! controlling of the email by a email controller regular expression
 */

function isEmail(emailAddress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAddress.match(regex)) return true;
  else return false;
}

/**
 * ! exporting of the modules
 */

module.exports = { register, login };
