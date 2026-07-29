import express from "express";
import cors from "cors";
import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import analyzeRoute from "./routes/analyze.ts";
import grammarcheckRoute from "./routes/grammarcheck.ts";
import spellCheckRoute from "./routes/spellCheck.ts";

const envPath = new URL("../.env", import.meta.url);

if (existsSync(envPath)) {
  loadEnvFile(envPath);
}

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammarcheckRoute);
app.use("/api/spell-check", spellCheckRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
