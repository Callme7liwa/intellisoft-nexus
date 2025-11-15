import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Seddiki Ayoub",
    title: "Software Engineer & Data Scientist",
    image: "/profiles/ayoub.jpg",
    bio:   "Holding a dual degree in software engineering, and data science & Iot from TOP engineering schools.",
    linkedin: "https://www.linkedin.com/in/seddiki--ayoub/"
  },
  {
    name: "Ayoub Amazyan",
    title: "Head of AI",
    image: "/profiles/ayoub_amz.jpeg",
    bio: "Head of AI and hands-on engineer focused on GenAI, AI agents, data pipelines and web scraping. I design and ship practical AI systems that automate real business workflows end-to-end.",
    linkedin: "https://www.linkedin.com/in/ayoub-amazyan/"
  },
  {
    name: 'Lakhder Amine',
    title: 'Software Engineer & Data Scientist',
    image: "/profiles/amine.jpg",
    bio: "Experienced in building scalable web applications and data-driven solutions. Passionate about leveraging technology to solve real-world problems.",
    linkedin: "https://www.linkedin.com/in/amine-lakhder-21a182192/"
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
