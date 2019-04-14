var con = require('../database')
var mysql = require('mysql');
var express = require('express');
var bodyParser = require ('body-parser')
var multer = require('multer')
var app = express()
var upload = multer()
var path = require('path')
app.use(bodyParser.json());

//if theres no path given
app.use(express.static(path.join(__dirname,'../public/dist')))

//if product id given in path
app.use('/shoes/:id', express.static(path.join(__dirname,'../public/dist')))


//GET ALL REVIEWS FROM DB BASED ON PROD ID
app.get('/shoes/:id/reviews',(req,res)=>{
  console.log('GET RECEIVED')
var productid = req.params.id
console.log(productid)

  con.getAllReviews(productid, (err,result)=>{
    if(err) {
      console.log('ERROR HERE',err)
    } else {
      res.status(200).json(result)
    }
  })
})

//SUBMIT REVIEW
app.post('/shoes/:id/reviews',upload.none(),(req,res)=>{
  console.log('POST RECEIVED', req.body)
  var formbody = req.body
  var productid = req.params.id
  con.postReview(productid,formbody,(err,formbody)=>{
    if (err) {
      console.log('DATA ADD ERROR', err)
    } else {
      console.log('RETURN FROM DATABASE', formbody)

      res.status(200).json(formbody)
    }
  })
})


var port = process.env.PORT ||3002
app.listen(port,(err,result)=>{
  if(err){
    console.log('SERVER.JS LINE 10 ERROR')
  } else {
    console.log(`SERVER.JS LINE 13 LISTENING ON ${port}`)
  }
}
)


