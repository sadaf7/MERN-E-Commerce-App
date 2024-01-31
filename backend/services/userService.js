const User = require("../models/UserModel");
const bcrypt = require('bcryptjs');
const jwtProvider = require('../config/jwtProvider.js')

async function createUser(userData){
    try {
        let { firstName,lastName,email,password } = userData;

        if(!firstName || !lastName || !email || !password){
            throw new Error("Incomplete data");
        }

        const isUserExist = await User.findOne({email});
        if (isUserExist) {
            throw new Error("Email already exists");
        }

        password = await bcrypt.hash(password,10);

        const user = User.create({
            firstName,
            lastName,
            email,
            password
        })
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById=async(userId)=>{
    try {
        const user = User.findById(userId);
        if(!user){
            throw new Error("User not found!");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserByEmail=async(email)=>{
    try {
        const user = User.findOne({email});
        if(!user){
            throw new Error("User not found!");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}
const getProfileByToken=async(token)=>{
    try {
        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user){
            throw new Error('The token is invalid!')
        }
        return user
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllUsers = async()=>{
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {createUser,findUserById,findUserByEmail,getProfileByToken,getAllUsers}