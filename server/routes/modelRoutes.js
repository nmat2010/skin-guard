import express from "express";
import upload from "../middleware/uploadMiddleware.js"; // Import Multer middleware
import { getSkinDiseaseAdvice } from "../controllers/modelController.js";

const modelRouter = express.Router();

// Apply the upload middleware to handle image uploads
modelRouter.post("/predict", upload.single("image"), getSkinDiseaseAdvice);

export default modelRouter;