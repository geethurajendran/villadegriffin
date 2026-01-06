import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
      });
      // Reset form logic would go here
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact & Booking</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to book your stay? Reach out to us directly or book online.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Booking Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We prefer WhatsApp for quick queries and bookings. Alternatively, feel free to call us or send an email.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/918940076980"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold">Book on WhatsApp</span>
              </a>

              <a
                href="https://www.booking.com/Share-MZqoG9h"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#003580] text-white hover:bg-[#002860] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Calendar className="w-6 h-6" />
                <span className="font-bold">Booking.com</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <p className="text-muted-foreground">+91 89400 76980</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-muted-foreground">villadegriffin@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-lg shadow-primary/5"
          >
            <h3 className="text-2xl font-bold font-display mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+91..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all resize-none" placeholder="I'm interested in booking the Family Room..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
