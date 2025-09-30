import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  Settings, 
  Github, 
  Linkedin, 
  Shield, 
  Star, 
  Code, 
  Award,
  TrendingUp,
  Users,
  Eye
} from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Jordan Smith",
    email: "jordan.smith@example.com",
    avatar: undefined,
    verified: true,
    joinDate: "January 2024",
    bio: "Full-stack developer passionate about AI and sustainable technology. Looking to collaborate on innovative projects that make a positive impact.",
    skills: [
      { name: "JavaScript", level: 95, verified: true },
      { name: "React", level: 90, verified: true },
      { name: "Node.js", level: 85, verified: false },
      { name: "Python", level: 80, verified: true },
      { name: "Machine Learning", level: 70, verified: false },
    ],
    connections: {
      github: "jordansmith",
      linkedin: "jordan-smith-dev",
    },
    stats: {
      ideasSubmitted: 5,
      votesReceived: 234,
      teamsJoined: 3,
      profileViews: 156,
    },
  };

  const myIdeas = [
    {
      id: "1",
      title: "Voice-Controlled Smart Home for Accessibility",
      status: "active",
      votes: 45,
      views: 234,
      teamMembers: 2,
    },
    {
      id: "2",
      title: "Decentralized Social Media Platform",
      status: "seeking_team",
      votes: 78,
      views: 456,
      teamMembers: 1,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="success">Active</Badge>;
      case "seeking_team":
        return <Badge variant="secondary">Seeking Team</Badge>;
      case "completed":
        return <Badge variant="outline">Completed</Badge>;
      default:
        return <Badge variant="outline">Draft</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-2">
                      <h1 className="text-xl font-bold">{user.name}</h1>
                      {user.verified && (
                        <Badge variant="verified">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Joined {user.joinDate}</p>
                  </div>

                  <p className="text-sm">{user.bio}</p>

                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      {user.connections.github}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>

                  <Button variant="hero" size="sm" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.stats.ideasSubmitted}</div>
                    <div className="text-xs text-muted-foreground">Ideas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{user.stats.votesReceived}</div>
                    <div className="text-xs text-muted-foreground">Votes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{user.stats.teamsJoined}</div>
                    <div className="text-xs text-muted-foreground">Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted-foreground">{user.stats.profileViews}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills & Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Skills & Expertise</span>
                  <Button variant="outline" size="sm">
                    <Code className="w-4 h-4 mr-2" />
                    Take Test
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        {skill.verified && (
                          <Badge variant="success" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Ideas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>My Ideas</span>
                  <Button variant="accent" size="sm">
                    Submit New Idea
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myIdeas.map((idea) => (
                  <div key={idea.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{idea.title}</h4>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{idea.votes} votes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{idea.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{idea.teamMembers} members</span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(idea.status)}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Analytics
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;