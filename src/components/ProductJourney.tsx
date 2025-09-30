import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Users, Rocket, TrendingUp } from "lucide-react";

const ProductJourney = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Submit Ideas",
      description: "Share your innovative concepts securely"
    },
    {
      icon: Users,
      title: "Find Teams",
      description: "Connect with skilled collaborators"
    },
    {
      icon: Rocket,
      title: "Build Products",
      description: "Transform ideas into reality together"
    },
    {
      icon: TrendingUp,
      title: "Scale Success",
      description: "Launch and grow your innovations"
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          From Ideas to Products
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow our proven journey from concept to market-ready innovation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <Card className="tech-border p-6 text-center flex-1 card-hover">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
            
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-primary mx-4 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductJourney;