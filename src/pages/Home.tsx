import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb } from "lucide-react";
import worldMapHero from "@/assets/world-map-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${worldMapHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-gold">
              Accelerated Approvals
            </span>
            <br />
            with Automated Accordance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
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
                className="border-2 border-coral text-coral hover:bg-coral hover:text-white text-lg px-8"
              >
                Schedule Consultation
              </Button>
            </Link>
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
                <div className="p-3 bg-gradient-coral rounded-xl">
                  <Target className="h-8 w-8 text-white" />
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
                <div className="p-3 bg-gradient-gold rounded-xl">
                  <Lightbulb className="h-8 w-8 text-white" />
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
              <Globe className="h-12 w-12 text-coral mb-4" />
              <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Navigate regulatory landscapes across major markets including US, EU, India, China,
                Japan, and more.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-elegant transition-all">
              <Target className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3">Strategic Expertise</h3>
              <p className="text-muted-foreground">
                Expert regulatory strategies tailored to your product's unique requirements and
                market goals.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-elegant transition-all">
              <Lightbulb className="h-12 w-12 text-coral mb-4" />
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
