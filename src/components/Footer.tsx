import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: "/services", label: "Services" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About Us" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-serif italic font-bold text-yellow-sapphire">N</div>
              <div>
                <h2 className="text-xl font-bold">NAYARAi</h2>
                <p className="text-xs text-primary-foreground/70">a regulatory company</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Navigate Regulatory Landscape with Confidence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-sapphire">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-yellow-sapphire transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-sapphire">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Regulatory Strategy</li>
              <li>Product Submissions</li>
              <li>Clinical Trial Management</li>
              <li>Risk Management</li>
              <li>Quality Management</li>
            </ul>
          </div>

          {/* Social & Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-sapphire">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-yellow-sapphire hover:text-black rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-yellow-sapphire hover:text-black rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-yellow-sapphire hover:text-black rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-yellow-sapphire hover:text-black rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-2">
              Accelerated Approvals with Automated Accordance
            </p>
            <Link to="/contact" className="text-sm text-yellow-sapphire hover:text-hessonite hover:underline inline-block transition-colors">
              Subscribe for Updates →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          NAYARAi ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;