import requests

Headers = {
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBkNDU5ODMxOWEzNzJmMmEwY2VhYjgiLCJpYXQiOjE2NjE4MTQ3MzYsImV4cCI6MTY2MjY3ODczNn0.nLIg1mnpJVVXGcu6_IwmSEYPMj5PbNHjQZbuJonPVNga"}


def test_createGroup():
    data = {
        "groupName": "neuhis"
    }
    response = requests.post("http://localhost:4001/createGroup", json=data, headers=Headers)
    assert response.status_code == 200


def test_deleteGroup():
    data = {
        "groupId": "630d484dcf4a8f5c80033201"
    }
    response = requests.delete("http://localhost:4001/deleteGroup", json=data, headers=Headers)
    assert response.status_code == 200


def test_addUserToGroup():
    data = {
        "groupId": "630d483fcf4a8f5c800331ff",
        "userId": "630d4598319a372f2a0ceab8"
    }
    response = requests.post("http://localhost:4001/addUserToGroup", json=data, headers=Headers)
    assert response.status_code == 200

def test_searchGroup():
    response = requests.get("http://localhost:4001/searchGroup/GG", headers=Headers)
    assert response.status_code == 200



