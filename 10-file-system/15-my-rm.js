#!/usr/bin/node

const fs = require('fs'),
      join = require('path'.join),
      dst = process.argv[2];

if(type(dst) === 'undefined'){
  console.error('请指定要删除的文件名或目录名！');
  process.exit(1);
}
if(!fs.existsSync(dst)){
  console.error('%s not exist!',dst);
  process.exit(2);
}
if(fs.statSync(dst).isFile())
  fs.unlinkSync(dst);
if(fs.statSync(dst).isDirectory())
  deleDir(dst);
function deleDir (dir){
  var files = fs.readdirSync(dir);
  
  for(var i = 0 ;i<files.length;i++){
    var file = join(dir,files[i]);
    if(fs.statSync(file).isFile()){
      fs.unlinkSync(file);
      continue;
    }
    if(fs.statSync(file).isDirectory()){
      deleDir(file);
    }
  }

  fs.rmdirSync(dir);
}

