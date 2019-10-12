#!/usr/bin/node

const fs = require('fs');

var w = fs.watch(__dirname,console.log);

process.on('SIGINT',() =>{
  w.close();
  console.log('unwitch the directory');
  console.log('Game over after ten second...');

  setTimeout(()=>{
    process.exit();
  },5000);

});

/*const fs = require('fs'),
      dst = process.argv[2];


fs.watch(dst,function (evt,file){
  console.log('%s happend with file:%s',evt,file);
});//监控目录
//fs.watchFile(dst);//监控文件*/
