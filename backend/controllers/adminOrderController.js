const orderService = require('../services/orderService.js')


const getAllOrders=async(req,res)=>{
    try {
        const orders = await orderService.findAllOrder();
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

const confirmedOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const cancelledOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const deleteOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const deliverOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const placeOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.placeOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const shipOrder=async(req,res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).json({orders:orders});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}



module.exports = {getAllOrders,confirmedOrder,deleteOrder,deliverOrder,placeOrder,shipOrder,cancelledOrder}