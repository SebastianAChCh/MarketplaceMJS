import { config } from "dotenv";

config();

export const MONGODB_URL =
  process.env.MONGOBD_URL || "mongodb://0.0.0.0:27017/test";

export const PORT = process.env.PORTS || 5500;
