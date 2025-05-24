import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static website routes go here
  // prefix all routes with /api if needed for any static data endpoints

  const httpServer = createServer(app);

  return httpServer;
}
