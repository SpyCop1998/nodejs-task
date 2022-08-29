const mongoose = require('mongoose'),
    { mongoUri } = require('../config/config');

exports.mongoConnection = mongoose.createConnection(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
})