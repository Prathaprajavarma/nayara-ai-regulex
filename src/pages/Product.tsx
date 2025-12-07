import { Zap, Shield, FileCheck, Activity, TrendingUp, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import humanArm from "@/assets/human-arm.png";
import robotArm from "@/assets/robot-arm.png";

const Product = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Handshake */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="flex items-center justify-center gap-0 relative opacity-15">
          <img 
            src={humanArm} 
            alt="Human Expertise" 
            className="w-[500px] h-auto animate-float" 
            style={{ transform: "translateX(50px)" }}
          />
          <img 
            src={robotArm} 
            alt="AI Intelligence" 
            className="w-[500px] h-auto transform scale-x-[-1] animate-float" 
            style={{ animationDelay: "1s", transform: "translateX(-50px) scaleX(-1)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-yellow-sapphire/10 rounded-full mb-4">
            <span className="text-yellow-sapphire font-semibold">Coming Soon</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-sapphire to-hessonite">
            SITA-AI™
          </h1>
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


        {/* Core Services with Enhanced Zoom Animations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-yellow-sapphire">
              <Zap className="h-10 w-10 text-yellow-sapphire mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-yellow-sapphire transition-colors">Regulatory Intelligence</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-ruby-red">Real-time</strong> global regulatory updates</li>
                <li>• <strong className="text-yellow-sapphire">Automated</strong> reporting & submissions</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-hessonite">
              <Shield className="h-10 w-10 text-hessonite mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-hessonite transition-colors">Risk Management System (RMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-ruby-red">Predictive analytics</strong> for adverse events</li>
                <li>• <strong className="text-yellow-sapphire">Risk mitigation</strong> recommendations</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-yellow-sapphire">
              <FileCheck className="h-10 w-10 text-yellow-sapphire mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-yellow-sapphire transition-colors">Quality Management System (QMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-hessonite">CAPA automation</strong></li>
                <li>• <strong className="text-ruby-red">Compliance</strong> with FDA, ISO 13485, EU MDR</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-hessonite">
              <Activity className="h-10 w-10 text-hessonite mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-hessonite transition-colors">Clinical & Post-Market Surveillance</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-ruby-red">AI-driven</strong> signal detection</li>
                <li>• <strong className="text-yellow-sapphire">Integration</strong> with ARGUS, CDSCO AEQ</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-yellow-sapphire">
              <TrendingUp className="h-10 w-10 text-yellow-sapphire mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-yellow-sapphire transition-colors">Engineering & Financial Data Integration</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-hessonite">Design traceability</strong></li>
                <li>• <strong className="text-ruby-red">Real-time</strong> financial impact assessments</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-hessonite">
              <Zap className="h-10 w-10 text-hessonite mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-hessonite transition-colors">Custom Consulting & API Integrations</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-yellow-sapphire">Tailored solutions</strong> for your unique regulatory and compliance needs
              </p>
            </Card>

            <Card className="p-6 md:col-span-2 lg:col-span-3 group hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-yellow-sapphire">
              <Database className="h-10 w-10 text-yellow-sapphire mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-yellow-sapphire transition-colors">Data Migration</h3>
              <div className="grid md:grid-cols-4 gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
                <div>• <strong className="text-hessonite">Legacy</strong> products</div>
                <div>• <strong className="text-ruby-red">Paper-based</strong> products</div>
                <div>• <strong className="text-yellow-sapphire">Electronic data</strong> from various platforms</div>
                <div>• <strong className="text-hessonite">Electronic data</strong> from various sources</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-32 text-center pb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-sapphire via-hessonite to-ruby-red">
            Human Expertise meets Regulatory Intelligence
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;