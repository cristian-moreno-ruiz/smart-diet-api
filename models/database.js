const mongoose = require('mongoose');

class Database {
    constructor(url) {
        this._connect(url)
    }

    _connect(url) {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {console.log('Connected successfully to ', url)})
        .catch((error) => {console.error('Database connection error: ', error)})
    }
}

module.exports = Database