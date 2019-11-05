const express = require('express'),
      app = express();

app.use(express.static('.'));//使用中间件
app.listen(8080);
