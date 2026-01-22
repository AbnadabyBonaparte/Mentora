// Vercel serverless function entry point
import { createApp } from "../server/_core/index.js";

export default async function handler(req: any, res: any) {
  const app = await createApp();
  return app(req, res);
}

