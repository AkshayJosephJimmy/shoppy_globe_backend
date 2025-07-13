import { userModel } from "../Models/users.model.js"
import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken'



export async function register(req,res){

    const {name,email,password}=req.body

     const olduser=await userModel.findOne({email})
     if(olduser){
          return res.status(400).json("user already exist")
     }
     const user=await userModel.create({
        name,
        email,
        password:bcrypt.hashSync(password,10)
     })
     res.status(200).json(user)
  
} 
export async function loginUser(req,res){
  
    const{name,email,password}=req.body;
     

         const user= await userModel.findOne({email})
         if(user){
             let comparepassword= bcrypt.compareSync(password,user.password)

             if (!comparepassword){
                 return res.status(400).json("wrong password")
                }
                const token=jwt.sign({user},"secretKey")

                return res.status(200).json({user:{
                    name:user.name,
                    email:user.email
                },
            token:token})
            }
        else{
            return res.status(400).json("wrong emailid")
        }
}