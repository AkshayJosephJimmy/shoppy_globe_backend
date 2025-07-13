import { itemModel } from "../Models/Items.model.js";


 export async function getItems(req,res){
try{

    const items=await itemModel.find()
    
    res.status(200).json({items:items})
}catch(err){
    res.status(400).json({err:"couldnot find items"})
}
}

export async function getItemById(req,res){

const id=req.params.id
try{

    const item=await itemModel.findById(id)
    res.status(200).json({item:item})
}catch(err){
    res.status(400).json({err:"couldnot find item"})
}


}
