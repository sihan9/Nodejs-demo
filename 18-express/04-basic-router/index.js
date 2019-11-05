const express = require('express'),
      app = express();

function r3(req,res,next){
  console.log('r3');
  next();
}
function r4(req,res,next){
  console.log('r4');
  next();
}

app.get('/',[r3,r4],function (req,res,next){
  console.log('r1');
  next();
},function (req,res,next){
  console.log('r2');
  res.end('OK!');
});

app.get('/json',function (req,res,next){
  res.json({'username':'sihan','pwd':'12345'});
});

app.get('/download',function (req,res,next){
  res.download('./package.json');
});

app.get('/courses/:id',function (req,res,next){
  console.log(req.params.id);
  res.end('OK!!');
});

app.get('/posts/:year/:month',function (req,res,next){
  console.log('year:',req.params.year);
  console.log('month:',req.params.month);
  res.end('ok!!!');
});

app.listen(8080);

