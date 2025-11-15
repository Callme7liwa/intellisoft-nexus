import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">IntelliSoft</h3>
            <p className="text-sm text-muted-foreground">
              Building intelligent software that delivers business results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-smooth">
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-smooth">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-smooth">
                  Mobile Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-smooth">
                  Data Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-foreground transition-smooth">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("team")} className="hover:text-foreground transition-smooth">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("insights")} className="hover:text-foreground transition-smooth">
                  Insights
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-smooth">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-smooth group"
              >
                <Twitter size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-smooth group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-smooth group"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 IntelliSoft Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
