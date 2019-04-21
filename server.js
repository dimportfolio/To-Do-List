const express = require("express");
const exphbs = require("express-handlebars");
const orm = require("orm");

let app = express();

app.use(express.static("public"));