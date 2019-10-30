#!/usr/bin/node
const http = require('http'),
      qs = require('querystring'),
      log = console.log,
      mysql = require('mysql'),
      con   = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ddd',
        database:'test'
      });
        
con.connect();

var items = '';      


http.createServer((req,res)=>{

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  req.pipe(process.stdout);

  if(req.method === 'GET' && req.url === '/'){
    //200 ok
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(getHTML());
  }else if(req.method === 'POST' && req.url == '/'){
    //submit data
    var it = '';
    req.on('data',(data)=>{
      it +=data;
    });
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item);
      }
      insert();
      res.end(getHTML());
    });
  }else{
    res.end('error!');
  }
}).listen(8080);

function getHTML(){
  select();
  log('debug:items:',items);
  return '<!DOCTYPE html><html><head><title>TODO List</title><head><body><h1>TODO List</h1>'+
  '<ul>'+
  items.map(function(item){ return '<li>' +item+'</li>';}).join('\n')+
  '</url>\n'+
  '<form method="POST" action="/">'+
  '<input type="text" name="item">'+
  '<input type="submit" value="submit">'+
  '</form>'+
  '</body></html>';

}
function select(){
  con.query('select* from todo',(err,result)=>{
    if(err){
      console.err(err.message);
      process.exit();
    }
    items = result;
  });
}
function insert(){
  con.query('insert into todo(item)',(err,result)=>{
    if(err){
      console.err(err.message);
      process.exit();
    }
    items = result;
  });
}
