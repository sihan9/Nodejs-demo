#!/usr/bin/node

const http = require('http'),
      addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //打印响应头
  console.log(res.headers);
  console.log('');
  //打印响应体
  res.pipe(process.stdout);
});

