import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
<<<<<<< HEAD
    

    try {
        const {token} = await req.cookies;

        if(!token){
            return res.json({success: false, message: 'Not Authorized. Login Again'})
        }
        else {
            const tokenDecode = jwt.verify(token, process.env.JWT_SECRECT);
=======
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: 'Not Authorized. Login Again'})
    }

    try {
       
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRECT);
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success: false, message: 'Not Authorized. Login Again'});
        }

        next();

<<<<<<< HEAD
        }
        

=======
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

<<<<<<< HEAD
export default userAuth;
=======
export default userAuth;
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b
