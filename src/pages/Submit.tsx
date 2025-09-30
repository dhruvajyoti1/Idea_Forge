import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { Shield, Lock, Hash, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Submit = () => {
  const [title, setTitle] = useState("");
  const [teaser, setTeaser] = useState("");
  const [fullDetails, setFullDetails] = useState("");
  const [tags, setTags] = useState("");
  const [isProtected, setIsProtected] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle idea submission
    console.log("Submitting idea:", { title, teaser, fullDetails, tags, isProtected });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Submit Your Idea</h1>
              <p className="text-muted-foreground">
                Protect your innovation with blockchain proof of authorship
              </p>
            </div>
          </div>

          {/* Protection Notice */}
          <Card className="mb-8 border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold text-accent mb-1">Blockchain Protection Active</h3>
                  <p className="text-sm text-muted-foreground">
                    Your idea will be timestamped and hashed on the blockchain for immutable proof of authorship.
                    Only you control who sees the full details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Hash className="w-5 h-5" />
                <span>Idea Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Give your idea a compelling title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                {/* Public Teaser */}
                <div className="space-y-2">
                  <Label htmlFor="teaser">Public Teaser *</Label>
                  <Textarea
                    id="teaser"
                    placeholder="Write a brief description that will be publicly visible. Keep the key details protected..."
                    value={teaser}
                    onChange={(e) => setTeaser(e.target.value)}
                    rows={3}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be visible to everyone. Don't include sensitive details.
                  </p>
                </div>

                {/* Protected Details */}
                <div className="space-y-2">
                  <Label htmlFor="details" className="flex items-center space-x-2">
                    <span>Full Details</span>
                    <Lock className="w-3 h-3 text-accent" />
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Describe your complete idea, technical implementation, market analysis, etc. This will be encrypted and only shared with approved viewers..."
                    value={fullDetails}
                    onChange={(e) => setFullDetails(e.target.value)}
                    rows={6}
                  />
                  <p className="text-xs text-muted-foreground">
                    These details will be encrypted and require your approval to view.
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="AI, blockchain, mobile, healthcare... (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>

                {/* Features Preview */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-sm">Your idea will include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Blockchain Proof
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="feasibility" className="text-xs">
                        <Hash className="w-3 h-3 mr-1" />
                        Unique Hash ID
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="verified" className="text-xs">
                        <Lock className="w-3 h-3 mr-1" />
                        Encrypted Storage
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        Team Formation
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/">Save as Draft</Link>
                  </Button>
                  <Button type="submit" variant="hero" size="lg">
                    <Shield className="w-4 h-4 mr-2" />
                    Generate Proof & Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Submit;