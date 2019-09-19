#!/usr/bin/node

//设定重复次数
var i = 0;
var time = setInterval(()=>{
  if(i>4){
    time.unref();
  }else{
    i++;
    console.log('hey!!!!');
  }
},1000);

/*设定总时长
time.unref();
setTimeout(()=>{
  console.log('ending......');
},5000);*/


