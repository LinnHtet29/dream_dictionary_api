const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { log } = require("console");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes/routes")(app, fs);

const server = app.listen(3000, (req, res) => {
  console.log("Server's running.....");
});
