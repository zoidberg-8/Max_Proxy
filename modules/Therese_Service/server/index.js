const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/shoes/:id/mainimage', (req, res) => {
  db.getInitial((err, results) => {
    if (err) {
      console.error('Error for GET request for inital from server');
    }
    res.json(results);
  });
});

//still working on
app.get('/shoes/:id/prod', (req, res) => {
  let id = Number(req.params.id);
  db.getProduct(id, (err, results) => {
    if (err) {
      console.log('Error for GET request for images from server');
    }
    res.json(results);
  });
});

app.get('/shoes/:id/main', (req, res) => {
  db.getAllMains((err, results) => {
    if (err) {
      console.log('Error for GET request for main images from server');
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});