import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb } from "lucide-react";
import worldMapHero from "@/assets/world-map-dark.jpg";
import { useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const mapBg = document.getElementById("world-map-bg");
      if (mapBg) {
        const scale = 1 + scrolled * 0.0005;
        mapBg.style.transform = `scale(${Math.min(scale, 1.3)})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - World Map */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${worldMapHero})`,
            backgroundSize: "180% auto",
            backgroundPosition: "38% center",
            transform: "scale(1)",
          }}
          id="world-map-bg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        {/* Animated Network Grid Lines - Gold only */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gold gradient for all network lines */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(48 100% 50%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="goldGradientReverse" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(48 100% 50%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* India as the central hub - positioned to match map */}
          <g>
            {/* Central pulsing hub at India */}
            <circle
              cx="960"
              cy="440"
              r="14"
              fill="hsl(48 100% 50%)"
              opacity="0.3"
              className="animate-pulse"
            />
            <circle
              cx="960"
              cy="440"
              r="9"
              fill="hsl(48 100% 50%)"
              className="animate-pulse-glow"
            />
            
            {/* Network lines from India to other countries (Gold) */}
            
            {/* India to USA */}
            <path
              d="M 960 440 Q 600 300 240 380"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="animate-[grid-flow_4s_ease-in-out_infinite]"
            />
            
            {/* India to Europe */}
            <path
              d="M 960 440 Q 800 350 680 360"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="700"
              strokeDashoffset="700"
              className="animate-[grid-flow_3.5s_ease-in-out_infinite]"
              style={{ animationDelay: "0.5s" }}
            />
            
            {/* India to China/East Asia */}
            <path
              d="M 960 440 Q 1100 380 1240 400"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="800"
              strokeDashoffset="800"
              className="animate-[grid-flow_3.8s_ease-in-out_infinite]"
              style={{ animationDelay: "1s" }}
            />
            
            {/* India to Australia */}
            <path
              d="M 960 440 Q 1150 600 1380 720"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="900"
              strokeDashoffset="900"
              className="animate-[grid-flow_4.2s_ease-in-out_infinite]"
              style={{ animationDelay: "1.5s" }}
            />
            
            {/* India to Middle East */}
            <path
              d="M 960 440 Q 880 420 800 430"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="500"
              strokeDashoffset="500"
              className="animate-[grid-flow_3s_ease-in-out_infinite]"
              style={{ animationDelay: "2s" }}
            />

            {/* India to Africa */}
            <path
              d="M 960 440 Q 780 520 620 620"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="700"
              strokeDashoffset="700"
              className="animate-[grid-flow_3.6s_ease-in-out_infinite]"
              style={{ animationDelay: "2.5s" }}
            />

            {/* India to Brazil/South America */}
            <path
              d="M 960 440 Q 500 550 320 680"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="900"
              strokeDashoffset="900"
              className="animate-[grid-flow_4s_ease-in-out_infinite]"
              style={{ animationDelay: "3s" }}
            />

            {/* India to Russia */}
            <path
              d="M 960 440 Q 1000 280 1100 220"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="600"
              strokeDashoffset="600"
              className="animate-[grid-flow_3.4s_ease-in-out_infinite]"
              style={{ animationDelay: "3.5s" }}
            />

            {/* India to Japan */}
            <path
              d="M 960 440 Q 1200 350 1420 360"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="800"
              strokeDashoffset="800"
              className="animate-[grid-flow_3.7s_ease-in-out_infinite]"
              style={{ animationDelay: "4s" }}
            />

            {/* India to Canada */}
            <path
              d="M 960 440 Q 600 220 280 260"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="950"
              strokeDashoffset="950"
              className="animate-[grid-flow_4.3s_ease-in-out_infinite]"
              style={{ animationDelay: "4.5s" }}
            />
          </g>
        </svg>

        {/* Interactive Tooltip Points */}
        <TooltipProvider delayDuration={0}>
          <div className="absolute inset-0 pointer-events-none">
            {/* India Hub - Central Point */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-6 h-6 -ml-3 -mt-3 pointer-events-auto cursor-help"
                  style={{ left: "50%", top: "40.7%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/30 hover:bg-gold/50 transition-colors border-2 border-gold animate-pulse" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">India - Central Hub</p>
                <p className="text-sm">CDSCO, Ayush, FSSAI regulatory expertise. Strategic gateway for global market access.</p>
              </TooltipContent>
            </Tooltip>

            {/* USA */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "12.5%", top: "35.2%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">United States</p>
                <p className="text-sm">FDA approvals, IND/NDA submissions, 510(k) clearance, clinical trial support.</p>
              </TooltipContent>
            </Tooltip>

            {/* Europe */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "35.4%", top: "33.3%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">European Union</p>
                <p className="text-sm">EMA submissions, CE marking, MDR/IVDR compliance, centralized procedures.</p>
              </TooltipContent>
            </Tooltip>

            {/* China/East Asia */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "64.6%", top: "37%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">China & East Asia</p>
                <p className="text-sm">NMPA registrations, PMDA Japan submissions, KFDA Korea, ASEAN harmonization.</p>
              </TooltipContent>
            </Tooltip>

            {/* Australia */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "71.9%", top: "66.7%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Australia</p>
                <p className="text-sm">TGA registrations, ARTG listings, clinical trial notifications, conformity assessments.</p>
              </TooltipContent>
            </Tooltip>

            {/* Middle East */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "41.7%", top: "39.8%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Middle East</p>
                <p className="text-sm">GCC registrations, Saudi FDA, UAE MOH, halal certification, regional harmonization.</p>
              </TooltipContent>
            </Tooltip>

            {/* Africa */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "32.3%", top: "57.4%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Africa</p>
                <p className="text-sm">SAHPRA South Africa, NAFDAC Nigeria, regional harmonization initiatives.</p>
              </TooltipContent>
            </Tooltip>

            {/* Japan */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "74%", top: "33.3%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Japan</p>
                <p className="text-sm">PMDA submissions, Shonin approvals, GMP compliance, clinical trials.</p>
              </TooltipContent>
            </Tooltip>

            {/* Brazil */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "16.7%", top: "63%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">South America</p>
                <p className="text-sm">ANVISA Brazil, ANMAT Argentina, regional regulatory strategies.</p>
              </TooltipContent>
            </Tooltip>

            {/* Russia */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "57.3%", top: "20.4%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Russia</p>
                <p className="text-sm">Roszdravnadzor registrations, EAEU compliance, CIS market access.</p>
              </TooltipContent>
            </Tooltip>

            {/* Canada */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "14.6%", top: "24.1%" }}
                >
                  <div className="w-full h-full rounded-full bg-gold/20 hover:bg-gold/40 transition-colors border-2 border-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-gold">Canada</p>
                <p className="text-sm">Health Canada submissions, NOC approvals, medical device licensing.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </section>

      {/* Content Section Below Map */}
      <section className="relative -mt-32 z-10 pb-24">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in">
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink-pearl">
                Accelerated Approvals
              </span>
              <br />
              with Automated Accordance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert regulatory strategies and compliance solutions for healthcare products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-black text-lg px-8"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-gold rounded-xl">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h2 className="text-3xl font-bold">Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To bridge gaps in global regulatory landscapes with regulatory intelligence and
                provide dexterity for leaders.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-pink rounded-xl">
                  <Lightbulb className="h-8 w-8 text-black" />
                </div>
                <h2 className="text-3xl font-bold">Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide global regulatory solutions for your product in effective timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose NAYARAi?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive regulatory expertise across the product lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-elegant transition-all">
              <Globe className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Navigate regulatory landscapes across major markets including US, EU, India, China,
                Japan, and more.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-elegant transition-all">
              <Target className="h-12 w-12 text-pink-pearl mb-4" />
              <h3 className="text-2xl font-bold mb-3">Strategic Expertise</h3>
              <p className="text-muted-foreground">
                Expert regulatory strategies tailored to your product's unique requirements and
                market goals.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-elegant transition-all">
              <Lightbulb className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-muted-foreground">
                Comprehensive services from product submission to post-market surveillance and
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
