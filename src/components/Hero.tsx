import { Button } from "./ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold glow-text">
              <span className="gradient-text">PLATINUM</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold tracking-wider">
              KARAOKE & LOUNGE
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Kuching's Premier Karaoke Experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <Phone className="w-5 h-5" />
              Reserve Now
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]">
              View Rooms
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">Kuching, Sarawak</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">6PM - 3AM Daily</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">+60 12-345 6789</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-accent/20 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
