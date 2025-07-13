import express from 'express'
import mongoose from 'mongoose';
import { ItemApi } from './Routes/items.routes.js';
import { cartApi } from './Routes/cart.routes.js';
import { userApi } from './Routes/users.routes.js';

const app= express();
const PORT= 6500;

mongoose.connect("mongodb+srv://akshayjosephjimmy05:qISkxWHyg9Fatguk@cluster0.tmgarbv.mongodb.net/")
.then(()=>{console.log("db is connected")})
.catch(()=>{console.log("db is not connected")})
app.listen(PORT,()=>{
    console.log("server is connected")
})
app.use(express.json())
ItemApi(app);
cartApi(app);
userApi(app)



//akshayjosephjimmy05
//qISkxWHyg9Fatguk
