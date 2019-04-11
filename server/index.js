var express = require('express')
var proxy = require('http-proxy-middleware')
var bodyParser = require('body-parser')
var path = require('path')
var multer = require('multer')
var upload = multer()

var app = express()

//user can either use just localhost, or localhost with a product ID

app.use(express.static(path.join(__dirname,'../public')))

app.use('/shoes/:id',express.static(path.join(__dirname,'../public')))




//Max's Service - Reviews
app.use(
  '/shoes/:id/reviews',
  proxy({ target: 'http://localhost:3002', changeOrigin: true })
);

//Hunters service - desc
app.use(
  '/shoes/:id/desc',
  proxy({ target: 'http://localhost:4000', changeOrigin: true })
);



var port = 3000;
app.listen(port,()=>{console.log(`listening on port ${port}`)})

