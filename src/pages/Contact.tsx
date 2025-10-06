import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a free 30-minute consultation to discuss your regulatory needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Service of Interest</label>
                <Input
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="e.g., Regulatory Strategy, Product Submissions"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your regulatory needs..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@nayarai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-coral mt-1" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-muted-foreground">
                      Global Regulatory Services
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-hero">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-coral" />
                <h3 className="text-xl font-bold">Schedule a Consultation</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute online consultation with our regulatory experts
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-coral text-white hover:opacity-90"
                asChild
              >
                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
