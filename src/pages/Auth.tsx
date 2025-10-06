import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome back!",
      description: "Successfully logged in to your account.",
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Your NAYARAi account has been successfully created.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <Card className="w-full max-w-md p-8 mx-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl font-serif italic font-bold text-coral">N</div>
            <div>
              <h2 className="text-2xl font-bold">NAYARAi</h2>
              <p className="text-xs text-muted-foreground">a regulatory company</p>
            </div>
          </div>
        </div>

        <Tabs value={isLogin ? "login" : "signup"} onValueChange={(v) => setIsLogin(v === "login")}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="signupEmail">Email Address</Label>
                <Input id="signupEmail" type="email" required />
              </div>

              <div>
                <Label htmlFor="title">Title</Label>
                <select
                  id="title"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select...</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <div>
                <Label htmlFor="newPassword">Password</Label>
                <Input id="newPassword" type="password" required />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
