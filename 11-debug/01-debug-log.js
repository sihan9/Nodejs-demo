#!/usr/bin/node

//NODE_DEBUG=foo ./01-debug-log.js
const util  = require('util');
const log = util.debuglog('foo');

log('hello form foo [%d]',123);
