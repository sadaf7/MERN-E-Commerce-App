const Address = require('../models/AddressModel');
const OrderItems = require('../models/OrderItems');
const Order = require('../models/OrderModel');
const cartService = require('../services/cartService')


async function createOrder(user,shipAddress){
    let address;

    try {
        if(shipAddress._id){
            let existAddress = await Address.findById(shipAddress._id);
    
            address = existAddress;
        } else{
            address = new Address(shipAddress);
            address.user = user;
            await address.save();
    
            user.address.push(address)
            await user.save();
        }

        const cart = await cartService.findUserCart(user._id);  
        const orderItems = [];

        // create orderItems as much as cartItems
        for(let item of cart.cartItems){
            const orderItem = new OrderItems({
                price: item.price,
                product: item.product,
                quantity: item.quantity,
                size: item.size,
                userId: item.userId,
                discountedPrice: item.discountedPrice,
            })
            
            let createdOrderItem = await orderItem.save();
            
            orderItems.push(createdOrderItem)   
        }
        const createOrder = new Order({
            user,
            orderItems: orderItems,
            address,
            totalPrice: cart.totalPrice,
            totalDiscountedPrice: cart.totalDiscountedPrice,
            totalItem: cart.totalItem,
            discount:  cart.discount,
        })

        const savedOrder = await createOrder.save();
        return savedOrder
    } catch (error) {
        throw new Error(error.message)
    }
}

async function placeOrder(orderId){
    const order = await findOrderById(orderId);

    order.orderStatus = 'PLACED'
    order.paymentDetails.paymentStatus = "COMPLETED"

    return await order.save()
}
async function confirmedOrder(orderId){
    const order = await findOrderById(orderId);

    order.orderStatus = 'CONFIRMED'

    return await order.save()
}

async function shipOrder(orderId){
    const order = await findOrderById(orderId);

    order.orderStatus = 'SHIPPED'

    return await order.save()
}
async function deliverOrder(orderId){
    const order = await findOrderById(orderId);

    order.orderStatus = 'DELIVERED'

    return await order.save()
}
async function cancelOrder(orderId){
    const order = await findOrderById(orderId);

    order.orderStatus = 'CANCELLED'

    return await order.save()
}

async function findOrderById(orderId){
    try {
        const order = await Order.findById(orderId)
                            .populate('user')
                            .populate({path: 'orderItems',populate:{path: 'product'}})
                            .populate('shippingAddress')
        return order;
    } catch (error) {
        throw new Error(error.message)
    }
}

// order history of specific order
async function usersOrderHistory(userId){
    try {
        const order = await Order.find({user: userId, orderStatus: 'PLACED'})
                            .populate({path: 'orderItems',populate: {path: 'product'}}).lean()

        return order;
    } catch (error) {
        throw new Error(error.message)
    }
}
async function findAllOrder(){
    try {
        const order = await Order.find()
                            .populate({path: 'orderItems',populate: {path: 'product'}}).lean()

        return order;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function deleteOrder(orderId){
    try {
        const order = await findOrderById(orderId);
        return await Order.findByIdAndDelete(order._id)
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {createOrder,placeOrder,confirmedOrder,shipOrder,deliverOrder,cancelOrder,findOrderById,usersOrderHistory,findAllOrder,deleteOrder}