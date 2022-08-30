const Group = require('../businessLogic/group'),
    lodash = require('lodash');

const createGroup = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.groupName', false)) {
            return res.send('invalid input')
        }
        await Group.createGroup(req.params.userId, req.body.groupName)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}
const addUserToGroup = async (req, res) => {
    //check if the user exists or not
    try {
        if (!lodash.get(req, 'body.groupId', false)) {
            return res.send('invalid input')
        }
        if (!lodash.get(req, 'body.userId', false)) {
            return res.send('invalid input')
        }

        await Group.addUserToGroup(req.body.userId, req.body.groupId)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}
const searchGroup = async (req, res) => {
    try {
        if (!lodash.get(req, 'params.pattern', false)) {
            return res.send('invalid input')
        }
        const result = await Group.searchGroup(req.params.pattern)
        return res.send(result)
    } catch (error) {
        return res.status(500).send('error')
    }
}
const deleteGroup = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.groupId', false)) {
            return res.send('invalid input')
        }
        await Group.deleteGroup(req.body.groupId)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}

module.exports = {
    createGroup,
    addUserToGroup,
    searchGroup,
    deleteGroup
}