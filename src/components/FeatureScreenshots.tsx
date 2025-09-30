import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Database, GitBranch } from "lucide-react";

const FeatureScreenshots = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Protection",
      description: "Your ideas are secured with immutable blockchain technology, ensuring complete ownership protection and proof of creation.",
      screenshot: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze feasibility, market potential, and technical requirements for your innovations.",
      screenshot: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      icon: Database,
      title: "Smart Data Management",
      description: "Intelligent data organization and version control keeps your project iterations secure and easily accessible.",
      screenshot: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      icon: GitBranch,
      title: "Collaborative Workflows",
      description: "Seamless team collaboration tools with real-time updates, task management, and progress tracking.",
      screenshot: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
            <Badge variant="outline" className="mb-4">
              <feature.icon className="w-4 h-4 mr-2" />
              Feature
            </Badge>
            <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
            <Card className="overflow-hidden shadow-card card-hover">
              <img 
                src={feature.screenshot}
                alt={feature.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureScreenshots;