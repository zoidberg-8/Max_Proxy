const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));
app.use("/shoes/:id", express.static(__dirname + "/../client/dist"));
app.use("/shoes/", express.static(__dirname + "/../client/dist"));

app.get("/initial", (req, res) => {
  db.getInitial((err, results) => {
    if (err) {
      console.error("Error for GET request for inital from server");
    }
    res.json(results);
  });
});

//still working on
app.get("/api/product/:id", (req, res) => {
  let id = Number(req.params.id);
  db.getProduct(id, (err, results) => {
    if (err) {
      console.log("Error for GET request for images from server");
    }
    res.json(results);
  });
});

app.get("/api/main", (req, res) => {
  db.getAllMains((err, results) => {
    if (err) {
      console.log("Error for GET request for main images from server");
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
