import mongoose from "mongoose";

const orderCollection = 'orders';

const orderSchema = mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    products: [],
    totalPrice: Number,
    status: String
});

const orderModel = mongoose.model(orderCollection, orderSchema);

export default orderModel;
