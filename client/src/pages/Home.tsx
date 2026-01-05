import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRooms } from "@/hooks/use-homestay";
import { RoomCard } from "@/components/RoomCard";

export default function Home() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: scenic nature villa landscape */}
          <img
            src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
            alt="Villa Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Escape to <span className="text-secondary">Nature</span>
            <br />
            Stay in <span className="text-secondary">Comfort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light"
          >
            A budget-friendly luxury experience nestled in the heart of greenery.
            Perfect for families, couples, and groups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/rooms" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2">
              View Our Rooms <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold transition-all hover:-translate-y-1">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">About Olive Villa</span>
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                Your Home Away From Home
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Welcome to Olive Villa, where modern comfort meets nature's tranquility. Designed with a simple, clean, and bright aesthetic, our homestay offers a refreshing retreat from the city hustle without breaking the bank.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Budget-friendly luxury accommodation",
                  "Perfect for large groups and couples",
                  "Modern amenities including WiFi & AC",
                  "Serene location surrounded by greenery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/amenities" className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2 border-b-2 border-primary/20 hover:border-primary transition-colors pb-1">
                Explore Amenities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative z-10">
                {/* Unsplash: clean bright interior bedroom */}
                <img 
                  src="https://images.unsplash.com/photo-1616594039964-408359566a05?q=80&w=2070&auto=format&fit=crop" 
                  alt="Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block">
                 {/* Unsplash: balcony view */}
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                  alt="Balcony" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Accommodation</span>
            <h2 className="text-4xl font-display font-bold mb-4">Choose Your Stay</h2>
            <p className="text-muted-foreground">
              Whether you're a couple seeking romance or a large group looking for fun, we have the perfect room for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-muted/20 rounded-3xl h-[400px] animate-pulse" />
              ))
            ) : (
              rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready for your getaway?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
            Book your stay directly with us for the best rates and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-secondary transition-all shadow-xl">
              Book via WhatsApp
            </Link>
            <Link href="/location" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              View Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
