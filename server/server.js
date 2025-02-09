import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
import modelRouter from "./routes/modelRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import OpenAI from "openai";
import dotenv from "dotenv";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET,
})
const app = express();
const port = process.emitWarning.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5174', credentials: true}))

// API Endpoints
app.get('/', (req, res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/ai', aiRouter)
app.use('/api/model', modelRouter)


app.listen(port, () => console.log(`Server started on PORT: ${port}`));