#!/usr/bin/node

const Radio = require('./03-radio.js');

const station = {
  freq:'106.7',
  name:'music radio'
};

var radio = new Radio(station);

radio.on('play',(station)=>{
  console.log('"%s" FM %s opened!',station.name,station.freq);
  console.log('lalalalala......');
});
radio.on('play',(station)=>{
  console.log('name: %s',station.name);
  console.log('number: %s',radio.listenerCount('play'));
  console.log('name2 : %s',radio.eventNames());
});
radio.on('stop',(station)=>{
  console.log('"%s" FM %s closed!',station.name,station.freq);
});
