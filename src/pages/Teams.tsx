import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { Users, Star, Code, Briefcase, MessageCircle, Calendar } from "lucide-react";

const Teams = () => {
  // Mock data for team opportunities
  const teamOpportunities = [
    {
      id: "1",
      ideaTitle: "AI-Powered Smart City Traffic Optimization",
      roles: ["Frontend Developer", "Data Scientist"],
      applicants: 12,
      teamSize: 3,
      maxTeamSize: 5,
      requiredSkills: ["React", "Python", "Machine Learning", "IoT"],
      deadline: "2024-01-15",
      author: {
        name: "Sarah Chen",
        verified: true,
      },
    },
    {
      id: "2",
      ideaTitle: "Blockchain-Based Carbon Credit Marketplace",
      roles: ["Smart Contract Developer", "UX Designer"],
      applicants: 8,
      teamSize: 2,
      maxTeamSize: 4,
      requiredSkills: ["Solidity", "Web3", "Figma", "Sustainability"],
      deadline: "2024-01-20",
      author: {
        name: "Alex Kumar",
        verified: false,
      },
    },
  ];

  // Mock data for user's applications
  const myApplications = [
    {
      id: "1",
      ideaTitle: "Mental Health Support Network for Remote Workers",
      role: "Full Stack Developer",
      status: "pending",
      appliedDate: "2024-01-10",
      skillTestScore: 85,
    },
    {
      id: "2", 
      ideaTitle: "Sustainable Food Delivery Platform",
      role: "Backend Developer",
      status: "accepted",
      appliedDate: "2024-01-08",
      skillTestScore: 92,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "accepted":
        return <Badge variant="success">Accepted</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Team Formation</h1>
          <p className="text-muted-foreground">
            Join innovative teams or find skilled collaborators for your ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Opportunities */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Open Opportunities</h2>
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Filter by Skills
              </Button>
            </div>

            <div className="space-y-4">
              {teamOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{opportunity.ideaTitle}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>by {opportunity.author.name}</span>
                          {opportunity.author.verified && (
                            <Badge variant="verified" className="text-xs">Verified</Badge>
                          )}
                        </div>
                      </div>
                      <Badge variant="feasibility">
                        {opportunity.teamSize}/{opportunity.maxTeamSize} members
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Open Roles */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">Open Roles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.roles.map((role) => (
                          <Badge key={role} variant="outline">{role}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.requiredSkills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                        {opportunity.requiredSkills.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{opportunity.requiredSkills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Stats & Action */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{opportunity.applicants} applicants</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due {opportunity.deadline}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="accent" size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* My Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myApplications.map((application) => (
                  <div key={application.id} className="space-y-2 pb-4 border-b last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm line-clamp-2">{application.ideaTitle}</h4>
                        <p className="text-xs text-muted-foreground">{application.role}</p>
                      </div>
                      {getStatusBadge(application.status)}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Applied {application.appliedDate}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{application.skillTestScore}%</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" size="sm" className="w-full">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Code className="w-4 h-4 mr-2" />
                  Take Skill Test
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teams;


