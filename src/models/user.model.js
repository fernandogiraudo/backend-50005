import mongoose from "mongoose";

const userCollection = 'usuarios';

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

export const userModel = mongoose.model(userCollection, userSchema);