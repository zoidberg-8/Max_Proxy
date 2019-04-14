var mysql = require('mysql');
var faker = require('faker')
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'reviewsdb'
})



var getAllReviews = (productid, callback) => {

  con.query(`select * from reviews where productid = ${productid}`,(err,result)=>{
    if (err) {
      callback(err,null)
    } else {
      callback(null,result)
    }
  })
}

var postReview = (productid, formbody, callback) => {
  con.query(`insert into reviews (username, rating, size, comfort, prod_durability, review_title, review_text, country, city,loc_state, usefor,productid ) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
  [
    faker.internet.userName(),
    formbody.rating,
    formbody.size,
    formbody.comfort,
    formbody.prod_durability,
    formbody.review_title,
    formbody.review_text,
    formbody.country,
    formbody.city,
    formbody.loc_state,
    formbody.usefor,
    productid
  ],(err,result) => {
    if (err) {
      callback(err, null)
    } else {
      console.log('from app server',result)
      callback(null,result)
    }
  })
}

//USED FOR TESTING IN JEST
var deleteAllRecords = (callback) => {
  con.query(`TRUNCATE TABLE reviews`, (err, result) => {
    if(!err){
      callback(null,result)
    }
  })
}

var end = () => {
  con.end()
}

module.exports = {
  getAllReviews:getAllReviews,
  postReview:postReview,
  deleteAllRecords: deleteAllRecords,
  end:end
}