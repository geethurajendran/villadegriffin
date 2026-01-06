import { MapPin, Navigation, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Find Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nestled in the quiet hills, yet accessible from the main road.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-2xl mb-6">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Villa De Griffin Home Stay<br />
                      No:2, Mariamman Koil St, Vazhakulam,<br />
                      Puducherry, 605002
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find Us</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Google Search: "villa de griffin pondicherry"<br />
                      Nestled in the heart of Vazhakulam, Puducherry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proximity</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 1km from Rock Beach</li>
                      <li>• 2.4km from Puducherry Railway Station</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] bg-muted rounded-3xl overflow-hidden border border-border shadow-inner relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939886367!2d77.6382!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3N8KwMzgnMTcuNSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
