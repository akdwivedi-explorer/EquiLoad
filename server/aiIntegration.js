// import express from "express";
const express = require("express");
// import cors from "cors";
const cors = require("cors");
// import dotenv from "dotenv";
const dotenv = require("dotenv");
// import { GoogleGenAI } from "@google/genai";
// const GoogleGenAI = require('@google/genai')
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/generate", async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: "Input is required" });
    }

    // Explicitly request a JSON response from Gemini
    const prompt = `
      You are an AI that provides structured algorithm recommendations.
      Respond strictly and generate the response in few bullet points only in less than 100 words.
      Do **NOT** include any extra text or explanations.
      Always generate the response only one out of {Round Robin, Least Connection}.
      Here is the use case: "${input}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const rawText = response.text;

    res.json(rawText);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
