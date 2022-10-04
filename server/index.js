const express = require("express");
const mongoose = require('mongoose'); //API: https://mongoosejs.com/docs/guides.html
const cors = require("cors");
const apiRoutes = require("./api-routes");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect("//TODO" , {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use('/', apiRoutes);
app.listen(5000, () => {
    console.log("server runs");
});
