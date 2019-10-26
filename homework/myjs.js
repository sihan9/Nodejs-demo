#!/usr/bin/node

const url  = require('url'),
      qs   = require('querystring'),
      log  = console.log;
var listurl = 'https://sihan9.github.io/nodejs-demo/homework/chapterList.html';
const http = require('http');
//https = require('https');
 
http.createServer((req, res) => {
  var addr = url.parse(req.url);
  if(addr.pathname === '/list' ){
    http.get(listurl,function(res){
      res.pipe(process.stdout);
    });
  }
  //log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  //log(req.headers);
  //log('');

  //req.pipe(process.stdout);

  res.end('OK!');

}).listen(8080);
