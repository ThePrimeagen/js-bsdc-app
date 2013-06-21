var connect = require('connect');
var modelsHandler = require('./handlers/models');
var operationsHandler = require('./handlers/operations');

var app = connect()
    .use(connect.logger('default'))
    .use(connect.static('app-debug'))
    .use('/models', function(req, res) {
        console.log('test');
        modelsHandler.handleRequest(req, res);
    })
    .use('/operations', function(req, res) {
        console.log('operations');
        operationsHandler.handleRequest(req, res);
    })
    .listen(3000);


