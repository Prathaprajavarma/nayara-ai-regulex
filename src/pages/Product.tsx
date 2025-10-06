import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Database, Shield, Activity, TrendingUp, Zap } from "lucide-react";

const Product = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SITA-AI<sup className="text-2xl">™</sup>
          </h1>
          <p className="text-2xl text-coral font-semibold mb-4">
            FREC-QMS AI Regulatory Intelligence Platform
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Software as Medical Device for regulatory compliance and quality
            management using our proprietary AI technology
          </p>
        </div>

        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 bg-gradient-hero shadow-elegant">
            <p className="text-lg leading-relaxed text-muted-foreground">
              SITA-AI™ is our proprietary FREC-QMS AI platform that comprehensively collects,
              validates, and evaluates data for regulatory compliance and quality management. The
              system integrates data from finance, engineering, clinical, quality, regulatory,
              vigilance, marketing, and operations to provide regulatory intelligence and strategic
              insights for global market access.
            </p>
          </Card>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-elegant transition-all">
              <Brain className="h-12 w-12 text-coral mb-4" />
              <h3 className="text-xl font-bold mb-3">Regulatory Intelligence</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time global regulatory updates</li>
                <li>• Automated reporting & submissions</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all">
              <Shield className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">Risk Management System</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Predictive analytics for adverse events</li>
                <li>• Risk mitigation recommendations</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all">
              <Zap className="h-12 w-12 text-coral mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Management System</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CAPA automation</li>
                <li>• FDA, ISO 13485, EU MDR compliance</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all">
              <Activity className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">Clinical & Post-Market Surveillance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AI-driven signal detection</li>
                <li>• Integration with ARGUS, CDSCO AEQ</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all">
              <TrendingUp className="h-12 w-12 text-coral mb-4" />
              <h3 className="text-xl font-bold mb-3">Engineering & Financial Integration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Design traceability</li>
                <li>• Real-time financial impact assessments</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all">
              <Database className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">Custom Consulting & API</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom integrations</li>
                <li>• Legacy data migration</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Data Integration */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Data Migration Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-elegant transition-all">
              <h3 className="text-xl font-bold mb-3">Legendary Products</h3>
              <p className="text-muted-foreground">Legacy system migration support</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all">
              <h3 className="text-xl font-bold mb-3">Paper-Based Records</h3>
              <p className="text-muted-foreground">Digital transformation services</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all">
              <h3 className="text-xl font-bold mb-3">Electronic Data</h3>
              <p className="text-muted-foreground">Multi-platform data consolidation</p>
            </Card>
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-gradient-hero rounded-2xl p-12 shadow-elegant text-center">
          <h2 className="text-3xl font-bold mb-4">Strategic Visualization</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Data collected from finance, engineering, clinical, quality, regulatory, vigilance,
            marketing, and operations is visualized as a Gantt chart for comprehensive strategies
            for global market access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Early Access
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-coral text-coral hover:bg-coral hover:text-white"
              >
                Explore Current Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
