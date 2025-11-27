import { Zap, Shield, FileCheck, Activity, TrendingUp, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import humanArm from "@/assets/human-arm.png";
import robotArm from "@/assets/robot-arm.png";

const Product = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
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


        {/* Core Services with Enhanced Zoom Animations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-coral">
              <Zap className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Regulatory Intelligence</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-coral">Real-time</strong> global regulatory updates</li>
                <li>• <strong className="text-gold">Automated</strong> reporting & submissions</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-gold">
              <Shield className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Risk Management System (RMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-coral">Predictive analytics</strong> for adverse events</li>
                <li>• <strong className="text-gold">Risk mitigation</strong> recommendations</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-coral">
              <FileCheck className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Quality Management System (QMS)</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-gold">CAPA automation</strong></li>
                <li>• <strong className="text-coral">Compliance</strong> with FDA, ISO 13485, EU MDR</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-gold">
              <Activity className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Clinical & Post-Market Surveillance</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-coral">AI-driven</strong> signal detection</li>
                <li>• <strong className="text-gold">Integration</strong> with ARGUS, CDSCO AEQ</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-coral">
              <TrendingUp className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Engineering & Financial Data Integration</h3>
              <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <li>• <strong className="text-gold">Design traceability</strong></li>
                <li>• <strong className="text-coral">Real-time</strong> financial impact assessments</li>
              </ul>
            </Card>

            <Card className="p-6 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-gold">
              <Zap className="h-10 w-10 text-gold mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">Custom Consulting & API Integrations</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-coral">Tailored solutions</strong> for your unique regulatory and compliance needs
              </p>
            </Card>

            <Card className="p-6 md:col-span-2 lg:col-span-3 group hover:shadow-glow transition-all duration-500 hover:scale-110 cursor-pointer border-2 hover:border-coral">
              <Database className="h-10 w-10 text-coral mb-4 group-hover:animate-pulse-glow transition-transform group-hover:scale-125" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition-colors">Data Migration</h3>
              <div className="grid md:grid-cols-4 gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
                <div>• <strong className="text-gold">Legacy</strong> products</div>
                <div>• <strong className="text-coral">Paper-based</strong> products</div>
                <div>• <strong className="text-gold">Electronic data</strong> from various platforms</div>
                <div>• <strong className="text-coral">Electronic data</strong> from various sources</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-32 text-center pb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coral to-gold">
            Human Expertise meets Regulatory Intelligence
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
