import group
import message
import user

def test_user_rest_api():
    user.test_createAdmin()
    user.test_editUser()
    user.test_createUser()
    user.test_deleteUser()
    user.test_userLogin()

def test_message_rest_api():
    message.test_likeMessage()
    message.test_sendMessage()

def test_group_rest_api():
    group.test_addUserToGroup()
    group.test_createGroup()
    group.test_deleteGroup()
    group.test_searchGroup()