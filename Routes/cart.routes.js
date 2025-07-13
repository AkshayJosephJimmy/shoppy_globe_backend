import { addToCart, cartItems, deleteCart, updateQty } from "../Controllers/cart.controller.js"
import { verifyToken } from "../Middleware/verifyToken.js"

 export function cartApi(app){ 
    app.post('/cart',verifyToken,addToCart)
    app.get('/cart/items',verifyToken,cartItems)
    app.put('/cart/:id',verifyToken,updateQty)
    app.delete('/cart/:id',verifyToken,deleteCart)

}