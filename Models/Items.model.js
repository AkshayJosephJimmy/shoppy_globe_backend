import mongoose, { Model, Schema } from "mongoose";

const itemSchema=new Schema({
    name:String,
    price:Number,
    description:String

})

export const itemModel= mongoose.model('Item',itemSchema)