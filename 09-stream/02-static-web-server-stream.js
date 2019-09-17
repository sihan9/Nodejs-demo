#!/usr/bin/node
const http = require('http'),
      log  = console.log,
      fs   = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return ;

  var fileName = __dirname + req.url;
  log(fileName);
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
log(process.pid);
