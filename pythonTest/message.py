import requests

Headers = {
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBkNDU5ODMxOWEzNzJmMmEwY2VhYjgiLCJpYXQiOjE2NjE4MTQ3MzYsImV4cCI6MTY2MjY3ODczNn0.nLIg1mnpJVVXGcu6_IwmSEYPMj5PbNHjQZbuJonPVNga"}


def test_likeMessage():
    data = {
        "messageId": "630d4bac2a2d5a999b61f8d6"
    }
    response = requests.post("http://localhost:4001/likeMessage", json=data, headers=Headers)
    assert response.status_code == 200


def test_sendMessage():
    data = {
        "message": "hey",
        "groupId": "630d483fcf4a8f5c800331ff"
    }
    response = requests.post("http://localhost:4001/sendMessage", json=data, headers=Headers)
    assert response.status_code == 200
