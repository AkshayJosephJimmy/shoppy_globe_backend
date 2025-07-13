
import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){

if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0]=="JWT" ){
try{

    const verifyed=jwt.verify(req.headers.authorization.split(" ")[1],"secretKey")
    req.user=verifyed;
    next()
}catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }

}else res.status(400).json("Please Login")


}