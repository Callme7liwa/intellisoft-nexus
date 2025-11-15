import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Business-First Mindset",
    description: "We're not just developers—we're technical partners obsessed with your business outcomes. Every line of code serves a strategic purpose."
  },
  {
    icon: Lightbulb,
    title: "AI-Native Architecture",
    description: "Intelligence isn't bolted on as an afterthought. We architect AI into the foundation of your software from day one, creating truly adaptive systems."
  },
  {
    icon: Users,
    title: "Transparent Collaboration",
    description: "No black boxes. Our organized process keeps you in the loop at every stage with clear communication, regular updates, and complete visibility."
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Delivery",
    description: "We measure success by your success. Whether it's user growth, cost reduction, or revenue increase—we're accountable to real business metrics."
  }
];

const WhyUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">IntelliSoft?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not your typical dev shop. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border p-8 hover-lift hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 p-12 max-w-3xl mx-auto card-glow">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground">
              Let's discuss how intelligent software can solve your biggest challenges and unlock new opportunities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
