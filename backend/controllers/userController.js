const userService = require('../services/userService.js')

const getUserProfile=async(req,res)=>{
    try {
        const jwt = req.headers.authorization?.split(' ')[1]
    if(!jwt){
        return res.status(401).json({message:"Invalid token"})
    }
    console.log(jwt)
    const user = await userService.getProfileByToken(jwt)
    return res.status(200).send(user);
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}
const getAlluser=async(req,res)=>{
    try {
        const users = await userService.getAllUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}



module.exports = {getUserProfile,getAlluser}