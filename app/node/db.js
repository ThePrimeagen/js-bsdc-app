var sqlite = require('sqlite');
var q = require('q');
var db = new sqlite.Database('./db/bsdc.db');

// Validates that the database has the correct tables in place.
db.serialize(function() {

    var count = 0;
    db.each('SELECT * FROM sqlite_master WHERE name = "models" and type="table";', function(err, row) {
        count++;
    });

    if (count === 0) {
        db.run("CREATE TABLE models (data TEXT, generation INTEGER PRIMARY KEY AUTOINCREMENT)");
    }
});

// Very basic quering
module.exports = {

    /**
     * Gets the database object
     * @param callback
     */
    getDb: function() {
        if (!db.open) {
            db = new sqlite.Database('./db/bsdc.db');
        }
        return db;
    },

    /**
     * Closes the connection to the database.
     */
    close: function() {
        db.close();
    }
};