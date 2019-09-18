#!/usr/bin/node

const log = console.log;

log('CPU:',process.arch);
log('OS:',process.platform);
log('PID:',process.pid);
log('execPath:',process.execPath);
/*
 * process.stdin.on('data',function (data){
 *   log(data);
 *     )}*/
log('Version:',process.version);
log('uid:',process.getuid());
log('git:',process.getgid());
log('cwd:%s\n',process.cwd());

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);
