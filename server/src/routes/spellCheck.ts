import express, { type Request, type Response } from "express";
import { GoogleGenAI } from "@google/genai";

const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (req: Request, res: Response) => {
  try {
    // Initialize the client inside the route handler so it picks up loaded env variables
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Extract the text to analyze from the request body
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text to analyze is required" });
    }

    // Call the Gemini model using the correct method and modern model names
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",

      contents: text,
      config: {
        systemInstruction:
          "You are an expert spell checker. Review the provided text and identify any spelling errors. Provide clear corrections and suggestions for improvement. Format your response with numbered headings for each identified issue, followed by the suggested correction.",
        temperature: 0.7,
      },
    });

    res.json({ output: response.text });
    // console.log("Gemini Response:", response.text);
  } catch (error: any) {
    console.error("Gemini Grammar Error:", error);
    res.status(500).json({
      error: "Failed to check grammar",
      details: error?.message || String(error),
    });
  }
});

export default spellCheckRoute;
