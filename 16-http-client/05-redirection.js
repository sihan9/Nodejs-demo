#!/usr/bin/node

const http = require('http'),
      addr ='http://www.sian.com/';

function get(addr){
  http.get(addr,function(res){
    //打印起始行
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    //打印响应头
    console.log(res.headers);
    console.log('');
    //打印响应体
    res.pipe(process.stdout);

    if(res.statusCode < 400 && res.statusCode >= 300){
      get(res.headers.location);
    }
  });
}
get(addr);
//process.exit();
