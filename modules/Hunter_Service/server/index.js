const express = require("express");
const mysql = require("mysql");
const db = require("../database");
const bodyParser = require("body-parser");

const app = express();
let port = process.env.PORT || 3003;
//test branch
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/shoes/:id", express.static(__dirname + "/../client/dist"));

app.use("/shoes/", express.static(__dirname + "/../client/dist"));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/shoes/:id/suggestions", (req, res) => {
  var productid = req.params.id;
  db.getSuggestions(productid, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
