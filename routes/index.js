var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

const users = {
  id: ['kmj'],
  password: ["1234"],
};

router.post('/', function(req, res) {
  const id =  req.body.id,
   password = req.body.password;
  
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

module.exports = router;
