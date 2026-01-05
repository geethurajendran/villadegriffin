import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  capacity: integer("capacity").notNull(),
  imageUrl: text("image_url").notNull(),
  slug: text("slug").notNull(), // for URL
});

export const amenities = pgTable("amenities", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
});

export const insertRoomSchema = createInsertSchema(rooms).omit({ id: true });
export const insertAmenitySchema = createInsertSchema(amenities).omit({ id: true });

export type Room = typeof rooms.$inferSelect;
export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Amenity = typeof amenities.$inferSelect;
export type InsertAmenity = z.infer<typeof insertAmenitySchema>;
