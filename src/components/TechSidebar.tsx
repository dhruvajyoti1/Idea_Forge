import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Shield, 
  Zap, 
  Database, 
  GitBranch, 
  Code, 
  Brain, 
  Rocket,
  TrendingUp,
  Users,
  Star,
  Activity,
  Hash,
  Lock
} from "lucide-react";

const TechSidebar = () => {
  const techStats = {
    totalIdeas: 1247,
    protectedIdeas: 892,
    activeTeams: 156,
    successRate: 78
  };

  const trendingTech = [
    { name: "AI/ML", count: 234, growth: 15 },
    { name: "Blockchain", count: 189, growth: 12 },
    { name: "IoT", count: 167, growth: 8 },
    { name: "Quantum", count: 89, growth: 25 },
    { name: "AR/VR", count: 156, growth: 18 }
  ];

  const recentActivity = [
    { action: "New idea protected", time: "2 min ago", icon: Shield },
    { action: "Team formed", time: "5 min ago", icon: Users },
    { action: "Patent filed", time: "12 min ago", icon: Lock },
    { action: "Code validated", time: "18 min ago", icon: Code }
  ];

  return (
    <div className="space-y-6">
      {/* Platform Stats */}
      <Card className="tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span className="neon-text">Platform Analytics</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="text-2xl font-bold text-primary">{techStats.totalIdeas}</div>
              <div className="text-xs text-muted-foreground">Total Ideas</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-accent/5 border border-accent/20">
              <div className="text-2xl font-bold text-accent">{techStats.protectedIdeas}</div>
              <div className="text-xs text-muted-foreground">Protected</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="text-2xl font-bold text-secondary">{techStats.activeTeams}</div>
              <div className="text-xs text-muted-foreground">Active Teams</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-glow border border-primary/20">
              <div className="text-2xl font-bold text-primary">{techStats.successRate}%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Tools */}
      <Card className="tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Brain className="w-5 h-5 text-accent" />
            <span className="neon-text">AI Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" size="sm" className="w-full justify-start hover:shadow-neon">
            <Cpu className="w-4 h-4 mr-2" />
            Idea Analyzer
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start hover:shadow-neon">
            <Database className="w-4 h-4 mr-2" />
            Market Research
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start hover:shadow-neon">
            <GitBranch className="w-4 h-4 mr-2" />
            Tech Stack Recommender
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start hover:shadow-neon">
            <Hash className="w-4 h-4 mr-2" />
            Patent Checker
          </Button>
        </CardContent>
      </Card>

      {/* Trending Technologies */}
      <Card className="tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="neon-text">Trending Tech</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTech.map((tech, index) => (
            <div key={tech.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border border-primary/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">#{index + 1}</span>
                </div>
                <div>
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.count} ideas</div>
                </div>
              </div>
              <Badge variant="success" className="text-xs">
                +{tech.growth}%
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="neon-text">Quick Launch</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="hero" size="sm" className="w-full shadow-glow">
            <Zap className="w-4 h-4 mr-2" />
            Submit Idea
          </Button>
          <Button variant="accent" size="sm" className="w-full shadow-neon">
            <Users className="w-4 h-4 mr-2" />
            Find Team
          </Button>
          <Button variant="outline" size="sm" className="w-full hover:shadow-soft">
            <Shield className="w-4 h-4 mr-2" />
            Blockchain Verify
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Activity className="w-5 h-5 text-accent" />
            <span className="neon-text">Live Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/20 border border-primary/10">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <activity.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{activity.action}</div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TechSidebar;


