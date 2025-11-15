import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    title: "Founder & Lead AI Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "10+ years building ML systems at scale. Former research scientist at leading AI labs. Passionate about making AI accessible and practical for businesses.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Maya Patel",
    title: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Full-stack architect with expertise in building high-performance systems. Previously led engineering teams at Fortune 500 companies.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Kim",
    title: "Senior ML Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Specialized in computer vision and NLP. Ph.D. in Machine Learning. Published researcher with 15+ patents in AI technologies.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sofia Martinez",
    title: "UX/UI Design Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Design thinking meets data-driven decisions. Creates intuitive experiences that users love and businesses measure success by.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "James Chen",
    title: "DevOps & Cloud Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Infrastructure expert building scalable, secure systems on AWS, Azure, and GCP. Kubernetes certified with experience managing platforms serving millions.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Emily Thompson",
    title: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Former management consultant turned technical strategist. Bridges the gap between business objectives and technical execution.",
    linkedin: "https://linkedin.com"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class engineers, designers, and strategists united by a passion for intelligent software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border overflow-hidden hover-lift hover-glow group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-4">{member.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(member.linkedin, "_blank")}
                  className="w-full"
                >
                  <Linkedin size={16} className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
