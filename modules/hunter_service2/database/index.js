const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  database: "nike2"
});

var getDescriptions = function(productid, callback) {
  connection.query(
    `select * from description where id = ${productid}`,
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        callback(null, result);
      }
    }
  );
};

var getSizes = function(productid, callback) {
  connection.query(`select * from shoe${productid}`, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getDescriptions,
  getSizes
};
