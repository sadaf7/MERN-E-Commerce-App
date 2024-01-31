const jwtProvider = require('../config/jwtProvider.js')
const userService = require('../services/userService.js')

const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"invalid token"});
        }
        const userId = await jwtProvider.getUserIdFromToken(token)
        const user = await userService.findUserById(userId);
        req.user = user;

        next();
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports = {authenticate}