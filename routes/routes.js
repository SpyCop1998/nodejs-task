const User = require('../controller/user'),
    Group = require('../controller/group'),
    Message = require('../controller/message'),
    jwtAuth = require('../middleware/jwtAuth');

module.exports = (app) => {
    app.get('/checkServer', (req, res) => { res.send('working') })//done

    //user routes
    app.post('/createAdmin', User.createAdmin)//done

    app.post('/createUser', jwtAuth, User.createUser)//done
    app.put('/editUser', jwtAuth, User.editUser)//done
    app.delete('/deleteUser', jwtAuth, User.deleteUser)//done

    app.post('/userLogin', User.loginUser)//done
    //app.get('/userLogout', jwtAuth, User.logoutUser)

    //group routes

    app.post('/createGroup', jwtAuth, Group.createGroup)//done
    app.delete('/deleteGroup', jwtAuth, Group.deleteGroup)//
    app.get('/searchGroup/:pattern', jwtAuth, Group.searchGroup)//done
    app.post('/addUserToGroup', jwtAuth, Group.addUserToGroup)//done


    //message routes

    app.post('/likeMessage', jwtAuth, Message.likeMessage)
    app.post('/sendMessage', jwtAuth, Message.sendMessage)
}