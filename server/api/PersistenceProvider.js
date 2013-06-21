var ModelDB = require('../../app/node/ModelDB');

module.exports = {
    /**
     * Gets the model from the database.
     * @returns {Q.promise}
     */
    get: function() {
        return ModelDB.getModel();
    },

    /**
     * Gets the model from the database.
     * @returns {Q.promise}
     */
    post: function(model) {
        return ModelDB.updateModel(model);
    }
}