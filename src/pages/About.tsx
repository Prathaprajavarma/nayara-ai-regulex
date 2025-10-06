import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Prathap Raja Varma",
      title: "Founder & Regulatory",
      experience: "7 years",
      expertise: "Medical Device, Software as Medical Device",
      linkedin: "https://www.linkedin.com/in/prathap-muppalla/",
      testimonial:
        "Leading regulatory strategy with deep expertise in high-risk medical devices and SaMD submissions.",
    },
    {
      name: "Claudia Andriamananjara-Cunderlik",
      title: "Regulatory Specialist",
      experience: "15 years",
      expertise: "Medical Device",
      linkedin: "https://www.linkedin.com/in/claudiainminnesota/",
      testimonial:
        "Extensive experience navigating complex regulatory pathways for medical device approvals globally.",
    },
    {
      name: "Pharmaceutical Expert",
      title: "Regulatory Affairs",
      experience: "12+ years",
      expertise: "Pharmaceutical Drug Development",
      testimonial:
        "Specialized in NDA/ANDA submissions and global pharmaceutical regulatory compliance.",
    },
    {
      name: "Biologics Specialist",
      title: "Regulatory Affairs",
      experience: "10+ years",
      expertise: "Biologics & Biosimilars",
      testimonial:
        "Expert in BLA submissions and biological product regulatory strategies.",
    },
    {
      name: "Food Regulatory Expert",
      title: "Regulatory Affairs",
      experience: "8+ years",
      expertise: "Food & Nutritional Products",
      testimonial:
        "Comprehensive knowledge of FDA food regulations and GRAS determinations.",
    },
    {
      name: "Tobacco Specialist",
      title: "Regulatory Affairs",
      experience: "6+ years",
      expertise: "Tobacco Product Regulations",
      testimonial: "Expertise in PMTA submissions and tobacco product compliance.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-center">About NAYARAi</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-6">
              NAYARAi is a regulatory company that aides manufacturers in navigating regulatory
              landscapes and strategizes for successful marketization of products. We provide a
              detailed and accurate suite of information, tools, services, and support throughout
              product life-cycle.
            </p>
            <p className="text-xl leading-relaxed">
              Our team of experienced regulatory professionals brings deep expertise across medical
              devices, pharmaceuticals, biologics, and related healthcare products. We are committed
              to excellence, ethics, and your regulatory success.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "{member.testimonial}"
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-coral hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Team Roles */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Cosmetics Regulatory Expert",
            "Emergency Use Access Specialist",
            "Quality Assurance Lead",
            "Quality Expert",
            "Chief Medical Officer",
          ].map((role, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-coral transition-colors"
            >
              <p className="font-semibold">{role}</p>
              <p className="text-sm text-muted-foreground mt-1">Position Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
