import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: String,
    email: String,
    gender: String
});

export const userModel = mongoose.model(userCollection, userSchema);

