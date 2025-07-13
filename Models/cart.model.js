import mongoose, { Schema } from "mongoose";


    
    const cartschema= new Schema({
        item:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Item"
        },
        quantity:Number
    })

    export const cartModel=mongoose.model('cart',cartschema)