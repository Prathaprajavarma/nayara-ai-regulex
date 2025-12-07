import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nayarai-logo.png";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="NAYARAi Logo" className="h-12 w-12" />
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-sapphire to-hessonite">
                NAYARAi
              </div>
              <div className="text-xs text-muted-foreground">a regulatory company</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-yellow-sapphire transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Services
            </Link>
            <Link to="/product" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Product
            </Link>
            <Link to="/resources" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Resources
            </Link>
            <Link to="/auth" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Login
            </Link>
            <Link to="/careers" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-foreground hover:text-yellow-sapphire transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/product"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/resources"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/auth"
                className="text-foreground hover:text-yellow-sapphire transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login / Sign Up
              </Link>
              <Link
                to="/careers"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-yellow-sapphire transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
