import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = ["About", "Privacy", "Careers", "Help"];
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t">
      {/* Quick Links Panel */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link) => (
              <Button key={link} variant="ghost" className="text-muted-foreground hover:text-foreground">
                {link}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Info & Social Panel */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TH</span>
              </div>
              <span className="text-xl font-bold">TechHive</span>
            </div>
            <p className="text-muted-foreground">
              Secure innovation platform powered by blockchain and AI
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@techhive.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost" 
                  size="icon"
                  className="hover:shadow-soft"
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TechHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;