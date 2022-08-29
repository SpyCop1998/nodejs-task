const User = require('../controller/user'),
    Group = require('../controller/group'),
    Message = require('../controller/message'),
    jwtAuth = require('../middleware/jwtAuth');

module.exports = (app) => {
    app.get('/checkServer', (req, res) => { res.send('working') })

    //user routes
    app.post('/createAdmin', User.createAdmin)

    app.post('/createUser', jwtAuth, User.createUser)
    app.put('/editUser', jwtAuth, User.editUser)
    app.delete('/deleteUser', jwtAuth, User.deleteUser)

    app.post('/userLogin', User.loginUser)
    app.get('/userLogout', jwtAuth, User.logoutUser)

    //group routes

    app.post('/createGroup', jwtAuth, Group.createGroup)
    app.delete('/deleteGroup', jwtAuth, Group.deleteGroup)
    app.get('/searchGroup', jwtAuth, Group.searchGroup)
    app.post('/addUserToGroup', jwtAuth, Group.addUserToGroup)


    //message routes

    app.post('/likeMessage', jwtAuth, Message.likeMessage)
    app.post('/sendMessage', jwtAuth, Message.sendMessage)
}