#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);
console.log('cat 01-exec-file.js\n');

//cp.execFile('./02-child.js',[],function(err,out,error){
cp.execFile('cat', ['01-exec-file.js'], (err, stdout) => {
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(stdout);
});

