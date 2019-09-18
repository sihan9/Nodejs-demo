#!/usr/bin/node

var fn = process.argv[2];

if(fn === '--help' || fn === '-h' || fn === 'undefined'){
  console.log('请输入参数！');
}else{
  console.log(fn,'=',eval(fn));
}


/*
 * console.log(process.argv.length);
 * console.log(process.argv);*/
