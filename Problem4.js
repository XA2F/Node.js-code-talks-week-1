//validation.js
//We want to start with our import. Check is just used for validation rules.
const { check } = require("express-validator");
//Here we are just going to define our signup validation. Every one of them reminds me of the required field in HTML when we were building prior projects. I'm not sure if it's the same, but that's what it reminds me of.
exports.signupValidation = [
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
//Here, we are basically doing the same thing as the one above.
exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

//Server.js file
//We are just importing the required modules, or the modules we want to use.
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("./validation.js");
//We want to have our instance.
const app = express();
//We'll have our middleware.
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//We'll be defining our routes and HTTP requests.
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
//Here, we are just starting the server.
app.listen(3000, () => console.log("Server is running on port 3000"));
