require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mysql = require('mysql');
const userRoutes = require('./routes');

app.use(express.json({limit: '600mb' }))
app.use(express.urlencoded({ limit: '600mb',extended:true}))
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(userRoutes);

var server = app.listen(process.env.PORT || 6000, () => {
  console.log("Server listening on PORT: " + process.env.PORT);
});
