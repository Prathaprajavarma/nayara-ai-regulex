import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <Card className="w-full max-w-2xl p-8 my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{isLogin ? "Login" : "Sign Up"}</h1>
          <p className="text-muted-foreground">
            {isLogin ? "Welcome back to NAYARAi" : "Create your NAYARAi account"}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="First name" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Last name" required />
                </div>
              </div>

              <div>
                <Label htmlFor="title">Title *</Label>
                <Select>
                  <SelectTrigger>
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
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input id="password" type="password" placeholder="Enter password" required />
            </div>
            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword">Re-Type Password *</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm password" required />
              </div>
            )}
          </div>

          {!isLogin && (
            <>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Phone Number</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="countryCode">Country Code</Label>
                    <Input id="countryCode" placeholder="+1" />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" placeholder="Mobile number" />
                  </div>
                </div>
                <div className="mt-2">
                  <Label htmlFor="landline">Home Landline</Label>
                  <Input id="landline" placeholder="Home landline (optional)" />
                </div>
              </div>

              <div>
                <Label htmlFor="fax">Fax</Label>
                <Input id="fax" placeholder="Fax number (optional)" />
              </div>

              <div>
                <Label htmlFor="altEmail">Alternate Email Address</Label>
                <Input id="altEmail" type="email" placeholder="Alternate email (optional)" />
              </div>

              <div>
                <Label className="text-lg font-semibold mb-2 block">Location</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Country" />
                  </div>
                </div>
              </div>
            </>
          )}

          <Button className="w-full bg-primary hover:bg-primary/90 mt-6">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-coral hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
