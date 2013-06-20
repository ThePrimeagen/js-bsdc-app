var connect = require('connect');

var app = connect()
    .use(connect.logger('default'))
    .use(connect.static('app-debug'))
    .listen(3000);
