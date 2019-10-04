#!/usr/bin/node
const fs = require('fs'),
      dir = process.argv[2],
      newDir = process.argv[3];
if(dir === 'mkdir'){
  if(typeof(newDir) === 'undefined'){
    console.error('没有指定要创建的目录名称！');
    process.exit();                       
  }
  fs.mkdirSync(newDir);
}else if(dir === 'list'){
  var i = 0;
  var arr = [];
  var Files = function(fileName,fileSize){
    this.fileName = fileName;
    this.fileSize = fileSize;
  };
  while(typeof(fs.readdirSync(__dirname)[i]) !== 'undefined'){
    var data = fs.statSync('./'+fs.readdirSync(__dirname)[i]);
    var file = new Files(fs.readdirSync(__dirname)[i],data.size);
    arr[i] = JSON.stringify(file); 
    i++;                            
  }
}else{
  console.log('参数不正确！请输入"list"查看文件下目录或输入"mkdir"创建新目录');
}

console.log(arr);

process.exit();
