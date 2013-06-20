function throwNotImplemented() {
    throw new Error('Method not implemented');
}

var BaseHandler = function() {

};

BaseHandler.prototype = {
    handleRequest: function(req, res) {
        console.log(req);
    },
    get: function(req, res) {
        throwNotImplemented();
    },
    put: function(req, res) {
        throwNotImplemented();
    },
    post: function(req, res) {
        throwNotImplemented();
    },
    delete: function(req, res) {
        throwNotImplemented();
    }
};

module.exports = function() {
    return new BaseHandler();
};
