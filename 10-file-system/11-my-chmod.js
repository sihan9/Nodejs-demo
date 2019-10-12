#!/usr/bin/node

const fs = require('fs'),
      mod = process.argv[2],
      dst = process.argv[3];
//fs.chmodSync('../template.js',0o764);

if(process.argv.length != 4) {
  console.error('命令行参数不正确！');
  process.exit(1);
}
try{
  fs.chmodSync(dst, parseInt(mod, 8));
} catch(err) {
  console.error(err.message);
  process.exit(2);
}
