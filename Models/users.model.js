import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema= new Schema({
    name:String,
    email:String,
    password:String

})

export const userModel= mongoose.model('users',userSchema)