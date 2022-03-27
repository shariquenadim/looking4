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
app.use(cors())
app.use(userRoutes);

var server = app.listen(process.env.PORT || 6000, () => {
  console.log("Server listening on PORT: " + process.env.PORT);
});
