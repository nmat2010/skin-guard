import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
<<<<<<< HEAD
import modelRouter from "./routes/modelRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import OpenAI from "openai";
import dotenv from "dotenv";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET,
})
=======

>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b
const app = express();
const port = process.emitWarning.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
app.use(cors({origin: 'http://localhost:5174', credentials: true}))
=======
app.use(cors({credentials: true}))
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b

// API Endpoints
app.get('/', (req, res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
<<<<<<< HEAD
app.use('/api/ai', aiRouter)
app.use('/api/model', modelRouter)

=======
>>>>>>> fe80a82875357af125c7a5618d9fb4004f49245b

app.listen(port, () => console.log(`Server started on PORT: ${port}`));