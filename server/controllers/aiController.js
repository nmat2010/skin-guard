import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET,
});

export const chat =  async (req, res) => {
    try {
      const { message } = req.body;
  
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      });
  
      res.json({ reply: response.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
};
  