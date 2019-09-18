#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;
//流
var source = fs.createReadStream(file);

source.pipe(process.stdout);

source.on('error',function(err){
  console.log(err.message);
});
