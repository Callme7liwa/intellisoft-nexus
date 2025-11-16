import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with intelligent software? We'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@company.com"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Your Company Name"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border p-8 hover-glow">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:intellisoft.software@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      intellisoft.software@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                      +33 7 63 19 02 35
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Rennes, France<br />
                      Remote  Available
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-primary border-none p-8 text-primary-foreground card-glow">
              <h3 className="text-2xl font-bold mb-4">
                Prefer to Schedule a Call?
              </h3>
              <p className="mb-6 opacity-90">
                Book a free 30-minute discovery call to discuss your project. No commitment required.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => window.open("https://calendly.com/intellisoft-software", "")}
              >
                <Calendar className="mr-2" size={20} />
                Schedule Discovery Call
              </Button>
            </Card>

            <Card className="bg-card border-border p-6">
              <p className="text-sm text-muted-foreground text-center">
                ⚡ Average response time: <span className="text-foreground font-semibold">Under 4 hours</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
