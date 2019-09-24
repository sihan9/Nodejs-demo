#!/usr/bin/node

function Baoz (){
  this.msg = '爆炸！';
}
var baoz = new Baoz();
var time = setTimeout(()=>{console.log(baoz.msg);},5000);
clearTimeout(time);
