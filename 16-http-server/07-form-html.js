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
  }else if(req.method === 'POST' && req.url == '/'){
    //404 not find
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it.item);
    }
    res.end(gethtml());
  }else{
    rens.end('err!');
  }
  res.end('OK!');

}).listen(8080);

function gethtml(){
  //read html file
  var html = fs.readFileSync('todo.html').toString('utf8');
  //write real data 
  html = html.reqlace('%',items.map(function (item){return '<li>'+item+'</li>';}).join('\n'));
  //return html string
  return html;
}
