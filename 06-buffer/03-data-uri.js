#!/usr/bin/node
const fs = require('fs'),
      http = require('http'),
      file = process.argv[2],
      path = require('path');
if(process.argv.length !== 3) {
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}
//示例参数 ./qr-code.jpg
try{
  var data = fs.readFileSync(file).toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}
var ext = path.extname(file);


//log(data);
var urldata = 'data:image/'+ext.slice(1,ext.length)+';base64,'+data;
//log(urldata);

var html = ''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title></title>'
  + '</head>'
  + '<body>'
    + '<img src="'+urldata+'">'
  + '</body>'
  + '</html>';
http.createServer((req,res)=>{
  res.end(html);             
}).listen(8080);
