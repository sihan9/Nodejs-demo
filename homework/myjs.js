#!/usr/bin/node

const url  = require('url'),
      fs   = require('fs'),
      qs   = require('querystring'),
      http = require('http'),
      //path = require('path'),
      log  = console.log;
//var express = require('express'),
//    app = express();

//app.use(express.static(path.join(__dirname,'public')));

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  req.pipe(process.stdout);
  if(req.method ==='GET' && req.url ==='/list/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./chapterList.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/login/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./login.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/listmanager/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./list.html').toString('utf8'));
  }else if(req.method === 'GET' && req.url ==='/addChapter/'){
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./addChapter.html').toString('utf8'));
  }else if(req.method === 'GET' && (req.url ==='/detail?chapterId=1' ||req.url ==='/detail?chapterId=2'||req.url ==='/detail?chapterId=3'||req.url ==='/detail?chapterId=4')){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fs.readFileSync('./chapter.html').toString('utf8'));
  }else{
    res.end(req.url+'error!');
  }

}).listen(8080);

