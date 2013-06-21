var _ = require('lodash');
var baseHandler = require('./base')();
var handler = _.assign(baseHandler, {
    get: function(req, res) {
        res.end('models get');
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
});

module.exports = handler;
