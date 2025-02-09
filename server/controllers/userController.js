import userModel from "../models/userModel.js";

export const getUserData = async (req, res)=>{
    try {
        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message: 'User not found'});
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        });

    } catch (error) {
        res.json({success: false, message: error.message});
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b
