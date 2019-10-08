#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      items = ['eat'],
      log = console.log;

http.createServer((req,res)=>{

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
   

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(gethtml(),'utf8'),
    });
    res.end(gethtml());
  }else{
    //404 not find
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it.item);
    }
    res.end(gethtml());
  }
  res.end('OK!');

}).listen(8080);

function gethtml(){
  return '<!DOCTYPE html><html><head><title>TODO List</title><head><body><h1>TODO List</h1>'+
  '<ul>'+
  items.map(function(item){ return '<li>' +item+'</li>';}).join('\n')+
  '</url>\n'+
  '<form method="GET" action="/">'+
  '<input type="text" name="item">'+
  '<input type="submit" value="submit">'+
  '</form>'+
  '</body></html>';

}
