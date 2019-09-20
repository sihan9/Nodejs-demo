#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];


fs.watch(dst,function (evt,file){
  console.log("%s happend with file:%s",evt,file);
});//监控目录
//fs.watchFile(dst);//监控文件




