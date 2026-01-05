import { motion } from "framer-motion";

// Placeholder images from Unsplash since no assets provided
// Using olive/nature themed interiors
const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2070",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070",
  "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070",
  "https://images.unsplash.com/photo-1595878479901-7917242e2a86?q=80&w=1600",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the serene atmosphere of Olive Villa.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group relative">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
