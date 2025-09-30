import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const UserReviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      rating: 5,
      text: "TechHive transformed how we handle innovation. The blockchain protection gives us confidence to share bold ideas.",
      avatar: "SC"
    },
    {
      name: "Alex Kumar", 
      role: "Startup Founder",
      company: "InnovateLabs",
      rating: 5,
      text: "The AI feasibility analysis saved us months of research. We found the perfect team through the platform.",
      avatar: "AK"
    },
    {
      name: "Maria Rodriguez",
      role: "CTO",
      company: "FutureTech",
      rating: 5,
      text: "Seamless collaboration tools and secure idea sharing. This platform is the future of innovation management.",
      avatar: "MR"
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Innovators Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of innovators who trust TechHive with their breakthrough ideas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card 
            key={review.name}
            className="p-6 tech-border card-hover animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-muted-foreground mb-6 italic">
              "{review.text}"
            </p>
            
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className="gradient-primary text-white">
                  {review.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-semibold">{review.name}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                  <Badge variant="outline" className="text-xs">
                    {review.company}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;