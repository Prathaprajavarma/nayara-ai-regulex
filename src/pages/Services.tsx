import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  FileText,
  Users,
  Activity,
  AlertTriangle,
  Tag,
  Shield,
  Briefcase,
  Brain,
  X,
} from "lucide-react";

interface Service {
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string;
  features?: string[];
  isComingSoon?: boolean;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  const handleServiceClick = (service: Service) => {
    if (service.isComingSoon) {
      navigate("/product");
    } else {
      setSelectedService(service);
    }
  };

  const services: Service[] = [
    {
      title: "Regulatory Strategy",
      icon: <Lightbulb className="h-8 w-8" />,
      summary:
        "Understands your product and global regulatory landscapes to provide effective solutions for product marketization.",
      details:
        "Our regulatory strategy service provides comprehensive analysis of your product and target markets. We develop customized regulatory pathways considering geo-specific requirements, timelines, and optimal submission strategies. Our team evaluates regulatory precedents, identifies potential challenges, and creates actionable roadmaps for successful product approval.",
    },
    {
      title: "Product Submissions",
      icon: <FileText className="h-8 w-8" />,
      summary:
        "Experienced, ethical, and remarkable team aiming for your regulatory success with unmatched expertise in high-risk medical devices.",
      details:
        "Complete application preparation and submission services for major regulatory bodies including FDA (510(k), PMA, De Novo), EU (CE Marking), Health Canada, PMDA Japan, NMPA China, TGA Australia, and more. Our expertise includes preparation of technical files, clinical evaluation reports, risk management documentation, and all required formats including CTD, eCTD, and region-specific templates.",
      features: [
        "US FDA submissions (510(k), PMA, De Novo)",
        "EU CE Marking & MDR compliance",
        "CDSCO India (Form 44, MD-15, MD-17)",
        "NMPA China medical device registration",
        "PMDA Japan J-NDA submissions",
        "Emergency Use Access & Breakthrough designations",
      ],
    },
    {
      title: "Regulatory Liaison",
      icon: <Users className="h-8 w-8" />,
      summary:
        "Communicating with regulatory agencies on your behalf, addressing inquiries and participating in meetings.",
      details:
        "Expert representation in all interactions with regulatory authorities. We serve as your voice in pre-submission meetings, agency inquiries, deficiency response management, and ongoing correspondence. Our team maintains established relationships with key regulatory bodies globally, ensuring efficient and professional communication to advance your submissions.",
    },
    {
      title: "Clinical Trial Management",
      icon: <Activity className="h-8 w-8" />,
      summary:
        "Assisting in planning and execution of clinical trials with necessary documentation and regulatory liaison.",
      details:
        "Comprehensive clinical trial support from protocol design through final reporting. We prepare IND/CTA applications, manage ethics committee submissions, ensure GCP compliance, coordinate with investigative sites, and provide ongoing regulatory oversight. Our team ensures all clinical activities meet both scientific and regulatory standards.",
    },
    {
      title: "Risk Management",
      icon: <AlertTriangle className="h-8 w-8" />,
      summary:
        "Handles RECALL initiation to termination, warning letter resolution, and quality standards gap analysis.",
      details:
        "Complete risk management lifecycle services including ISO 14971 risk assessments, recall management, warning letter response, CAPA implementation, and verification & validation support. We identify gaps in SOPs, conduct risk assessments, and provide regulatory updates to ensure your systems remain compliant and effective.",
      features: [
        "Product recall management (initiation to termination)",
        "Warning letter response and resolution",
        "ISO 14971 risk assessment",
        "CAPA system optimization",
        "SOP gap analysis and updates",
      ],
    },
    {
      title: "Labeling & AdPromo",
      icon: <Tag className="h-8 w-8" />,
      summary:
        "Ensuring product labeling and packaging adhere to regulatory guidelines with accurate information.",
      details:
        "Expert review and development of product labeling, instructions for use (IFU), package inserts, and promotional materials. We ensure compliance with region-specific requirements including FDA 21 CFR Part 801, EU MDR Annex I, and other applicable standards. Our team verifies accuracy of claims, warnings, and all required regulatory information.",
    },
    {
      title: "Safety Science",
      icon: <Shield className="h-8 w-8" />,
      summary:
        "Post-market surveillance with Safety Monitoring Plan (SMP) and timely agency reporting.",
      details:
        "Comprehensive post-market surveillance including development of Safety Monitoring Plans (SMP), adverse event reporting, periodic safety updates, and PMCF studies. Our services include Biological Evaluation Plan (BEP) review per ISO 10993, Clinical Evaluation Plan (CEP) development, SSCP preparation, and safety-benefit analysis.",
      features: [
        "Post-Market Surveillance programs",
        "Safety Monitoring Plans (SMP)",
        "Biological Evaluation Plan (BEP) per ISO 14971 & ISO 10993",
        "Clinical Evaluation Plan (CEP) review",
        "Post-Market Clinical Follow-up (PMCF)",
        "Summary of Safety and Clinical Performance (SSCP)",
      ],
    },
    {
      title: "Quality Management",
      icon: <Briefcase className="h-8 w-8" />,
      summary:
        "Collaborating with QA teams ensuring manufacturing, quality control, and distribution align with regulations.",
      details:
        "Complete quality management system (QMS) support including ISO 13485 implementation, FDA QSR compliance, technical documentation preparation, and maintenance of device master files. We assist with GMP compliance, design controls, supplier management, and continuous quality improvement initiatives.",
    },
    {
      title: "Project Management",
      icon: <Briefcase className="h-8 w-8" />,
      summary:
        "Streamlines product life-cycle management with planning, execution, monitoring, and traceability.",
      details:
        "End-to-end project management for regulatory initiatives including project initiation, resource planning, timeline management, quality agreements, risk monitoring, and project closures. We maintain comprehensive traceability matrices ensuring all deliverables meet quality and regulatory requirements.",
    },
    {
      title: "Regulatory Intelligence",
      icon: <Brain className="h-8 w-8" />,
      summary:
        "Actively engaged with agencies to identify regulatory changes affecting your products. (Coming Soon)",
      details:
        "Our proprietary SITA-AI™ system continuously monitors global regulatory landscapes, identifying emerging requirements, guideline updates, and market access opportunities. This service provides proactive intelligence for strategic decision-making.",
      isComingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory solutions across the product lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-coral rounded-xl text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-coral transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{service.summary}</p>
              <p className="text-sm text-coral mt-4 font-medium">Click to learn more →</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-coral rounded-xl text-white">
                  {selectedService.icon}
                </div>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-lg leading-relaxed">{selectedService.details}</p>

              {selectedService.features && (
                <div>
                  <h3 className="text-lg font-bold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-coral mt-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-6 border-t">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
