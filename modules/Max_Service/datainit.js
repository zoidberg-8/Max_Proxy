var mysql = require('mysql')
var faker = require('faker')

var seedDb = (callback) => {
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'reviewsdb'
})

//SEEDING 20 RECORDS INTO DB



for (var numOfReviews = 1; numOfReviews<=20; numOfReviews++){
  for (var id = 1; id<=100;id++){
  con.query(`insert into reviews (username, rating, size, comfort, prod_durability, review_title, review_text, country, city,loc_state, usefor,productid ) values (?,?,?,?,?,?,?,?,?,?,?,?)`,[faker.internet.userName(),
    faker.random.number({
      'min':1,
      'max':5
    }),
    faker.random.number({
      'min':1,
      'max':3
    }),
    faker.random.number({
      'min':4,
      'max':6
    }),
    faker.random.number({
      'min':7,
      'max':9
    }),
    faker.lorem.words(),
    faker.lorem.sentences(),
    faker.address.country(),
    faker.address.city(),
    faker.address.state(),
    faker.random.number({
      'min':1,
      'max':5
    }),
    id
  ],(err,result)=>{
    if(err){
      console.log(err)
    } else {
      callback

    }

  })

  }
}
}



seedDb()

module.exports = {
  seedDb: seedDb

}



