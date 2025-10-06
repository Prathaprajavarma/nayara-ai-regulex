import { Card } from "@/components/ui/card";
import { Globe, FileText, Shield, BookOpen } from "lucide-react";

const Resources = () => {
  const regions = [
    { name: "United States", flag: "🇺🇸", regulators: ["FDA", "CDRH", "CBER"] },
    { name: "European Union", flag: "🇪🇺", regulators: ["EMA", "Notified Bodies", "MDR/IVDR"] },
    { name: "India", flag: "🇮🇳", regulators: ["CDSCO"] },
    { name: "China", flag: "🇨🇳", regulators: ["NMPA"] },
    { name: "Japan", flag: "🇯🇵", regulators: ["PMDA", "MHLW"] },
    { name: "Canada", flag: "🇨🇦", regulators: ["Health Canada"] },
    { name: "Australia", flag: "🇦🇺", regulators: ["TGA"] },
    { name: "Singapore", flag: "🇸🇬", regulators: ["HSA"] },
    { name: "United Kingdom", flag: "🇬🇧", regulators: ["MHRA"] },
  ];

  const productCategories = [
    "Medical Devices",
    "Pharmaceutical Drugs",
    "Biologics",
    "Combination Products",
    "Software as Medical Device (SaMD)",
  ];

  const qualityStandards = [
    { title: "ISO 13485", description: "Medical device quality management systems" },
    { title: "ISO 14971", description: "Risk management for medical devices" },
    { title: "ISO 10993", description: "Biological evaluation of medical devices" },
    { title: "FDA QSR", description: "US Quality System Regulation" },
    { title: "EU MDR", description: "Medical Device Regulation 2017/745" },
    { title: "MDSAP", description: "Medical Device Single Audit Program" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Regulatory Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory information organized by region and product type
          </p>
        </div>

        {/* Regional Resources */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-coral" />
            <h2 className="text-3xl font-bold">Regional Regulatory Bodies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{region.flag}</span>
                  <h3 className="text-xl font-bold group-hover:text-coral transition-colors">
                    {region.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  {region.regulators.map((regulator, idx) => (
                    <div
                      key={idx}
                      className="text-sm bg-secondary px-3 py-2 rounded-lg text-muted-foreground"
                    >
                      {regulator}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-gold" />
            <h2 className="text-3xl font-bold">Product Categories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all cursor-pointer group"
              >
                <p className="font-semibold group-hover:text-coral transition-colors">
                  {category}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Region-specific regulations and guidance
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Management Standards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-coral" />
            <h2 className="text-3xl font-bold">Quality Management Standards</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all cursor-pointer group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-coral transition-colors">
                  {standard.title}
                </h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Resources Links */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-gold" />
            <h2 className="text-3xl font-bold">Regulatory Authority Links</h2>
          </div>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://www.fda.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                US FDA →
              </a>
              <a
                href="https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                EU Medical Device Guidance →
              </a>
              <a
                href="https://cdsco.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                CDSCO India →
              </a>
              <a
                href="https://english.nmpa.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                NMPA China →
              </a>
              <a
                href="https://www.pmda.go.jp/english/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                PMDA Japan →
              </a>
              <a
                href="https://www.iso.org/standard/72704.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                ISO 13485 Standard →
              </a>
              <a
                href="https://www.mdsap.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                MDSAP Program →
              </a>
              <a
                href="https://www.tga.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                TGA Australia →
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              More detailed regulatory guidance documents and templates will be available in the
              full resource library
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
