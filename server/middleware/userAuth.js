import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    

    try {
        const {token} = await req.cookies;

        if(!token){
            return res.json({success: false, message: 'Not Authorized. Login Again'})
        }
        else {
            const tokenDecode = jwt.verify(token, process.env.JWT_SECRECT);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success: false, message: 'Not Authorized. Login Again'});
        }

        next();

        }
        

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export default userAuth;
