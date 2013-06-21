var dbHandler = require('./db');
var q = require('q');

var SQL_INSERT = 'INSERT INTO models VALUES ($1)';
var SQL_SELECT_TOP = 'SELECT * FROM models ORDER BY generation DESC LIMIT 1';

module.exports = {
    /**
     * Gets the latest generation model.
     *
     * @returns {Q.promise}
     */
    getModel: function() {
        var db = dbHandler.getDb();
        var deferred = q.defer();

        db.serialize(function() {
            db.query(SQL_SELECT_TOP, function(err, result) {
                if (err) {
                    console.log("ERROR!!!: " + err);
                    deferred.reject(err);
                } else {
                    deferred.resolve(result);
                }
            });
        });

        return deferred.promise;
    },

    /**
     * Takes in the latest serialized module and increments the
     * generation
     *
     * @param {Q.promise} model
     */
    updateModel: function(model) {
        var db = dbHandler.getDb();
        var deferred = q.defer();

        db.serialize(function() {
            db.query(SQL_INSERT, model, function(err, result) {
                if (err) {
                    console.log("ERROR!!!: " + err);
                    deferred.reject(err);
                } else {
                    deferred.resolve(result);
                }
            });
        });

        return deferred.promise;
    }
}