#!/usr/bin/node
const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      log = console.log;

var logincount = 1;

http.createServer((req,res)=>{
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log('request headers:',req.headers);
  log();

  if(req.url === '/favicon.ico') return;
  
  var file = __dirname;
  if(req.url === '/login' && req.method === 'GET'){
    file += '/login.html';
    fs.readFile(file,(err,data)=>{
      if(err){
        res.statusCode = 404;
        res.end(err.message);
      }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
      }
    })
  }
  if(req.url === '/login' && req.method === 'POST'){
    var user = '';
    req.on('data',(data)=>{
      return user+=data;
    });
    req.on('end',()=>{
        var usr = qs.parse(user);
        if(usr.username === 'zhangsan' && usr.pwd === '123'){
          if(typeof req.headers.cookie !== 'undefined'){
            var data = req.headers.cookie.split('=');
            logincount = Number(data[1])+1;
          }
          res.statusCode = 200;
          res.setHeader('Set-cookie',`logincount=${logincount}`);
          res.setHeader('Content-Type','text/plain;charset=utf8');
          res.end(`zhangsan这是您第 ${logincount} 次登陆`); 
        }
        else{
          res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
          res.end('用户名、密码错误！请重新输入！');
        }
    });
  }
}).listen(8081);