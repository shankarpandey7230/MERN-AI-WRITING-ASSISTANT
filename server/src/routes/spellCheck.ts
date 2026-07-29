import express, { type Request, type Response } from "express";

const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (_req: Request, res: Response) => {
  res.json({ message: "Spell check route is working!" });
});

export default spellCheckRoute;
