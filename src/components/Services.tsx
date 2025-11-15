import { Card } from "@/components/ui/card";
import { Brain, Code, Smartphone, Database, FileSearch } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI solutions from predictive analytics to natural language processing. We build intelligence into your software from day one."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge frameworks. Lightning-fast performance meets elegant design."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that users love. Seamless experiences across iOS and Android."
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights. Advanced analytics and visualization that drive decision-making."
  },
  {
    icon: FileSearch,
    title: "Data Extraction",
    description: "Intelligent web scraping and data mining solutions. Automated pipelines that deliver clean, structured data at scale."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions powered by AI-native thinking and business-first strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border p-8 hover-lift hover-glow group"
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth">
                <service.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
