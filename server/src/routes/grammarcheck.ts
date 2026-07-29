import express, { type Request, type Response } from "express";

const grammarcheckRoute = express.Router();

grammarcheckRoute.post("/", async (_req: Request, res: Response) => {
  res.json({ message: "Grammar check route is working!" });
});

export default grammarcheckRoute;
