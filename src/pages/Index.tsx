import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import IdeaCard from "@/components/IdeaCard";
import TechSidebar from "@/components/TechSidebar";
import SignInSignUp from "@/components/SignInSignUp";
import CompanyLogos from "@/components/CompanyLogos";
import ProductJourney from "@/components/ProductJourney";
import FeatureScreenshots from "@/components/FeatureScreenshots";
import UserReviews from "@/components/UserReviews";
import Footer from "@/components/Footer";
import { Search, Filter, TrendingUp, Zap, Shield, Cpu, Database, GitBranch, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for ideas
  const ideas = [
    {
      id: "1",
      title: "AI-Powered Smart City Traffic Optimization",
      teaser: "Revolutionary traffic management system using machine learning to reduce congestion by 40% while improving emergency response times...",
      author: {
        name: "Sarah Chen",
        avatar: undefined,
        verified: true,
      },
      feasibilityScore: 8.5,
      votes: 124,
      comments: 18,
      views: 892,
      tags: ["AI", "Smart Cities", "Transportation", "IoT"],
      isProtected: true,
      isTopIdea: true,
      teamSize: 3,
    },
    {
      id: "2",
      title: "Blockchain-Based Carbon Credit Marketplace",
      teaser: "Transparent platform for trading verified carbon credits with automated monitoring and real-time environmental impact tracking...",
      author: {
        name: "Alex Kumar",
        avatar: undefined,
        verified: false,
      },
      feasibilityScore: 7.2,
      votes: 89,
      comments: 12,
      views: 456,
      tags: ["Blockchain", "Environment", "Marketplace", "Sustainability"],
      isProtected: true,
      teamSize: 2,
    },
    {
      id: "3",
      title: "Mental Health Support Network for Remote Workers",
      teaser: "Comprehensive platform connecting remote workers with mental health professionals, peer support groups, and wellness resources...",
      author: {
        name: "Maria Rodriguez",
        avatar: undefined,
        verified: true,
      },
      feasibilityScore: 9.1,
      votes: 201,
      comments: 34,
      views: 1234,
      tags: ["Health", "Remote Work", "Mental Health", "Community"],
      isProtected: false,
      isTopIdea: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background tech-grid">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden floating-particles">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="IDEA_FORGE Innovation" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 gradient-tech" />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge variant="verified" className="bg-primary/20 border-primary/30 shadow-glow">
                <Shield className="w-3 h-3 mr-1" />
                Blockchain Protected
              </Badge>
              <Badge variant="feasibility" className="shadow-neon">
                <Cpu className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="neon-text">Collaborate.</span>{" "}
              <span className="text-secondary">Innovate.</span>{" "}
              <span className="text-accent">Protect.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-foreground/90 animate-fade-in">
              Advanced platform for secure idea collaboration with blockchain proof of authorship,
              AI-powered feasibility analysis, and intelligent team formation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-primary" />
                <span>Immutable Storage</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-secondary" />
                <span>Version Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-accent" />
                <span>Smart Contracts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-scale-in">
              <Button variant="hero" size="xl" className="shadow-glow">
                <Zap className="w-5 h-5 mr-2" />
                Submit Your Idea
              </Button>
              <Button variant="secondary" size="xl" className="shadow-soft">
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Ideas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sign In/Sign Up Panel */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <SignInSignUp />
      </section>

      {/* Company Logos Row */}
      <section className="container mx-auto px-4 py-16">
        <CompanyLogos />
      </section>

      {/* Product Journey Banner */}
      <section className="container mx-auto px-4">
        <ProductJourney />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tech Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <TechSidebar />
          </div>

          {/* Ideas Content */}
          <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  placeholder="Search ideas with AI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 tech-border"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="hover:shadow-soft">
                  <Filter className="w-4 h-4 mr-2" />
                  Smart Filters
                </Button>
                <Button variant="outline" size="sm" className="hover:shadow-soft">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </Button>
                <Button variant="accent" size="sm" className="shadow-neon">
                  <Cpu className="w-4 h-4 mr-2" />
                  AI Suggest
                </Button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {["All", "AI/ML", "Blockchain", "IoT", "Quantum", "AR/VR", "Biotech"].map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  size="sm" 
                  className="hover:shadow-soft"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Ideas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ideas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="hover:shadow-glow">
                Load More Innovations
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Screenshots Sections */}
      <section className="container mx-auto px-4">
        <FeatureScreenshots />
      </section>

      {/* User Reviews */}
      <section className="container mx-auto px-4">
        <UserReviews />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;


