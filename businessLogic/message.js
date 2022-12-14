const Message = require('../models/message'),
    lodash = require('lodash');

const sendMessage = async (grouId, userId, messageStr) => {
    const message = new Message({
        sentBy: userId,
        message:messageStr,
        grouId
    })
    await message.save()
    return true
}

const likeMessage = async (messageId, userId) => {
    await Message.findByIdAndUpdate(messageId, {
        $push: {
            likedBy: userId
        }
    })
    return true
}

module.exports = {
    sendMessage,
    likeMessage
}