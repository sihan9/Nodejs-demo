#!/usr/bin/node
const log=console.log;
var data = process.argv[2];

if(typeof(data) === 'undefined'){
  log('请输入base64编码字符串！');
}else{
  var buf = new Buffer(data,'base64');
  var info = buf.toString('utf8').split(':');
  log('usr:%s,pwd:%s',info[0],info[1]);
}
