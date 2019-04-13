const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "nike"
});

var newArr = [
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.19.54+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.20.01+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.20.13+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.20.23+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.20.35+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.20.54+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.21.02+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.22.20+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.21.02+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.22.20+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.23.03+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.23.32+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.23.58+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.25.05+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.26.51+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.27.14+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.28.04+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.28.48+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.29.25+PM.png",
  "https://s3.amazonaws.com/shoepics2/nike+pictures/Screen+Shot+2019-04-12+at+6.32.28+PM.png"
];

//write some sort of randomizer
for (var i = 1; i < 101; i++) {
  connection.query(
    `create table Shoe${i} (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, url varchar(10000) NOT NULL, price int(5) NOT NULL, category varchar(50) NOT NULL, colors int(2) NOT NULL, style varchar(50) NOT NULL, shoe_kind varchar(50) NOT NULL, PRIMARY KEY (ID)
);`,
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

  for (var j = 0; j < 8; j++) {
    index = Math.floor(Math.random() * newArr.length);
    connection.query(
      `insert into Shoe${i} (name, url,price, category, colors, style, shoe_kind) values (?,?,?,?,?,?,?);`,
      [
        faker.lorem.words(),
        newArr[index],
        faker.random.number({
          min: 100,
          max: 400
        }),
        faker.lorem.words(),
        faker.random.number({
          min: 1,
          max: 10
        }),
        faker.lorem.words(),
        faker.lorem.words()
      ],
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
