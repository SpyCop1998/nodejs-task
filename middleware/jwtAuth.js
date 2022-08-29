const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/config");


const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.send("invalid attempt");
    }
    try {
        decode = jwt.verify(token, jwtKey);
        req.params.userId = decode.userId
    } catch (err) {
        return res.send("invalid attempt");
    }
    return next();
};

module.exports = verifyToken;
