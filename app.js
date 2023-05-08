const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

//MiddleWare
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.get("/", (req, res) => {
    res.send("Welcome to our App");
})

//404 page
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found"});
})

module.exports = app