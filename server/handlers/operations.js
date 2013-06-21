var _ = require('lodash');
var baseHandler = require('./base')();
var handler = _.assign({
    get: function(req, res) {
        res.end('operations end');
    },
    put: function(req, res) {
        res.end('operations put');
    },
    post: function(req, res) {
        res.end('operations post');
    },
    del: function(req, res) {
        res.end('operations delete');
    }
}, baseHandler);

module.exports = handler;
