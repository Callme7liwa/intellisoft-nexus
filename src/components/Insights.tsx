import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt: "How businesses are leveraging AI-native architectures to gain competitive advantages in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "AI & ML",
    readTime: "8 min read",
    date: "Nov 10, 2025"
  },
  {
    title: "Building Scalable ML Pipelines",
    excerpt: "A technical deep-dive into architecting production-ready machine learning systems that handle millions of predictions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Engineering",
    readTime: "12 min read",
    date: "Nov 5, 2025"
  },
  {
    title: "Data Strategy for Startups",
    excerpt: "Why your data infrastructure decisions today will determine your ability to scale tomorrow. Essential reading for founders.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Strategy",
    readTime: "6 min read",
    date: "Oct 28, 2025"
  },
  {
    title: "Responsible AI Development",
    excerpt: "Building AI systems that are not just powerful, but ethical, transparent, and aligned with human values.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    category: "AI Ethics",
    readTime: "10 min read",
    date: "Oct 20, 2025"
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thought leadership on AI, software development, and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="bg-card border-border overflow-hidden hover-lift hover-glow group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-primary/90 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Read More 
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
