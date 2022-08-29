const User = require('../models/user'),
    lodash = require('lodash'),
    bcrypt = require('bcrypt');

const createUser = async (userName, password) => {
    const user = new User({
        userName,
        password,
    })
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    const result = await user.save()
    return result
}

const deleteUser = async (userId) => {
    await User.findByIdAndDelete(userId)
    return true
}

const editUser = async (userId, updatedInfo) => {

    let password = lodash.get(updatedInfo, 'password')
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt)

    await User.findByIdAndUpdate(userId, {
        $set: {
            userName: lodash.get(updatedInfo, 'userName'),
            password
        }
    })

    return true
}

const loginUser = async (userName, password) => {
    const user = await User.findOne({ userName })
    if (!user) {
        return false
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return false
    }

    return user
}

const logoutUser = () => { }

const createAdmin = async (userName, password) => {
    const user = new User({
        userName,
        password,
        userType: 'admin'
    })
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    const result = await user.save()
    return result
}

module.exports = {
    createUser,
    deleteUser,
    editUser,
    loginUser,
    logoutUser,
    createAdmin
}