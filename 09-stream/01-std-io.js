#!/usr/bin/node

const stdin = process.stdin,
      stdout = process.stdout;

stdin.setEncoding('utf8');

stdin.on('data', (data) => {
    stdout.write(data);
});

stdin.push('hello!');
stdin.pipe(stdout);

for(var c='a'.charCodeAt(0); c<='z'.charCodeAt(0) ; c++) {
  stdout.write(String.fromCharCode(c));
  }
stdout.write('\n');

/*输入小写 输出大写值，Ctrl+D 退出程序
stdin.resume();

stdin.on('data',function(data){
  stdout.write(data.toString('utf8').toUpperCase());
});
*/
