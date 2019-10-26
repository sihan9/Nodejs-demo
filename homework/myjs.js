#!/usr/bin/node

const url  = require('url'),
      fs   = require('fs'),
      qs   = require('querystring'),
      http = require('http'),
      path = require('path'),
      log  = console.log;
var express = require('express'),
    app = express();

//app.use(express.static('css'));
//app.use(express.static('js'));
//app.use(express.static('images'));

//log(path.join(__dirname,'static'));
app.use(express.static(path.join(__dirname,'public')));

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  req.pipe(process.stdout);
  //log(req.url === '/list');
  if(req.method ==='GET' && req.url ==='/list/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(fs.readFileSync('public/chapterList.html').toString('utf8')),
      'Access-Control-Allow-Origin': '*'
    }); 
    res.end(fs.readFileSync('public/chapterList.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/login/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./login.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/listmanager/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./list.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/addChapter/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./addChapter.html').toString('utf8'));
    
  /*}else if(req.url === '/list/css/base.css'){
    res.writeHead(200,{'Content-Type':'text/css'});
  }else if(req.url ==='/list/css/style.css'){
    res.writeHead(200,{'Content-Type':'text/css'});
  */
  }else{
    res.end(req.url+'error!');
  }

}).listen(8080);

