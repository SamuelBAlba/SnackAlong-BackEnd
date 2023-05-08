const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const snacksController = require("./Controllers/SnacksController.js");

app.use(express.json());
app.use(cors());
app.use(logger('dev'));