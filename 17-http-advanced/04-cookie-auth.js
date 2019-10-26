#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs =require('querystring'),
      log = console.log;
var islogin = false;

http.createServer((req,res)=>{
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log('request headers:',req.headers);
  log();

  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie 解析cookie
    var data = req.headers.cookie.split(';');
    log(data);
  }
  res.statusCode = 200;
  res.setHeader('Set-cookie',['name=wangding;max-age=1000','mobile=1234445566']);
  res.end('hello word!');
  
  //
  //
  //
  //
  //
  //
  if(req.url === '/login' && method ==='POST'){
    var user ='';
    req.on('data',(data)=>{return user += data;});
    req.on('end',()=>{
      var usr = qs.parse(user);
      
      if(usr.username === 'wangding' && usr.password === '123'){
        islogin = true;
        res.setHeader('Set-cookie',`login=${islogin}`);
        showHome(req,res);
        return;
      }else{
        showLogin(req,res);
        return;
      }
    });
  }
  //
  //
  if(req.url ==='/logout' && req.method ==='GET'){
    islogin = false;
    res.setHeader('Set-cookie',`login = ${islogin}`);
    showLogin(req,res);
    return;
  }
  //
  if(typeof req.headers.cookie !== 'undefined'){//parse cookie
    var data = req.headers.cookie.split('=');
    islogin = data[1];
    if(islogin === 'true'){
      showHome(req,res);
      return;
    }else{
      showLogin(req,res);
      return;
    }
  }  
}).listen(8080);

function showLogin(req,res){
  var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><form action="/login" method="post">user name:<input type "text" name="username"/><br/>password:<input type "password" name="password"/><br/><input type "submit" value="login"/><br/></form></body></html>';
  return html;
}
'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><h1>welcome</h1><hr><a href = "/logout">logout</a></body></html>'
