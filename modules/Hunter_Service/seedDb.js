const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "nike"
});

var newArr = [
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/h9tge6s0brcnq13gz3lq/air-foamposite-pro-mens-shoe-3C44gf.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gsuin11ptg5qgktmzoat/air-force-1-07-shoe-JkTGzADv.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-v7G3FB.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/x0jzm5rey88hbkxoynnx/zoom-pegasus-turbo-mens-running-shoe-qCL9h1.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/tkp1tjl7lxw2jzyiwaxr/air-zoom-vomero-14-mens-running-shoe-m4gpHg.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jsn8jtrvcot4cz8p0ga2/epic-react-flyknit-2-mens-running-shoe-459stf.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/nxxye5nlm181f2bupvol/epic-react-flyknit-2-mens-running-shoe-459stf.jpg",
  "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/noogxnzqtzyr1iysm0q5/air-vapormax-flyknit-2-shoe-BPBJRb.jpg"
];

for (var i = 0; i < newArr.length; i++) {
  connection.query(
    "insert into suggestions(name, url,price, category, colors, style, shoe_kind) values (?,?,?,?,?,?,?);",
    [
      faker.lorem.words(),
      newArr[i],
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