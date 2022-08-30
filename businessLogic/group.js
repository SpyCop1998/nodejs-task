const Group = require('../models/group'),
    lodash = require('lodash');

const createGroup = async (userId, groupName) => {
    const group = new Group({
        createdBy: userId,
        groupName
    })
    const result = await group.save()
    return result
}

const addUserToGroup = async (userId, grouId) => {
    await Group.findByIdAndUpdate(grouId, {
        $push: {
            user: userId
        }
    })
    return true
}

const searchGroup = async (pattern) => {
    const groups = await Group.find(
        {
            groupName: new RegExp(pattern, 'i'),
        }
    )

    return groups
}

const deleteGroup = async (groupId) => {
    await Group.findByIdAndDelete(groupId)
}

module.exports = {
    createGroup,
    addUserToGroup,
    searchGroup,
    deleteGroup
}