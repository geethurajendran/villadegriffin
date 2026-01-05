import { useAmenities } from "@/hooks/use-homestay";
import { Loader2, Wifi, Sofa, Tv, Wind, Coffee, Utensils, Waves, Heater, Grid } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Wifi,
  Sofa,
  Tv,
  Wind,
  Coffee,
  Utensils,
  Waves,
  Heater,
  Grid
};

export default function Amenities() {
  const { data: amenities, isLoading } = useAmenities();

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Amenities</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities?.map((amenity, index) => {
              const Icon = iconMap[amenity.icon] || Grid;
              return (
                <motion.div
                  key={amenity.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{amenity.label}</h3>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
