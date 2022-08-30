import requests

Headers = {
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBkNDU5ODMxOWEzNzJmMmEwY2VhYjgiLCJpYXQiOjE2NjE4MTQ3MzYsImV4cCI6MTY2MjY3ODczNn0.nLIg1mnpJVVXGcu6_IwmSEYPMj5PbNHjQZbuJonPVNga"}


def test_createAdmin():
    data = {
        "userName": "admin",
        "password": "password"
    }
    response = requests.post("http://localhost:4001/createAdmin", json=data)
    assert response.status_code == 200


def test_createUser():
    data = {
        "userName": "admin",
        "password": "password"
    }
    response = requests.post("http://localhost:4001/createUser", json=data, headers=Headers)
    assert response.status_code == 200


def test_editUser():
    data = {
        "userId": "630d462e319a372f2a0ceaba",
        "userName": "user1",
        "password": "password"
    }

    response = requests.put("http://localhost:4001/createUser", json=data, headers=Headers)
    assert response.status_code == 200


def test_deleteUser():
    data = {
        "userId": "630d462e319a372f2a0ceaba"
    }

    response = requests.delete("http://localhost:4001/createUser", json=data, headers=Headers)
    assert response.status_code == 200


def test_userLogin():
    data = {
        "userName": "admin",
        "password": "password"
    }
    response = requests.post("http://localhost:4001/createUser", json=data)
    assert response.status_code == 200

