const mongoose = require('mongoose'),
    { mongoConnection } = require('../db/mogo'),
    objectId = mongoose.Schema.objectId,
    CollectionName = 'MESSAGE';

const messageSchema = mongoose.Schema(
    {
        sentBy: {
            type: objectId,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        likedBy: {
            type: Array,
            require: true
        },
        groupId: {
            type: objectId,
            require: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
)

module.exports = mongoConnection.model(CollectionName, messageSchema)
