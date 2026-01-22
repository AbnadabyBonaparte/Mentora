// Vercel serverless function entry point
import { createApp } from "../server/_core/index.js";

let appInstance: any = null;

export default async function handler(req: any, res: any) {
  if (!appInstance) {
    appInstance = await createApp();
  }
  return appInstance(req, res);
}

