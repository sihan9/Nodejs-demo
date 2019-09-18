#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];

console.log(fs.mkdirSync(dir));





