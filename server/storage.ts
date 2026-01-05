import { rooms, amenities, type Room, type InsertRoom, type Amenity, type InsertAmenity } from "@shared/schema";

export interface IStorage {
  getRooms(): Promise<Room[]>;
  getRoomBySlug(slug: string): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;
  getAmenities(): Promise<Amenity[]>;
  createAmenity(amenity: InsertAmenity): Promise<Amenity>;
}

export class MemStorage implements IStorage {
  private rooms: Map<number, Room>;
  private amenities: Map<number, Amenity>;
  private roomId: number;
  private amenityId: number;

  constructor() {
    this.rooms = new Map();
    this.amenities = new Map();
    this.roomId = 1;
    this.amenityId = 1;
  }

  async getRooms(): Promise<Room[]> {
    return Array.from(this.rooms.values());
  }

  async getRoomBySlug(slug: string): Promise<Room | undefined> {
    return Array.from(this.rooms.values()).find((r) => r.slug === slug);
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = this.roomId++;
    const room: Room = { ...insertRoom, id };
    this.rooms.set(id, room);
    return room;
  }

  async getAmenities(): Promise<Amenity[]> {
    return Array.from(this.amenities.values());
  }

  async createAmenity(insertAmenity: InsertAmenity): Promise<Amenity> {
    const id = this.amenityId++;
    const amenity: Amenity = { ...insertAmenity, id };
    this.amenities.set(id, amenity);
    return amenity;
  }
}

export const storage = new MemStorage();
