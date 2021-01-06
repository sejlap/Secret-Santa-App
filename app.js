const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const path= require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// init express
const cors = require("cors");
app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/new", (req, res) => res.send("New endpoint"));
//----------API--------------

const employeesRoute = require("./StoreRoute.js");
app.use("/employees", employeesRoute);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('santa_frontend'));
}
    app.get('/*',(req,res) => {
      res.sendFile(path.join(__dirname, 'santa_frontend', 'build', 'index.html'));
    });
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);