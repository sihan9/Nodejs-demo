#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      fs   = require('fs'),
      qs   = require('querystring'),
      log  = console.log;

//从data.js 中拿到数据，数据格式解析为为json字符串
var chapterList = JSON.parse(fs.readFileSync('./js/data.js','utf8'));

//服务响应
http.createServer((req,res)=>{
  //打印响应头字段
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  
  if(req.method === 'GET'){
      getHtml(req,res);
  }else if(req.method === 'POST'){
      retHtml(req,res);
  }else{
      process.exit();
  }
  
}).listen(8080);

function getHtml(req,res){
  var filepath = url.parse(req.url);//将url解析为对象形式
  var fileobj = qs.parse(filepath.query);//将URL 解析为对象（'a=1&b=2'=>{a:1,b:2}）

  // 如果url有chapterId字段，返回对应请求数据
  if(fileobj.chapterId){
    var data=JSON.stringify(chapterList[fileobj.chapterId-1]);
    res.writeHead(200,{
        'Content-Type':'text/plain;charset="utf-8"',
        'Content-Length':Buffer.byteLength(data),
        'Access-Control-Allow-Origin':'*'
    });
    res.end(data);
    //log(data);
  }
  //log(fileobj.index);

  var file = __dirname;
  //在 路由/data/ 下显示字符串类型data数据
  if(req.url === '/data/'){
    let data = JSON.stringify(chapterList);
    res.writeHead(200,{
      'Content-Type':'text/plain;charset="utf-8"',
      'Content-Length':Buffer.byteLength(data),
      'Access-Control-Allow-Origin':'*'
    });
    res.end(data);
  }
  //根据不同路由切换不同页面
  switch(req.url){
    case '/list/':
      file += '/chapterList.html';
      res.writeHead(200,{'Content-Type':'text/html'});
      break;
    case '/login/':
      file += '/login.html';
      res.writeHead(200,{'Content-Type':'text/html'});
      break;
    case '/listmanager/':
      file += '/list.html';
      res.writeHead(200,{'Content-Type':'text/html'});
      break;
    case '/addChapter/':
      file += '/addChapter.html';
      res.writeHead(200,{'Content-Type':'text/html'});
      break;
    default:
      //加载其他资源路径
      let listurl = req.url.split('?')[0];
      let listurls = listurl.split('/');
      for(var i =2 ;i<listurls.length;i++){
          file =file+'/' +listurls[i];
      }
      // var cpurl = '.'+req.url;
      // res.writeHead(200,{'Content-type':"text/css"});
      //log(file);
      break;
  }
  //读取文件到页面
  fs.readFile(file,(err,data)=>{
    if(err){
      //log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      // res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    }
  })

  // if(req.url !== '/'){
  //   var cpurl = '.'+req.url;
  //   res.writeHead(200,{'Content-type':"text/css"});
  //   fs.readFile(cpurl, function(err, data) {
  //       if (err) {
  //   //         console.error(err);
  //       }else{
  //           res.end(data);
  //       }
  //   });
  // }
}

function retHtml(req,res){}
