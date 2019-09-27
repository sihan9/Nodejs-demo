#!/usr/bin/node

const cp = require('child_process');

var child = cp.spawn('./02-child.js',[],{'detached':true,'stdio':['ignore',1,2]});//分离父子进程

console.log('i am father id:',process.pid);

//child.stdout.pipe(process.stdout);

//child.stderr.pipe(process.stderr);

global.setTimeout(function(){
  console.log('father bye!');
  process.exit();
},5000);
