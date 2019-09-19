#!/usr/bin/node

var n = process.argv[2],
    log = console.log,
    err = console.error;
if(typeof(n) === 'undefined' || isNaN(Number(n))){
  err('命令行参数不正确');
  process.exit(1);
}else{
  log('退出码:',n);
  process.exit(n);
}
