var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const {
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

const  { connectToDb } = require("../models/database")
const { hashPassword, verifyPassword } = require("../utils/password");
const accessTokenSecret = JSON.parse(process.env.ACCESS_TOKEN_SECRET);

const signup = function(req,res) {
  const { name, email, password, role } = req.body;

  let userDetails = {
    id: uuidv1(),
    name,
    email,
    password: hashPassword(password),
    role: role,
  };

  connectToDb()
  .then(db => {

    //check for existing user
    const checkExistingUser = `SELECT * FROM user WHERE email = '${userDetails.email}'`;
    db.query(checkExistingUser, function(err, existingUser) {
      if (err){
        return res
        .status(500)
        .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
      }else if(existingUser.length != 0) {
        return res
        .status(403)
        .json({type: "Bad Request", message: "User with given email already exists"});
      }
    })

    //create new user
    const sql = "INSERT INTO user (id, name, email, password, role) VALUES ('"+ userDetails.id +"' , '"+ userDetails.name +"', '"+ userDetails.email +"', '"+ userDetails.password +"', '"+ userDetails.role +"')";
    db.query(sql, function (err, newUser) {
      if (err){
        return res
        .status(500)
        .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
      }else {
        return res
        .status(200)
        .json({ message: "User Created Successfully", user: newUser });
      }
    });
  })
  .catch(err => {
    return res
    .status(500)
    .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
  })
}

const login = function(req,res) {
  const { email, password } = req.body;

  connectToDb()
  .then(db => {

    const sql = `SELECT * FROM user WHERE email = '${email}'`;
    db.query(sql, function(err, user) {
      if (err){
        return res
        .status(500)
        .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
      }else if (user.length == 0){
        return res
        .status(404)
        .json({type: "Internal Server Error", message: "User with given email does not exist"});
      }
      else {
        if(verifyPassword(password, user[0].password)){
          //set tokens
          const payload = {name: user[0].name, email: user[0].email, role: user[0].role};
          const token = jwt.sign(payload, accessTokenSecret.key, {
            algorithm: accessTokenSecret.type,
            expiresIn: `${accessTokenSecret.expiresIn}m`,
          })

          res.cookie("accessToken", token, {httpOnly: true});
          
          return res
          .status(200)
          .json({ message: "Correct password", user: {name: user[0].name, email: user[0].email, role: user[0].role}});
        }else {
          return res
          .status(404)
          .json({type: "Internal Server Error", message: "Invalid password"});
        }
      }
    })
  })
  .catch(err => {
    return res
    .status(500)
    .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
  })
}

const authenticate = function(req, res, next) {
	const token = req.cookies.accessToken;

	if (!token) {
		return res
    .status(402)
    .json({type: "Internal Server Error", message: "No token"});
	}

	var payload
	try {
		payload = jwt.verify(token, accessTokenSecret.key)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			return res
      .status(403)
      .json({type: "Internal Server Error", message: "Token wrong"});
		}
		return res
    .status(500)
    .json({type: "Internal Server Error", message: "An error has occurred. Please try again later."});
	}
  console.log("payload",payload);
	next();
}

const logout = function(req, res, next) {
	const token = req.cookies.accessToken;

	if (!token) {
		return res
    .status(402)
    .json({type: "Internal Server Error", message: "No token"});
	}

  const newToken = jwt.sign({}, accessTokenSecret.key, { expiresIn: 1 });

  res.cookie("accessToken", newToken, {httpOnly: true});

  next();
}

router.post(
  "/signup",
  signup
);

router.post(
  "/signin",
  login
);

router.get(
  "/dashboard",
  authenticate,
  (req,res) => {
    // console.log(req)
    res.status(200).json({message: "dashboard"})
  }
)

router.get(
  "/logout",
  logout,
  (req,res) => {
    // console.log(req)
    res.status(200).json({message: "logged out"})
  }
)

module.exports = router;
