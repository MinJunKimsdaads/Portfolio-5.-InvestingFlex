var express = require('express');
const User = require('../public/models/User');
const UserStorage = require('../public/models/UserStorage');
var router = express.Router();
const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

const getNews = () => {
  request(
  {
    url: "https://finance.naver.com/world/",
    method: "GET",
    encoding: null,
  },
  (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    if (response.statusCode === 200) {
      console.log("response ok");
      // const bodyDecoded = iconv.decode(body, "euc-kr");
      const $ = cheerio.load(body);

      const list_text_inner_arr = $(
        "#wrap > .section_world > .market_include > .market_data > .market1 > .data > ul > li"
      ).toArray();
      console.log(list_text_inner_arr);

      // const result = [];
      // list_text_inner_arr.forEach((span) => {
      //   const aFirst = $(span).find("a").first(); // 첫번째 <a> 태그
      //   const path = aFirst.attr("href"); // 첫번째 <a> 태그 url
      //   const url = `https://finance.naver.com/world/${path}`; // 도메인을 붙인 url 주소
      //   const title = aFirst.text().trim();

      //   const aLast = $(div).find("a").last(); // <두번째(마지막) <a>태그
      //   const author = aLast.text().trim();
      //   result.push({
      //     url,
      //     title,
      //     author,
      //   });
      // });
      // console.log(result);
    }
  });
};
getNews();

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
  res.render('main', { title: 'Express' });
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

module.exports = router;

