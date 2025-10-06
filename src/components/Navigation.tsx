import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/product", label: "Product" },
    { path: "/resources", label: "Resources" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-4xl font-serif italic font-bold text-coral">N</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">NAYARAi</h1>
              <p className="text-xs text-muted-foreground">a regulatory company</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "transition-colors",
                    isActive(link.path) && "text-coral font-medium"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/auth">
              <Button variant="default" className="ml-4 bg-primary hover:bg-primary/90">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    isActive(link.path) && "text-coral font-medium bg-secondary"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
