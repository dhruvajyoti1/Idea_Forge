import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User } from "lucide-react";

const SignInSignUp = () => {
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <Card className="tech-border shadow-soft p-6">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4 mt-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
              <Input placeholder="Email" className="pl-10" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
              <Input type="password" placeholder="Password" className="pl-10" />
            </div>
            <Button className="w-full gradient-primary text-white shadow-glow">
              Sign In
            </Button>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4 mt-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
              <Input placeholder="Full Name" className="pl-10" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
              <Input placeholder="Email" className="pl-10" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
              <Input type="password" placeholder="Password" className="pl-10" />
            </div>
            <Button className="w-full gradient-primary text-white shadow-glow">
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SignInSignUp;