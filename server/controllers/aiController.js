import OpenAI from "openai";
import dotenv from "dotenv";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET,
});

export const chat =  async (req, res) => {
    try {
      const { message } = req.body;
  
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });
  
      res.json({ reply: response.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
};
  
const runPythonPrediction = (imagePath) => {
  return new Promise((resolve, reject) => {
      const pythonProcess = spawn("python3", [path.join(__dirname, "../python/diagnosis.py"), imagePath]);

      let output = "";
      pythonProcess.stdout.on("data", (data) => {
          output += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
          console.error(`Python error: ${data.toString()}`);
          reject(`Python error: ${data.toString()}`);
      });

      pythonProcess.on("close", (code) => {
          if (code === 0) {
              resolve(output.trim());
          } else {
              reject(`Python script exited with code ${code}`);
          }
      });
  });
};

export const getSkinDiseaseAdvice = async (req, res) => {
  try {
      // if (!req.file) {
      //     return res.status(400).json({ success: true, message: "No image uploaded." });
      // }

      // const imagePath = '/Users/nguyenmaianhthu/Documents/Code/github/hackNYU2025/server/python/ISIC_6652978.jpg' 
      const imagePath = req.file.path;

      // Run Python script to predict skin disease
      const result = await runPythonPrediction(imagePath);
      // const [diagnosis, advice] = result.split("\n").map((line) => line.trim());

      res.json({ success: true, result });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
  }
};
