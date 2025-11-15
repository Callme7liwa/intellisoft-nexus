import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    category: "AI & ML",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
    ],
    description: "Enterprise analytics platform with predictive ML models",
    challenge: "A Fortune 500 company needed to process millions of data points daily and generate actionable insights in real-time.",
    solution: "We built a scalable ML pipeline with custom predictive models, real-time dashboards, and automated reporting.",
    results: "Reduced analysis time by 85%, identified $2M in cost savings, and improved forecast accuracy by 40%.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    liveUrl: "https://example.com"
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
    ],
    description: "HIPAA-compliant telemedicine platform",
    challenge: "Healthcare startup required a secure, user-friendly platform for virtual consultations with complex compliance requirements.",
    solution: "Developed a cross-platform mobile app with encrypted video calls, appointment scheduling, and integrated payment processing.",
    results: "Successfully served 50,000+ patients, achieved 4.8/5 app rating, and secured additional $3M in funding.",
    technologies: ["React Native", "Node.js", "WebRTC", "MongoDB", "Stripe"]
  },
  {
    title: "E-Commerce Intelligence",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
    ],
    description: "AI-powered recommendation engine for retail",
    challenge: "Online retailer needed to increase conversion rates and average order value through personalized recommendations.",
    solution: "Implemented machine learning recommendation system analyzing user behavior, purchase history, and product relationships.",
    results: "35% increase in conversion rate, 50% higher average order value, and 3x improvement in customer retention.",
    technologies: ["Next.js", "Python", "Redis", "Elasticsearch", "AWS Lambda"],
    liveUrl: "https://example.com"
  },
  {
    title: "Data Extraction Pipeline",
    category: "Data Engineering",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop"
    ],
    description: "Automated web scraping and data aggregation system",
    challenge: "Financial firm needed real-time market data from hundreds of sources with 99.9% accuracy.",
    solution: "Built distributed scraping infrastructure with intelligent error handling, data validation, and automated cleaning.",
    results: "Processed 10M+ data points daily, reduced manual work by 95%, and achieved 99.95% data accuracy.",
    technologies: ["Python", "Scrapy", "Apache Kafka", "Docker", "Kubernetes"]
  },
  {
    title: "Smart Inventory System",
    category: "AI & ML",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"
    ],
    description: "Predictive inventory management with computer vision",
    challenge: "Warehouse operator struggled with stock-outs and overstock, costing millions annually.",
    solution: "Developed AI system combining demand forecasting, computer vision for inventory tracking, and automated reordering.",
    results: "Reduced stock-outs by 78%, cut excess inventory by 45%, and saved $1.2M in annual carrying costs.",
    technologies: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "RabbitMQ"]
  },
  {
    title: "Financial Trading Platform",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop"
    ],
    description: "Real-time trading platform with algorithmic strategies",
    challenge: "FinTech startup needed ultra-low latency trading platform with complex order types.",
    solution: "Architected high-performance system with microsecond latency, real-time analytics, and robust risk management.",
    results: "Handled 1M+ trades daily, achieved <5ms latency, and processed $500M in trading volume.",
    technologies: ["Go", "React", "WebSocket", "TimescaleDB", "Redis"],
    liveUrl: "https://example.com"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real results. See how we've helped businesses transform through intelligent software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border overflow-hidden hover-lift hover-glow cursor-pointer group"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <Badge className="absolute top-4 left-4 bg-primary/90">
                  {project.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
          {selectedProject && (
            <>
              <DialogTitle className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </DialogTitle>

              {/* Image Gallery */}
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
                <img 
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-smooth"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-smooth"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-smooth ${
                            idx === currentImageIndex ? 'bg-primary w-8' : 'bg-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">The Challenge</h4>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Our Solution</h4>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Results</h4>
                  <p className="text-muted-foreground">{selectedProject.results}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedProject.liveUrl && (
                  <Button 
                    onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                    className="w-full"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    View Live Project
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
