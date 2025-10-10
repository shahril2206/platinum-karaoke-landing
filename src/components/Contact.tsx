import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Jalan Song, Kuching", "Sarawak, Malaysia"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+60 12-345 6789", "+60 82-123 456"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Sunday", "6:00 PM - 3:00 AM"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@platinum-kuching.com", "bookings@platinum-kuching.com"],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the finest karaoke lounge in Kuching?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20 glow-box">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Book Your Experience?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us now to reserve your private room or VIP suite. Our team is ready to make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5" />
              Call to Book
            </Button>
            <Button variant="outline" size="xl">
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Contact;
