#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log('request headers:',req.headers);
  log();

  switch(req.url){
    case '/admin':
      var auth = req.headers.authorization;
      if(typeof auth !== 'undefined'){
        if(usr.username === 'wangding' && usr.password === '123'){
          showSecret(req,res);
        }else{
          showNormal(res);
        }
      }else{
        res.statusCode = 401;
        res.setHeader('www-authenticate','basic');
        showNormal(res);
      }
      getUserNamePwd(auth);
      break;
    default:
      showNormal(res);
      break;
  }
  res.end('OK!');

}).listen(8080);

function showSecret(req,res){
  res.end('my mimi!!');
}

function showNormal(res){
  res.end('hi,good day!');
}

function getUserNamePwd(auth){
  log('authorization:',auth);
  auth = auth.split('');
  if(auth[0] === 'Basic'){
    var buf = new Buffer(auth[1],'base64');
    var usr = buf.toString('utf8').split(':');
    log('username:',usr[0]);
    log('password:',usr[1]);
  }
  return {
    username:usr[0],
    password:usr[1]
  };
}
