import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechVenture Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "IntelliSoft transformed our vision into reality",
    testimonial: "Working with IntelliSoft was a game-changer for our startup. They didn't just build our platform—they became true technical partners who understood our business goals. Their AI-native approach helped us launch 3 months ahead of schedule."
  },
  {
    name: "Michael Torres",
    title: "CTO, DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "The most professional development team we've worked with",
    testimonial: "Their transparent process and communication set them apart. Every sprint was organized, every deadline met. The quality of their code and the intelligence they built into our ML pipeline exceeded all expectations."
  },
  {
    name: "Jessica Park",
    title: "Founder, HealthTech Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "They don't just code, they solve business problems",
    testimonial: "IntelliSoft's business-first mentality is exactly what we needed. They challenged our assumptions, optimized our workflows, and delivered a platform that our users love. Our engagement metrics are up 200%."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from clients who've experienced the IntelliSoft difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border p-8 hover-lift hover-glow"
            >
              <Quote className="text-primary mb-6" size={40} />
              
              <p className="text-xl font-semibold mb-4 text-primary">
                "{testimonial.quote}"
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.testimonial}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
