import { Card } from "@/components/ui/card";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Define",
    description: "We dive deep to understand your business, challenges, and goals. This isn't about features—it's about outcomes."
  },
  {
    icon: Pencil,
    number: "02",
    title: "Architect & Design",
    description: "We craft the technical strategy and user experience. Every decision is deliberate, balancing innovation with practicality."
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Test",
    description: "Agile development with continuous delivery. You see progress every sprint, with rigorous testing at every stage."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Grow",
    description: "Launch is just the beginning. We monitor, optimize, and evolve your solution as your business scales."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results. Transparent, organized, and designed for your success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border p-8 hover-lift hover-glow relative overflow-hidden"
              >
                {/* Step number background */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/5">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="inline-block p-4 bg-primary/10 rounded-xl mb-6">
                    <step.icon className="text-primary" size={32} />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-primary">{step.number}</span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line (except for last items) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Every project is unique, but our commitment to transparency and results never changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
