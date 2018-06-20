const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

routes(app);

const server = app.listen(8000, function () {
    console.log("api running on port 8000");
});