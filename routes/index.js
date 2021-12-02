var express = require('express');
const User = require('../public/models/User');
const UserStorage = require('../public/models/UserStorage');
var router = express.Router();

/* GET home page. */
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

router.post('/resister', function(req, res) {
  function register() {
    const client = this.body;
    UserStorage.save(client)
}

});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

module.exports = router;
