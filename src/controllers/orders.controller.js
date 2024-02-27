import Business from "../dao/business.dao.js";
import Order from "../dao/order.dao.js";
import User from "../dao/user.dao.js";

const orderService = new Order();
const userService = new User();
const businessService = new Business();

export const getOrders = async(req, res) => {
    const orders = await orderService.getOrders();
    if(!orders){
        return res.status(404).send({message: 'Resource not found'});
    }
    res.send({status: 'success', result: orders});
}

export const getOrderById = async(req, res) => {
    const {oId} = req.params;
    const order = await orderService.getOrderById(oId);
    if(!order){
        return res.status(404).send({message: 'Resource not found'});
    }
    res.send({status: 'success', result: order});
}

export const createOrder = async(req, res) => {
    const {userId, businessId, products} = req.body;
    const user = await userService.getUserById(userId);
    const business = await businessService.getBusinessById(businessId);
    const order = business.products.filter(product => products.includes(product.id));
    const totalPrice = order.reduce((acc, prev) => acc + prev.price, 0);
    const orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);
    const finalOrder = {
        number: orderNumber,
        business: businessId,
        user: userId,
        status: 'pending',
        products: order.map(product => product.id),
        totalPrice
    }
    const result = await orderService.createOrder(finalOrder);
    user.orders.push(result._id);
    await userService.updateUser(userId, user);
    res.send({status: 'success', result});
}

export const resolveOrder = async(req, res) => {
    const {status} = req.query;
    const {oId} = req.params;
    const order = await orderService.getOrderById(oId);
    order.status = status;
    const result = await orderService.resolveOrder(oId, order);
    res.send({status: 'success', result});
}