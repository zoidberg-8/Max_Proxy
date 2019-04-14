const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "nike2"
});

var sizeArr = [
  5,
  6,
  6.5,
  7,
  7.5,
  8,
  8.5,
  9,
  9.5,
  10,
  10.5,
  11,
  11.5,
  12,
  12.5,
  13,
  14,
  15
];

var trueOrFalse = function() {
  var pool = [null, "true", "false"];
  function get(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return pool[get(1, 3)];
};

for (var i = 1; i < 101; i++) {
  connection.query(
    "insert into description(description, benefits, item_headline, shown, style,  product_details) values (?,?,?,?,?,?);",
    [
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.paragraph()
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
  connection.query(
    `create table Shoe${i} (id int NOT NULL AUTO_INCREMENT, available varchar(10) NOT NULL, sizes DECIMAL( 10, 1 ) NOT NULL, PRIMARY KEY (ID));`,
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
  for (var j = 0; j < sizeArr.length; j++) {
    connection.query(
      `insert into Shoe${i} (available, sizes) values (?,?)`,
      [trueOrFalse(), sizeArr[j]],
      function(err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }
}
