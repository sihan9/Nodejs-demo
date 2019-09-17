#!/usr/bin/node

const Read = require('stream').Readable;

var read = new Read();

read.push('hello\n');
read.push('word!');
read.push(null);

read.pipe(process.stdout);
