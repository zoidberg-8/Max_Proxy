const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  database: "nike"
});

var getSuggestions = function(productid,callback) {
  connection.query(`select * from shoe${productid}`, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getSuggestions
};
