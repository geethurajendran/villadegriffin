import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data if empty
  const existingRooms = await storage.getRooms();
  if (existingRooms.length === 0) {
    await storage.createRoom({
      title: "Family Room",
      slug: "family-room",
      description: "Spacious accommodation perfect for large families. Comfortably sleeps up to 6 guests with ample space for everyone.",
      capacity: 6,
      price: 150,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createRoom({
      title: "Bachelor Room",
      slug: "bachelor-room",
      description: "Ideal for groups of friends. Features comfortable bedding and great social space for up to 6 guests.",
      capacity: 6,
      price: 120,
      imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createRoom({
      title: "Couple Room with Balcony",
      slug: "couple-room",
      description: "Romantic getaway with a private balcony offering scenic views. Perfect for couples seeking privacy and comfort.",
      capacity: 2,
      price: 90,
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c8729f7fd7fc?auto=format&fit=crop&q=80&w=1000",
    });

    const amenitiesList = [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "Dressing Table", icon: "Mirror" }, // using generic text if Mirror doesn't exist, frontend will handle or use default
      { label: "Heater", icon: "Thermometer" },
      { label: "Sofa", icon: "Armchair" },
      { label: "Dining Table", icon: "Utensils" },
      { label: "Air Conditioning", icon: "Wind" },
      { label: "Television", icon: "Tv" },
      { label: "Kitchen", icon: "ChefHat" },
      { label: "Balcony", icon: "Sun" },
    ];

    for (const amenity of amenitiesList) {
      await storage.createAmenity(amenity);
    }
  }

  app.get(api.rooms.list.path, async (_req, res) => {
    const rooms = await storage.getRooms();
    res.json(rooms);
  });

  app.get(api.rooms.get.path, async (req, res) => {
    const room = await storage.getRoomBySlug(req.params.slug);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  });

  app.get(api.amenities.list.path, async (_req, res) => {
    const amenities = await storage.getAmenities();
    res.json(amenities);
  });

  return httpServer;
}
