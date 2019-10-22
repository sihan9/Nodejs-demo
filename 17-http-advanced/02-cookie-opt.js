#!/usr/bin/node
const http = require('http'),
      log = console.log;

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
}).listen(8080);
//git pull origin master