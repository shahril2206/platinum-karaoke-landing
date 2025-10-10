import { Music, Users, Sparkles, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "Private Karaoke Rooms",
      description: "State-of-the-art sound systems with extensive song libraries in multiple languages. Choose from cozy intimate rooms to spacious VIP suites.",
    },
    {
      icon: Sparkles,
      title: "Premium Lounge Bar",
      description: "Enjoy craft cocktails, premium spirits, and bottle service in our sophisticated lounge area with stunning ambient lighting.",
    },
    {
      icon: Users,
      title: "Group Packages",
      description: "Special packages for celebrations, corporate events, and parties. Customizable food and beverage options available.",
    },
    {
      icon: Calendar,
      title: "Special Events",
      description: "Weekly themed nights, birthday celebrations, and exclusive VIP experiences. Make your night unforgettable.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Experience Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where premium entertainment meets sophisticated nightlife
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-accent group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Features;
