import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to run the Python script for prediction
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

// API Handler to process image and return prediction
export const getSkinDiseaseAdvice = async (req, res) => {
    try {
        // if (!req.file) {
        //     return res.status(400).json({ success: true, message: "No image uploaded." });
        // }

        const imagePath = req.file.path; // Path to uploaded image

        // Run Python script to predict skin disease
        const result = await runPythonPrediction(imagePath);
        // const [diagnosis, advice] = result.split("\n").map((line) => line.trim());

        res.json({ success: true, result });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};