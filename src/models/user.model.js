import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_Name: String,
    email: String,
    gender: {
        type: String,
    }
});

userSchema.index({first_name: 1, last_Name: 1});

export const userModel = mongoose.model(userCollection, userSchema);