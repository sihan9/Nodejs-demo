#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;
try{
//读取文件尺寸
  var len = fs.statSync(file).size,
      buf = new Buffer(len),
      fid = fs.openSync(file, 'r');

  fs.readSync(fid,buf,0,len,0);

  console.log(buf.toString('utf8'));

  fs.closeSync(fid);

}catch(e){
  console.log(e.message);
  process.exit(1);
}
