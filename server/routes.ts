import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  createReceiptCollection,
  mintBookingReceipt,
  mintDeliveryReceipt,
} from "../src/hedera/hedera-mint.js";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post(
    "/api/hedera/create-collection",
    async (_req: Request, res: Response, next) => {
      try {
        const tokenId = await createReceiptCollection();
        res.json({ tokenId });
      } catch (err) {
        next(err);
      }
    },
  );

  app.post(
    "/api/bookings/:id/mint-booking",
    async (req: Request, res: Response, next) => {
      try {
        const bookingId = req.params.id;
        const { senderId, route, usdcAmount } = req.body ?? {};
        if (!bookingId || !senderId || !route || usdcAmount === undefined) {
          res.status(400).json({ message: "Missing booking mint fields" });
          return;
        }

        const result = await mintBookingReceipt({
          bookingId,
          senderId,
          route,
          usdcAmount,
        });
        res.json(result);
      } catch (err) {
        next(err);
      }
    },
  );

  app.post(
    "/api/bookings/:id/mint-delivery",
    async (req: Request, res: Response, next) => {
      try {
        const bookingId = req.params.id;
        const { travelerId } = req.body ?? {};
        if (!bookingId || !travelerId) {
          res.status(400).json({ message: "Missing delivery mint fields" });
          return;
        }

        const result = await mintDeliveryReceipt({
          bookingId,
          travelerId,
        });
        res.json(result);
      } catch (err) {
        next(err);
      }
    },
  );

  const httpServer = createServer(app);

  return httpServer;
}
