const orderService = require('../services/orderService.js')


const createOrder = async(req,res)=>{
    const user =await req.user;
    try {
        let createdOrder = await orderService.createOrder(user,req.body)
         res.status(201).json(createdOrder)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const findOrderById = async(req,res)=>{
    
    try {
        let createdOrder = await orderService.findOrderById(req.params.id)
         res.status(201).json(createdOrder)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const orderHistory = async(req,res)=>{
    const user = req.user;
    try {
        let createdOrder = await orderService.usersOrderHistory(user._id)
         res.status(201).json(createdOrder)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


module.exports = {createOrder,findOrderById,orderHistory}