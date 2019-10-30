#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      log  = console.log;

var buf = {};

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;

  var fileName = __dirname + req.url;
  log(fileName);
  if(!fs.existsSync(fileName))return;
  
  if(!buf[fileName]){
    log('read file');
    buf[fileName] = fs.readFileSync(fileName);
  }
  res.end(buf[fileName]);
}).listen(8080);
log(process.pid);
