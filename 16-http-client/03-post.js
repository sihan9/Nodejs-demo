#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url  = require('url'),
      msg  = process.argv[2]||'i am your friend!';
var option = url.parse(addr);
option.method = 'POST';

var req = http.request(option,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //打印响应头
  console.log(res.headers);
  console.log('');
  //打印响应体
  res.pipe(process.stdout);
});
req.end(msg+'\n');
