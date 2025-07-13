import { json } from "express";
import { cartModel } from "../Models/cart.model.js";
import { itemModel } from "../Models/Items.model.js";





export async function addToCart(req,res){
 
const{item,quantity}=req.body
const existingItem= await itemModel.findById(item)
// validating if the prduct is in item collection
if(!existingItem){
          return res.status(400).json({ error: "Invalid product ID" });
}
const populateCart= new cartModel({item:item,quantity})
const savedCart= await populateCart.save()

const finalCart=await savedCart.populate('item')
finalCart.save()
.then(()=>res.status(200).json(finalCart))
.catch(()=>res.send("err"))


}
export async function updateQty(req,res){
      const{quantity}=req.body
    const cartId=req.params.id;
    try{

        const updatedQty=await cartModel.findByIdAndUpdate(cartId,{quantity},{new:true})
        res.status(200).json(updatedQty)
    }catch(err){
        res.status(400).json({err:"err"})
    }


}
 export async function cartItems(req,res){
    try{

        const cartItems=await cartModel.find()
        res.status(200).json(cartItems)
    }catch(err){
       res.status(400).json({err:"canot find Items"})
       
    }
}
export async function deleteCart(req,res){
      
    const cartId=req.params.id;
    try{

        const deletedQty=await cartModel.findByIdAndDelete(cartId)
        res.status(200).json(deletedQty);
    }catch(err){
        res.status(400).json({err:"error..could not find id"})
    }
}