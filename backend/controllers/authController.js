const userService = require('../services/userService.js')
const jwtProvider = require('../config/jwtProvider.js')
const cartService = require('../services/cartService.js')
const bcrypt = require('bcryptjs');

const registerUser = async(req,res)=>{
    try {
        const user = await userService.createUser(req.body);
        const jwt = await jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(201).json({jwt,message: 'Registered successfully'})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(500).json({msg:'Please enter all fields'});
        }

        const user = await userService.findUserByEmail(email);
        if(!user){
            return res.status(500).json({msg:"Invalid email or password"});
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({msg:"Invalid email or password"});
        }

        const jwt = await jwtProvider.generateToken(user._id);
        res.status(200).json({token:jwt,user});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = {registerUser,login};