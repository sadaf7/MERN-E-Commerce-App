const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SEC = "sjdsjdbsjdbsajdbsj"

const generateToken=(userId)=>{
    const token = jwt.sign({userId},JWT_SEC,{expiresIn: '48h'})
    return token;
}

const getUserIdFromToken=async(token)=>{
    const  decodedToken= jwt.verify(token,JWT_SEC)
    return decodedToken.userId;
}

module.exports = {generateToken,getUserIdFromToken}