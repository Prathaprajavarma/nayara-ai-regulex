import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Prathap Raja Varma",
      title: "Founder & Regulatory",
      experience: "7 years",
      expertise: "Medical Device, Software as Medical Device, In-vitro Diagnostics",
      linkedin: "https://www.linkedin.com/in/prathap-muppalla/",
      testimonials: [
        "Led successful FDA submissions for Class III medical devices",
        "Expert in global regulatory strategies and SaMD submissions",
      ],
    },
    {
      name: "Sophia Boucher",
      title: "Product Expert",
      experience: "12 years",
      expertise: "Medical Device, Software as Medical Device, In-Vitro Diagnostics",
      linkedin: "https://www.linkedin.com/in/sophia-boucher-27a29480/",
      testimonials: [
        "Product development expertise across multiple regulatory frameworks",
        "Strategic product lifecycle management and market access",
      ],
    },
    {
      name: "Dr. Harry Reddy",
      title: "Chief Technology Officer",
      experience: "25 years",
      expertise: "Healthcare Technology, AI/ML, Regulatory Systems",
      linkedin: "https://www.linkedin.com/in/harry-reddy-270114/",
      testimonials: [
        "Pioneer in healthcare technology innovation",
        "Leading development of AI-driven regulatory intelligence platforms",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">About NAYARAi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NAYARAi is a regulatory company that aides manufacturers in navigating regulatory
            landscapes and strategizes for successful marketization of products. We provide a
            detailed and accurate suite of information, tools, services, and support throughout
            product life-cycle.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-coral transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-coral font-medium mb-1">{member.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Experience: {member.experience}
                  </p>
                  <p className="text-sm font-medium text-gold">{member.expertise}</p>
                </div>

                <div className="border-t pt-4 mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground font-semibold mb-2">Testimonials:</p>
                  {member.testimonials.map((testimonial, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground italic">
                      • {testimonial}
                    </p>
                  ))}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-coral hover:underline mt-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/careers">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
