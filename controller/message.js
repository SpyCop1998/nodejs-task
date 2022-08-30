const Message = require('../businessLogic/message'),
    lodash = require('lodash');

const sendMessage = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.message', false)) {
            return res.send('invalid input')
        }

        if (!lodash.get(req, 'body.groupId', false)) {
            return res.send('invalid input')
        }
        const messageData = req.body
        await Message.sendMessage(messageData.groupId, req.params.userId, messageData.message)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}
const likeMessage = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.messageId', false)) {
            return res.send('invalid input')
        }

        const messageData = req.body

        await Message.likeMessage(messageData.messageId, req.params.userId)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}

module.exports = {
    sendMessage,
    likeMessage
}