import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Shield, TrendingUp, Users, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  teaser: string;
  author: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  feasibilityScore: number;
  votes: number;
  comments: number;
  views: number;
  tags: string[];
  isProtected: boolean;
  isTopIdea?: boolean;
  teamSize?: number;
  className?: string;
}

const IdeaCard = ({
  id,
  title,
  teaser,
  author,
  feasibilityScore,
  votes,
  comments,
  views,
  tags,
  isProtected,
  isTopIdea,
  teamSize,
  className,
}: IdeaCardProps) => {
  const getFeasibilityColor = (score: number) => {
    if (score >= 8) return "feasibility";
    if (score >= 6) return "success";
    return "secondary";
  };

  return (
    <Card className={cn("card-hover cursor-pointer", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm">{author.name}</span>
                {author.verified && (
                  <Badge variant="verified" className="text-xs">
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                {isProtected && (
                  <Shield className="w-3 h-3 text-accent" />
                )}
                {isTopIdea && (
                  <Badge variant="top" className="text-xs">
                    Top Idea
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={getFeasibilityColor(feasibilityScore)}>
              {feasibilityScore}/10
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{teaser}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>{votes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>
            {teamSize && (
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{teamSize}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-1" />
            </Button>
            <Button variant="accent" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IdeaCard;


