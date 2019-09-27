#!/usr/bin/node

//const cp = require('child_process');

console.log('i am child process id: %d',process.pid);

global.setInterval(function(){
  console.log('time is %d',Date.now());
},2000);

global.setTimeout(function(){
  console.log('bye');
  process.exit(1);
},16000);

process.on('message',function(msg){
  console.log('i got it %s',msg);
});
