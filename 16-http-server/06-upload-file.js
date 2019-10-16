#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querString');

http.createServer((req,res)=>{

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  var fl = '';
  
  req.setEncoding('binary');
  req.on('data',(data)=>{
    fl += data;
  });
  req.on('end',()=>{
    //parse fl
    //get file name
    var filename = qs.parse(fl.split('\r\n')[1].split(';')[2]).trim().filename;
    filename = filename.slice(1,filename.length-1);
    log(filename);
    //get file data
    var filedata = fl.split('\r\n')[4];
    log(filedata);

    fs.writeFileSync(filename,filedata,{'encoding':'binary'});
  });
  req.pipe(process.stdout);

  res.end('OK!');

}).listen(8080);
