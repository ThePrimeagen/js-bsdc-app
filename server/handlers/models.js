var _ = require('lodash');
var baseHandler = require('./base')();
var handler = _.assign({
    get: function(req, res) {
        res.end('models end');
    },
    put: function(req, res) {
        res.end('models put');
    },
    post: function(req, res) {
        res.end('models post');
    },
    del: function(req, res) {
        res.end('models delete');
    }
}, baseHandler);

module.exports = handler;
