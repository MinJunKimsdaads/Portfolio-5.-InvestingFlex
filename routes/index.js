var express = require('express');
const User = require('../public/models/User');
const UserStorage = require('../public/models/UserStorage');
var router = express.Router();
var bodyParser = require('body-parser')
const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
var Crawler = require("crawler");
var fs = require('fs');

var context = [
  { 'a' : 'Hello', 'b' : 'World' },
  { 'a' : 'javacript', 'b' : 'is ...'},
  { 'a' : 'web', 'b' : 'is ...'}
]

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res) {
  // const user = new User(req.body);
  // const response = user.login();
  
  // return res.json(response);

  const id =  req.body.id,
   password = req.body.password;
  const users = UserStorage.getUsers("id","password");

  
  if (users.id.includes(id)) {
    const idx = users.id.indexOf(id);
    if(users.password[idx]===password) {
      return res.json({
        success: true,
      });
    }
  }
  return res.json({
    success: false,
    msg: '로그인 실패',
  });
})
       
router.get('/resister', function(req, res, next) {
  res.render('resister', { title: 'Express' });
});

router.get('/korean', function(req, res, next) {
  res.render('korean', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express'});
});

router.get('/foreign', function(req, res, next) {
  res.render('foreign', { title: 'Express' });
});

router.get('/discussion', function(req, res, next) {
  res.render('discussion', { title: 'Express' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Express' });
});

var c = new Crawler({
  maxConnections : 10,
  // This will be called for each crawled page
  callback : function (error, result, done) {
      if(error){
          console.log(error);
      }else{
          var $ = result.$;
          // $ is Cheerio by default
          //a lean implementation of core jQuery designed specifically for the server
          console.log($("title").text());

          const bodyList = $("table#trend_tab_0 tr");
          
          var objtest = {};
          var arr1=[];
          bodyList.each(function(i, elem) {
            var target= $(this).find('td a').text();
            arr1.push(target);
            // console.log(target);
            objtest=target;
            // console.log(objtest);
            });
            var test=JSON.stringify(objtest);
            console.log(arr1);
            console.log(objtest);

          // var file = 'test1.json';
          // fs.open(file,'w',function(err,fd)
          // { if (err) throw err;
          // console.log('file open complete'); });
          // fs.appendFile('test.txt', newsList, function (err)
          // { if (err) throw err; console.log('The "data to append" was appended to file!'); });
          
          //   fs.writeFile('test1.js', test, function (err)
          // { if (err) throw err; console.log('The "data to append" was appended to file!'); }
          // );
      } 
  }
});
// console.log(objtest);
     
c.queue(
 'https://finance.naver.com/sise/'
);



module.exports = router;

