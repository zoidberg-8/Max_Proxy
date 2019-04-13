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

//Hunters's service - Suggestions
app.use(
  '/shoes/:id/suggestions',
  proxy({ target: 'http://localhost:3003', changeOrigin: true })
);

//Hunter's service - Description
app.use(
  '/shoes/:id/description',
  proxy({ target: 'http://localhost:3004', changeOrigin: true })
);

app.use(
  '/shoes/:id/sizes',
  proxy({ target: 'http://localhost:3004', changeOrigin: true })
);

//Therese's service - image selector
app.use(
  '/shoes/:id/mainimage',
  proxy({ target: 'http://localhost:3005', changeOrigin: true })
);

app.use(
  '/shoes/:id/main',
  proxy({ target: 'http://localhost:3005', changeOrigin: true })
);

app.use(
  '/shoes/:id/prod',
  proxy({ target: 'http://localhost:3005', changeOrigin: true })
);

//Therese's service - main image
app.use(
  '/initial',
  proxy({ target: 'http://localhost:3006', changeOrigin: true })
);
app.use(
  '/api/main',
  proxy({ target: 'http://localhost:3006', changeOrigin: true })
);

app.use(
  '/initial',
  proxy({ target: 'http://localhost:3006', changeOrigin: true })
);

app.use(
  '/api/main',
  proxy({ target: 'http://localhost:3006', changeOrigin: true })
);


var port = 3000;
app.listen(port,()=>{console.log(`listening on port ${port}`)})

