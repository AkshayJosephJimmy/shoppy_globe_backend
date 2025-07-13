import { getItemById, getItems } from "../Controllers/items.controller.js";


export function ItemApi(app){

    app.get('/products',getItems)
    app.get('/product/:id',getItemById)

}
