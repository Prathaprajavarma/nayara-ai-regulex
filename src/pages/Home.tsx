import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb } from "lucide-react";
import worldMapHero from "@/assets/world-map-1945.jpg";
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1)",
          }}
          id="world-map-bg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        </div>

        {/* Animated Network Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gold gradient for outgoing lines from India */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(48 100% 50%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
            </linearGradient>
            
            {/* Pink pearl gradient for incoming lines to India */}
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(350 100% 85%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(350 100% 85%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(350 100% 85%)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* India as the central hub - all lines connect through this point */}
          <g>
            {/* Central pulsing hub at India */}
            <circle
              cx="960"
              cy="540"
              r="12"
              fill="hsl(48 100% 50%)"
              opacity="0.3"
              className="animate-pulse"
            />
            <circle
              cx="960"
              cy="540"
              r="8"
              fill="hsl(48 100% 50%)"
              className="animate-pulse-glow"
            />
            
            {/* Outgoing lines from India (Gold) - all start from center */}
            
            {/* India to USA */}
            <path
              d="M 960 540 Q 680 360 400 480"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="animate-[grid-flow_4s_ease-in-out_infinite]"
            />
            
            {/* India to Europe */}
            <path
              d="M 960 540 Q 920 480 880 500"
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
              d="M 960 540 Q 1120 480 1280 520"
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
              d="M 960 540 Q 1120 680 1280 800"
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
              d="M 960 540 Q 920 540 840 550"
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
              d="M 960 540 Q 860 620 760 700"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeDasharray="700"
              strokeDashoffset="700"
              className="animate-[grid-flow_3.6s_ease-in-out_infinite]"
              style={{ animationDelay: "2.5s" }}
            />

            {/* Incoming lines to India (Pink Pearl) - all end at center */}
            
            {/* USA to India */}
            <path
              d="M 400 480 Q 680 360 960 540"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="2.5"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="animate-[grid-flow_4s_ease-in-out_infinite]"
              style={{ animationDelay: "3s" }}
            />
            
            {/* Europe to India */}
            <path
              d="M 880 500 Q 920 480 960 540"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="2.5"
              strokeDasharray="700"
              strokeDashoffset="700"
              className="animate-[grid-flow_3.5s_ease-in-out_infinite]"
              style={{ animationDelay: "3.5s" }}
            />
            
            {/* China/East Asia to India */}
            <path
              d="M 1280 520 Q 1120 480 960 540"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="2.5"
              strokeDasharray="800"
              strokeDashoffset="800"
              className="animate-[grid-flow_3.8s_ease-in-out_infinite]"
              style={{ animationDelay: "4s" }}
            />
            
            {/* Australia to India */}
            <path
              d="M 1280 800 Q 1120 680 960 540"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="2.5"
              strokeDasharray="900"
              strokeDashoffset="900"
              className="animate-[grid-flow_4.2s_ease-in-out_infinite]"
              style={{ animationDelay: "4.5s" }}
            />
            
            {/* Africa to India */}
            <path
              d="M 760 700 Q 860 620 960 540"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="2.5"
              strokeDasharray="700"
              strokeDashoffset="700"
              className="animate-[grid-flow_3.6s_ease-in-out_infinite]"
              style={{ animationDelay: "5s" }}
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
                  style={{ left: "50%", top: "50%" }}
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
                  style={{ left: "20.8%", top: "44.4%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">United States</p>
                <p className="text-sm">FDA approvals, IND/NDA submissions, 510(k) clearance, clinical trial support.</p>
              </TooltipContent>
            </Tooltip>

            {/* Europe */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "45.8%", top: "46.3%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">European Union</p>
                <p className="text-sm">EMA submissions, CE marking, MDR/IVDR compliance, centralized procedures.</p>
              </TooltipContent>
            </Tooltip>

            {/* China/East Asia */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "66.7%", top: "48.1%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">China & East Asia</p>
                <p className="text-sm">NMPA registrations, PMDA Japan submissions, KFDA Korea, ASEAN harmonization.</p>
              </TooltipContent>
            </Tooltip>

            {/* Australia */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "66.7%", top: "74.1%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">Australia</p>
                <p className="text-sm">TGA registrations, ARTG listings, clinical trial notifications, conformity assessments.</p>
              </TooltipContent>
            </Tooltip>

            {/* Middle East */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "43.8%", top: "50.9%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">Middle East</p>
                <p className="text-sm">GCC registrations, Saudi FDA, UAE MOH, halal certification, regional harmonization.</p>
              </TooltipContent>
            </Tooltip>

            {/* Africa */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="absolute w-4 h-4 -ml-2 -mt-2 pointer-events-auto cursor-help"
                  style={{ left: "39.6%", top: "64.8%" }}
                >
                  <div className="w-full h-full rounded-full bg-pink-pearl/20 hover:bg-pink-pearl/40 transition-colors border-2 border-pink-pearl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-bold text-pink-pearl">Africa</p>
                <p className="text-sm">SAHPRA South Africa, NAFDAC Nigeria, regional harmonization initiatives.</p>
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
