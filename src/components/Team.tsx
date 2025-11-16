import { useEffect, useState } from "react";
import { Linkedin, Users, Sparkles, ArrowUpRight } from "lucide-react";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetch('/data/team.json')
        .then(response => response.json())
        .then(data => {
          setTeam(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading team:', error);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return (
        <section id="team" className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground text-lg">Loading our amazing team...</p>
            </div>
          </div>
        </section>
    );
  }

  return (
      <section id="team" className="relative py-32 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Meet the Minds Behind
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Innovation
            </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              World-class engineers, designers, and strategists united by a passion for building intelligent software that transforms businesses.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full flex flex-col">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-primary hover:text-white transition-all hover:scale-105 transform translate-y-4 group-hover:translate-y-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" />
                          Connect
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Sparkle Effect */}
                      {hoveredIndex === index && (
                          <div className="absolute top-4 right-4 animate-pulse">
                            <Sparkles className="w-6 h-6 text-primary" />
                          </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 relative flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary/80 mb-3">
                        {member.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {member.bio}
                      </p>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <span className="text-muted-foreground">Want to join our team?</span>
              <a
                  href="#contact"
                  className="text-primary font-semibold hover:underline flex items-center gap-1"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Team;