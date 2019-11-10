var express = require('express');
var router = express.Router();
var data = require('./data.json');

router.use(express.static(__dirname));//显示图片

router.get('/data', function(req, res) {
  res.send(data);
});
router.get('/login', function(req, res) {
  res.type('text/html');
  res.status(200);
  res.sendFile(`${__dirname}/login.html`);
});
router.get('/list', function(req, res) {
  for(var i =0 ;i<data.users.length ;i++){
    let username = data.users[i].username;
    let pwd = data.users[i].password;
    if(req.query.username === username && req.query.pwd === pwd){
    //   res.end(()=>{
        res.type('text/html');
        res.status(200);
        res.sendFile(`${__dirname}/list.html`);
    //   });
      break;
    }
    res.send('用户名或密码错误！');
  }
});
module.exports = router;