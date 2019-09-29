#!/usr/bin/node

const url = require('url'),
      addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

var protocol = url.parse(addr).protocol;
console.log(protocol);

const http = (protocol === 'http:')?require('http'):require('https');
//process.exit();

http.get(addr,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //打印响应头
  console.log(res.headers);
  console.log('');
  //打印响应体
  res.pipe(process.stdout);
});

