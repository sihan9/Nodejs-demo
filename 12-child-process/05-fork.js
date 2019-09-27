#!/usr/bin/node

const cp = require('child_process');

var child = cp.fork('./02-child.js');

console.log('i am father id:',process.pid);
 
global.setTimeout(function(){
  child.send('hello i am yout father!');
},2000);
