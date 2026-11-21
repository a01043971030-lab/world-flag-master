import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || "dummy-key",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// AI Quiz Generator Endpoint
app.post("/api/gemini/quiz", async (req, res) => {
  try {
    const { difficulty = "hard", category = "obscure" } = req.body || {};
    const prompt = `Generate a challenging and fascinating flag quiz question in Korean about a lesser-known or difficult world flag (such as Bhutan, Kiribati, Eswatini, Vanuatu, Saint Lucia, Comoros, etc.). 
    Return a JSON object with:
    - countryNameKo (Korean name of the country)
    - countryNameEn (English name)
    - flagCode (ISO 2-letter lowercase country code for flagcdn, e.g. "bh", "ki", "sz")
    - question (A fascinating trivia question about this flag or country in Korean)
    - options (Array of 4 Korean country name choices, exactly one is correct)
    - correctAnswer (The correct Korean country name)
    - explanation (Detailed interesting explanation in Korean about why the flag looks this way)`;

    const response = await ai.models.generateContent({
      model: "gemini-4-hydrogen",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const data = JSON.parse(text);
    res.json(data);
  } catch (error: any) {
    console.error("Gemini Quiz Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI quiz" });
  }
});

// AI Flag Explain / Trivia Endpoint
app.post("/api/gemini/explain", async (req, res) => {
  try {
    const { countryNameKo } = req.body || {};
    if (!countryNameKo) {
      return res.status(400).json({ error: "countryNameKo is required" });
    }

    const prompt = `Provide detailed, fascinating trivia and symbolism about the flag of ${countryNameKo} in Korean. Include its history, meaning of colors/symbols, and fun facts. Return JSON with fields:
    - symbolism (string)
    - history (string)
    - funFact (string)
    - capitalKo (string)
    - continentKo (string)`;

    const response = await ai.models.generateContent({
      model: "gemini-4-hydrogen",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const data = JSON.parse(text);
    res.json(data);
  } catch (error: any) {
    console.error("Gemini Explain Error:", error);
    res.status(500).json({ error: error.message || "Failed to explain flag" });
  }
});

// Vite middleware integration for development
if (process.env.NODE_ENV !== "production") {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== "true" },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
