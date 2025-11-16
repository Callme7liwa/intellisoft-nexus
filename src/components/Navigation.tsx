import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-card/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center">
            <img 
              src="/logo.png" 
              alt="IntelliSoft Nexus" 
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Work
            </button>
            <button onClick={() => scrollToSection("process")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Process
            </button>
            <button onClick={() => scrollToSection("team")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Team
            </button>
            <button onClick={() => scrollToSection("insights")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Insights
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("services")} className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Work
            </button>
            <button onClick={() => scrollToSection("process")} className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Process
            </button>
            <button onClick={() => scrollToSection("team")} className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Team
            </button>
            <button onClick={() => scrollToSection("insights")} className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Insights
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="w-full">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
