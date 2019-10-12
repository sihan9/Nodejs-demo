#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

try{
  if(fs.existsSync(src)){
    fs.renameSync(src, dst);
  }else{
    console.error(err.message);
    process.exit(1);
  }
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
