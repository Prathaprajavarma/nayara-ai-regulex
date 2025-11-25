import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      title: "AI/ML Engineers",
      description:
        "Design and develop machine learning models for regulatory intelligence, risk prediction, and clinical data analysis.",
      responsibilities: [
        "Build ML models for regulatory intelligence and risk prediction",
        "Develop NLP systems for document analysis",
        "Implement deep learning solutions for clinical data",
        "Deploy and maintain AI models in production",
      ],
      skills: ["TensorFlow", "PyTorch", "NLP", "Predictive Analytics", "Deep Learning"],
    },
    {
      title: "Software Developers (Full-stack)",
      description:
        "Develop frontend and backend systems with seamless integration to external platforms.",
      responsibilities: [
        "Build responsive web applications",
        "Develop RESTful APIs and microservices",
        "Integrate with external systems and databases",
        "Ensure application security and performance",
      ],
      skills: ["Python", "JavaScript", "Node.js", "React", "AWS/Azure", "API Integration"],
    },
    {
      title: "Data Scientists",
      description:
        "Build predictive models and handle large datasets from financial, clinical, and engineering sources.",
      responsibilities: [
        "Develop statistical models and algorithms",
        "Process and analyze large datasets",
        "Create data visualizations and dashboards",
        "Collaborate with engineering teams",
      ],
      skills: ["Statistical Modeling", "Python/R", "Big Data (Hadoop/Spark)", "Data Visualization"],
    },
    {
      title: "NLP Experts",
      description:
        "Build AI tools for understanding regulatory texts, technical documentation, and clinical reports.",
      responsibilities: [
        "Develop NLP models for document parsing",
        "Build text classification and extraction systems",
        "Create domain-specific language models",
        "Optimize NLP pipeline performance",
      ],
      skills: ["BERT", "GPT", "Transformers", "Document Parsing", "Regulatory Terminology"],
    },
    {
      title: "Regulatory Affairs Specialists",
      description:
        "Ensure software compliance with regulatory frameworks and provide regulatory intelligence.",
      responsibilities: [
        "Define regulatory requirements for software",
        "Review and approve regulatory documentation",
        "Manage agency communications",
        "Monitor global regulatory changes",
      ],
      skills: ["FDA/EU MDR/CDSCO", "Regulatory Submissions", "Quality Systems", "Risk Management"],
    },
    {
      title: "Quality Management Experts",
      description:
        "Provide expertise on QMS requirements ensuring ISO 13485 and FDA compliance.",
      responsibilities: [
        "Develop quality management processes",
        "Conduct internal audits",
        "Manage CAPA systems",
        "Ensure regulatory compliance",
      ],
      skills: ["ISO 13485", "FDA 21 CFR Part 820", "Quality Auditing", "Process Improvement"],
    },
    {
      title: "Clinical Data Analysts",
      description:
        "Oversee integration and analysis of clinical data ensuring regulatory compliance.",
      responsibilities: [
        "Analyze clinical trial data",
        "Develop clinical evaluation reports",
        "Support post-market surveillance",
        "Ensure data quality and integrity",
      ],
      skills: ["Clinical Data Management", "Statistical Analysis", "GCP", "EDC Systems"],
    },
    {
      title: "Risk Management Specialists",
      description: "Define risk management workflows aligned with ISO 14971 standards.",
      responsibilities: [
        "Conduct risk assessments",
        "Develop risk mitigation strategies",
        "Manage adverse event investigations",
        "Maintain risk management files",
      ],
      skills: ["ISO 14971", "Risk Assessment", "FMEA", "Root Cause Analysis"],
    },
    {
      title: "Project Manager",
      description: "Manage timelines, budgets, and cross-team coordination for regulatory projects.",
      responsibilities: [
        "Develop project plans and schedules",
        "Coordinate cross-functional teams",
        "Monitor project progress and budget",
        "Ensure timely milestone delivery",
      ],
      skills: ["Project Management", "Agile/Scrum", "Resource Planning", "Stakeholder Management"],
    },
    {
      title: "Product Manager",
      description: "Define product vision and work with stakeholders to meet user needs.",
      responsibilities: [
        "Define product roadmap and strategy",
        "Gather and prioritize requirements",
        "Collaborate with development teams",
        "Analyze user feedback and metrics",
      ],
      skills: ["Product Strategy", "User Research", "Roadmapping", "Stakeholder Management"],
    },
    {
      title: "DevOps Engineers",
      description: "Manage infrastructure and deployment pipelines for scalable, secure environments.",
      responsibilities: [
        "Build CI/CD pipelines",
        "Manage cloud infrastructure",
        "Implement security protocols",
        "Monitor system performance",
      ],
      skills: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD", "Security"],
    },
    {
      title: "UI/UX Designers",
      description: "Design intuitive user interfaces for regulatory and data analysis platforms.",
      responsibilities: [
        "Create user interface designs",
        "Conduct usability testing",
        "Develop design systems",
        "Collaborate with developers",
      ],
      skills: ["Figma", "Adobe XD", "Usability Testing", "User-Centered Design"],
    },
    {
      title: "Data Engineers",
      description: "Handle architecture, cleaning, and preparation of large datasets ensuring data integrity.",
      responsibilities: [
        "Build data pipelines and ETL processes",
        "Manage SQL and NoSQL databases",
        "Ensure data quality and accuracy",
        "Optimize data storage and retrieval",
      ],
      skills: ["ETL Processes", "SQL/NoSQL", "Data Pipelines", "Data Warehousing"],
    },
    {
      title: "Compliance and Validation Experts",
      description: "Ensure software adheres to regulatory requirements and guide compliance audits.",
      responsibilities: [
        "Validate software systems per FDA 21 CFR Part 11",
        "Conduct compliance audits",
        "Develop validation protocols",
        "Maintain regulatory documentation",
      ],
      skills: ["FDA 21 CFR Part 11", "Software Validation", "Compliance Auditing", "GxP Systems"],
    },
    {
      title: "Cyber Security and Privacy Experts",
      description: "Implement security protocols and ensure data privacy compliance for sensitive data.",
      responsibilities: [
        "Implement security protocols and controls",
        "Ensure HIPAA and GDPR compliance",
        "Conduct security assessments",
        "Manage incident response",
      ],
      skills: ["HIPAA", "GDPR", "Security Protocols", "Penetration Testing", "Encryption"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of our mission to transform regulatory compliance with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">
                {job.title}
              </h3>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <p className="text-sm text-coral font-medium">Click to view details →</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">About the Role</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-coral mt-2" />
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-coral/10 text-coral rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Apply for this Position
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

export default Careers;
