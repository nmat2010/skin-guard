import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

<<<<<<< HEAD
export default userRouter;
=======
export default userRouter;
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b
