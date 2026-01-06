import { Link } from "wouter";
import { Users, Wifi, Wind } from "lucide-react";
import type { Room } from "@shared/schema";
import { motion } from "framer-motion";

interface PropertyCardProps {
  room: Room;
}

export function PropertyCard({ room }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={room.imageUrl}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium bg-primary/90 px-3 py-1 rounded-full inline-block backdrop-blur-sm mb-2">
            Max {room.capacity} Guests
          </p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
          {room.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1.5 rounded-md">
            <Users className="w-3.5 h-3.5" />
            <span>{room.capacity} Pax</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1.5 rounded-md">
            <Wifi className="w-3.5 h-3.5" />
            <span>Free Wifi</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1.5 rounded-md">
            <Wind className="w-3.5 h-3.5" />
            <span>AC</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
        </div>
      </div>
    </motion.div>
  );
}
