var config=require('./config')
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
mongoose.connect(config.database);
var Schema = mongoose.Schema;
app.use('/',router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

  app.post('/loginapp', function (req, res) {
    req.body=JSON.parse(JSON.stringify(req.body))
    console.log(req.body)
    var generic = new Schema({})
    mongoose.models={};
    var MyModel = mongoose.model('users', generic);
    var admin;
    if(req.body.admin==false || req.body.admin==null || req.body.admin==undefined || req.body.admin==""){
      admin="NO";
    }else{
      admin="YES";
    }
    MyModel.findOne({
      "username":req.body.username,
      "pwd":req.body.pwd,
      "admin":admin
    },function(err,resp){
      if(err){
        return next(err);
      }else if(resp){
      resp=JSON.parse(JSON.stringify(resp));
        if(resp.admin=="YES"){
        res.json({
          "allow":"ADMIN"
        })
      }else{
        res.json({
          "allow":"USER"
        })
      }
      }else{
        res.json({
          "allow":"NO"
        })
      }
    })
  })

  app.post('/createpage', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
	     collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models ={};
    var newpage = mongoose.model('pgmodel', pgmodel);
    var data=new newpage(req.body);
    data.contents=[];
    for(let i=0;i<req.body.innercntnt.length;i++){
      let temp={};
      temp.subtitle=req.body.innercntnt[i].subtitle;
      temp.description=req.body.innercntnt[i].description;
      data.contents.push(temp);
    }
    data.date=new Date();
    data.likes=0;
    data.save(function(err,resp){
      if(err){
        console.log(err);
      }else{
        res.json({
      "mgs":"success"
        })
      }
    })
  })


  app.post('/updatepage', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
       collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models={};
    var newpage = mongoose.model('pgmodel', pgmodel);
  newpage.findOne({
    "_id":req.body._id
  },function(err,resp){
    if(err){
      res.json(err)
    }else if(resp){
      resp.webtitle=req.body.webtitle;
      resp.addr1=req.body.addr1;
      resp.addr2=req.body.addr2;
      resp.addr3=req.body.addr3;
      resp.zipcode=req.body.zipcode;
      resp.title=req.body.title;
      resp.footer=req.body.footer;
      resp.city=req.body.city;
      resp.phone=req.body.phone;
      resp.date=new Date();
      resp.contents=[];
      for(let i=0;i<req.body.innercntnt.length;i++){
        let temp={};
        temp.subtitle=req.body.innercntnt[i].subtitle;
        temp.description=req.body.innercntnt[i].description;
        resp.contents.push(temp);
      }
      resp.save(function(err,newdata){
        if(err){
          res.json(err);
        }else{
          res.json({
            "mgs":"success"
          })
        }
      })
    }else{
      res.json({
        mgs:"no data"
      })
    }
  })
  })



  app.post('/likethepage', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
       collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models={};
    var newpage = mongoose.model('pgmodel', pgmodel);
  newpage.findOne({
    "_id":req.body.id
  },function(err,resp){
    if(err){
      res.json(err)
    }else if(resp){
      console.log(resp);
      resp.likes=resp.likes+1;
      resp.save(function(err,newdata){
        if(err){
          res.json(err);
        }else{
          res.json({
            "mgs":"success"
          })
        }
      })
    }else{
      res.json({
        mgs:"no data"
      })
    }
  })
  })



  app.get('/pagelist', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
	     collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models={};
    var newpage = mongoose.model('pgmodel', pgmodel);
    newpage.find({},function(err,resp){
      if(err){
        res.json(err);
      }else if(resp.length>0){
        res.json(resp)
      }else{
        res.json({
          "mgs":"no data"
        })
      }
    })
  })

  app.post('/deletepage', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
	     collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models={};
    var newpage = mongoose.model('pgmodel', pgmodel);
    newpage.remove({
      "_id":req.body.id
    },function(err,resp){
      if(err){
        res.json(err);
      }else if(resp.length>0){
        res.json(resp)
      }else{
        res.json({
          "mgs":"no data"
        })
      }
    })
  })

  app.post('/getdocument', function (req, res) {
    var pgmodel = new Schema( require('./models/pages'), {
	     collection: 'pages'
     } );
    console.log(req.body)
    mongoose.models={};
    var newpage = mongoose.model('pgmodel', pgmodel);
    newpage.findOne({
      "_id":req.body.id
    },function(err,resp){
      if(err){
        res.json(err);
      }else if(resp){
        res.json(resp)
      }else{
        res.json({
          "mgs":"no data"
        })
      }
    })
  })



      app.post('/test1234', function (req, res) {
        res.json(req.body);
    })




app.get('*', function (req, res) {
  res.send('<h1 class="error">404</h1><h3>Please check the URL............</h3>');
});

app.listen(3000, function () {
  console.log('Application listening on port 3000!');
  console.log("Server refreshed successfully............")
});
