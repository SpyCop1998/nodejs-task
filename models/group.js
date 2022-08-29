const mongoose = require('mongoose'),
    { mongoConnection } = require('../db/mogo'),
    objectId = mongoose.Schema.objectId,
    CollectionName = 'GROUP';

const groupSchema = mongoose.Schema(
    {
        createdBy: {
            type: objectId,
            require: true
        },
        user: {
            type: Array
        },
        groupName: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
)

module.exports = mongoConnection.model(CollectionName, groupSchema)
