function get(req, res) {
    console.log('get');
    res.end('get');
}

function list(req, res) {
    console.log('list');
    res.end('list');
}

function update(req, res) {
    console.log('update');
    res.end('update');
}

module.exports = {
    get: get,
    list: list,
    update: update
};
