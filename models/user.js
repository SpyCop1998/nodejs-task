const mongoose = require('mongoose'),
    { mongoConnection } = require('../db/mogo'),
    CollectionName = 'USER';

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        userType: {
            type: String,
            enum: ['user', 'admin'],
            require: true,
            default: 'user'
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
)

module.exports = mongoConnection.model(CollectionName, userSchema)
