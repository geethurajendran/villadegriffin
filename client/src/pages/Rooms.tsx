import { motion } from "framer-motion";
import { useRooms } from "@/hooks/use-homestay";
import { PropertyCard } from "@/components/PropertyCard";
import { Loader2 } from "lucide-react";

export default function Rooms() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Rooms</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Spacious, clean, and comfortable accommodations designed for your perfect stay.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard room={room} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Info Block */}
        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Included in Every Stay</h3>
              <p className="text-muted-foreground mb-6">
                We believe in providing exceptional value. All our room bookings come with access to common amenities and essential facilities to make your stay comfortable.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Free Wi-Fi", "Daily Cleaning", "Fresh Linens", "24/7 Power Backup"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold mb-4 text-center">House Rules</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Check-in</span>
                  <span className="font-medium text-foreground">12:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Check-out</span>
                  <span className="font-medium text-foreground">11:00 AM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Quiet Hours</span>
                  <span className="font-medium text-foreground">10:00 PM - 7:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Pets</span>
                  <span className="font-medium text-foreground">On Request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
