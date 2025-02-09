import express from "express"
import upload from "../middleware/uploadMiddleware.js"; //
import {chat} from '../controllers/aiController.js'
import { getSkinDiseaseAdvice } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post('/chat', chat);
aiRouter.post("/predict", upload.single("image"), getSkinDiseaseAdvice);

export default aiRouter;