import { Zap, Shield, FileCheck, Activity, TrendingUp, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import humanArm from "@/assets/human-arm.png";
import robotArm from "@/assets/robot-arm.png";
import ganttChart from "@/assets/gantt-chart-sample.png";

const Product = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Parallax Arms */}
      <div className="fixed left-0 top-1/4 w-1/3 z-0 opacity-20 pointer-events-none animate-float">
        <img src={humanArm} alt="Human Arm" className="w-full h-auto" />
      </div>
      <div className="fixed right-0 top-1/4 w-1/3 z-0 opacity-20 pointer-events-none animate-float" style={{ animationDelay: "1s" }}>
        <img src={robotArm} alt="Robot Arm" className="w-full h-auto transform scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
            <span className="text-gold font-semibold">Coming Soon</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">SITA-AI™</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Software as Medical Device - Comprehensive data collection, validation, and evaluation
            for regulatory compliance and quality management
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Our proprietary FREC-QMS AI provides REGULATORY INTELLIGENCE actively engaged with global 
            regulatory agencies and notified bodies to identify potential changes affecting your medical 
            device and provides facts for decision making.
          </p>
        </div>

        {/* Gantt Chart Visualization */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Strategic Global Market Access</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Data collected from finance, engineering, clinical, quality, regulatory, vigilance, 
              marketing, and operations visualized as a Gantt chart for comprehensive strategy planning
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img src={ganttChart} alt="Medical Device Project Gantt Chart" className="w-full rounded-xl shadow-elegant" />
          </div>
        </div>

        {/* Core Services with Hover Effects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <Zap className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Regulatory Intelligence</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• Real-time global regulatory updates</li>
                <li>• Automated reporting & submissions</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <Shield className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Risk Management System (RMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• Predictive analytics for adverse events</li>
                <li>• Risk mitigation recommendations</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <FileCheck className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Quality Management System (QMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• CAPA automation</li>
                <li>• Compliance with FDA, ISO 13485, EU MDR</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <Activity className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Clinical & Post-Market Surveillance</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• AI-driven signal detection</li>
                <li>• Integration with ARGUS, CDSCO AEQ</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <TrendingUp className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Engineering & Financial Data Integration</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• Design traceability</li>
                <li>• Real-time financial impact assessments</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <Zap className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Custom Consulting & API Integrations</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Tailored solutions for your unique regulatory and compliance needs
              </p>
            </Card>

            <Card className="p-6 md:col-span-2 lg:col-span-3 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <Database className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Data Migration</h3>
              <div className="grid md:grid-cols-4 gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
                <div>• Legacy products</div>
                <div>• Paper-based products</div>
                <div>• Electronic data from various platforms</div>
                <div>• Electronic data from various sources</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Human & Robot Handshake Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-0">
              <img src={humanArm} alt="Human Partnership" className="w-64 h-auto opacity-80" />
              <img src={robotArm} alt="AI Innovation" className="w-64 h-auto opacity-80 transform scale-x-[-1]" />
            </div>
          </div>
          <div className="relative z-10 text-center py-20">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-coral to-gold">
              Human Expertise Meets AI Innovation
            </h2>
            <p className="text-xl text-muted-foreground">
              Where regulatory intelligence and artificial intelligence unite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
