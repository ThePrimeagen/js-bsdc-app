function throwNotImplemented() {
    throw new Error('Method not implemented');
}

module.exports = function() {
    return {
        handleRequest: function(req, res) {
            console.log(req);
            switch(req.method.toUpperCase()) {
                case('GET'):
                    this.get(req, res);
                    break;
            }
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
};
