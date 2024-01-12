import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name:{
        type:String
    },
    last_name: String,
    email: String,
    gender: {
        type:String,
    }
});

userSchema.plugin(mongoosePaginate);

export const userModel = mongoose.model(userCollection, userSchema)