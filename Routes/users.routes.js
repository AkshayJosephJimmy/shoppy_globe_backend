import { loginUser, register } from "../Controllers/users.controller.js";


export function userApi(app){
  
    app.post("/user",register)
    app.post("/user/login",loginUser)

}