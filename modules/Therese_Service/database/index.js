const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getInitial = function(callback) {
  connection.query('SELECT * FROM products WHERE id = 1', (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

//still working on
const getProduct = function(id, callback) {
  connection.query('SELECT * FROM products WHERE id = ?', id, (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

const getAllMains = function(callback) {
  connection.query('SELECT main_img, id FROM products LIMIT 2, 7', (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  connection,
  getInitial,
  getProduct,
  getAllMains
};
