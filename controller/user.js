const User = require('../businessLogic/user'),
    lodash = require('lodash'),
    jwt = require('jsonwebtoken'),
    { jwtKey } = require('../config/config');

const createUser = async (req, res) => {

    try {
        if (!lodash.get(req, 'body.userName', false)) {
            return res.send('invalid input')
        }
        if (!lodash.get(req, 'body.password', false)) {
            return res.send('invalid input')
        }
        const userData = req.body

        const user = await User.createUser(userData.userName, userData.password)

        const token = jwt.sign(
            {
                userId: user.id,
            },
            jwtKey,
            { expiresIn: 864000 }
        )
        return res.send(token)
    } catch (error) {
        return res.status(500).send('error')
    }
}

const deleteUser = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.userId', false)) {
            return res.send('invalid input')
        }
        await User.deleteUser(req.body.userId)
        return res.send('success')
    } catch (error) {
        return res.status(500).send('error')
    }
}

const editUser = async (req, res) => {
    try {

        if (!lodash.get(req, 'body.userId', false)) {
            return res.send('invalid input')
        }

        if (!lodash.get(req, 'body.userName', false)) {
            return res.send('invalid input')
        }

        if (!lodash.get(req, 'body.password', false)) {
            return res.send('invalid input')
        }

        const userData = req.body

        await User.editUser(userData.userId, { userName: userData.userName, password: userData.password })
        return res.send('success')

    } catch (error) {
        return res.status(500).send('error')
    }
}

const loginUser = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.userName', false)) {
            return res.send('invalid input')
        }
        if (!lodash.get(req, 'body.password', false)) {
            return res.send('invalid input')
        }
        const userData = req.body
        const user = await User.loginUser(userData.userName, userData.password)

        if (!user) {
            return res.send('invalid user')
        }


        const token = jwt.sign(
            {
                userId: user.id,
            },
            jwtKey,
            { expiresIn: 864000 }
        )
        return res.send(token)

    } catch (error) {
        return res.status(500).send('error')
    }
}

const logoutUser = (req, res) => { }

const createAdmin = async (req, res) => {
    try {
        if (!lodash.get(req, 'body.userName', false)) {
            return res.send('invalid input')
        }
        if (!lodash.get(req, 'body.password', false)) {
            return res.send('invalid input')
        }
        const userData = req.body

        const user = await User.createAdmin(userData.userName, userData.password)

        const token = jwt.sign(
            {
                userId: user.id,
            },
            jwtKey,
            { expiresIn: 864000 }
        )
        return res.send(token)
    } catch (error) {
        return res.status(500).send('error')
    }
}

module.exports = {
    createUser,
    deleteUser,
    editUser,
    loginUser,
    logoutUser,
    createAdmin
}