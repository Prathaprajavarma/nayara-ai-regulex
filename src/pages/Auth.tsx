import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center transition-colors duration-300">
      <Card className="w-full max-w-2xl p-8 my-8 border-2 border-border">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-sapphire to-hessonite">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? "Welcome back to NAYARAi" : "Create your NAYARAi account"}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-hessonite">First Name *</Label>
                  <Input id="firstName" placeholder="First name" required className="border-border focus:ring-yellow-sapphire" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-hessonite">Last Name *</Label>
                  <Input id="lastName" placeholder="Last name" required className="border-border focus:ring-yellow-sapphire" />
                </div>
              </div>

              <div>
                <Label htmlFor="title" className="text-hessonite">Title *</Label>
                <Select>
                  <SelectTrigger className="border-border focus:ring-yellow-sapphire">
                    <SelectValue placeholder="Select your title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="email" className="text-hessonite">Email Address *</Label>
            <Input id="email" type="email" placeholder="Enter your email" required className="border-border focus:ring-yellow-sapphire" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password" className="text-hessonite">Password *</Label>
              <Input id="password" type="password" placeholder="Enter password" required className="border-border focus:ring-yellow-sapphire" />
            </div>
            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword" className="text-hessonite">Re-Type Password *</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm password" required className="border-border focus:ring-yellow-sapphire" />
              </div>
            )}
          </div>

          {!isLogin && (
            <>
              <div>
                <Label className="text-lg font-semibold mb-2 block text-yellow-sapphire">Phone Number</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="countryCode" className="text-hessonite">Country Code</Label>
                    <Input id="countryCode" placeholder="+1" className="border-border focus:ring-yellow-sapphire" />
                  </div>
                  <div>
                    <Label htmlFor="mobile" className="text-hessonite">Mobile Number</Label>
                    <Input id="mobile" placeholder="Mobile number" className="border-border focus:ring-yellow-sapphire" />
                  </div>
                </div>
                <div className="mt-2">
                  <Label htmlFor="landline" className="text-hessonite">Home Landline</Label>
                  <Input id="landline" placeholder="Home landline (optional)" className="border-border focus:ring-yellow-sapphire" />
                </div>
              </div>

              <div>
                <Label htmlFor="fax" className="text-hessonite">Fax</Label>
                <Input id="fax" placeholder="Fax number (optional)" className="border-border focus:ring-yellow-sapphire" />
              </div>

              <div>
                <Label htmlFor="altEmail" className="text-hessonite">Alternate Email Address</Label>
                <Input id="altEmail" type="email" placeholder="Alternate email (optional)" className="border-border focus:ring-yellow-sapphire" />
              </div>

              <div>
                <Label className="text-lg font-semibold mb-2 block text-yellow-sapphire">Location</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="city" className="text-hessonite">City</Label>
                    <Input id="city" placeholder="City" className="border-border focus:ring-yellow-sapphire" />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-hessonite">State</Label>
                    <Input id="state" placeholder="State" className="border-border focus:ring-yellow-sapphire" />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-hessonite">Country</Label>
                    <Input id="country" placeholder="Country" className="border-border focus:ring-yellow-sapphire" />
                  </div>
                </div>
              </div>
            </>
          )}

          <Button className="w-full bg-gradient-to-r from-yellow-sapphire to-hessonite text-black hover:opacity-90 mt-6">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-sapphire hover:text-hessonite hover:underline transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;