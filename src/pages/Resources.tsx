import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Search } from "lucide-react";

interface ResourceItem {
  id: string;
  productType: string;
  country: string;
  topic: string;
  topicType: string;
  fileUrl: string;
}

const Resources = () => {
  const [selectedProductType, setSelectedProductType] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const productTypes = [
    "Biologic Drugs",
    "Cosmetics",
    "Foods",
    "Medical Devices",
    "Pharmaceutical Drugs",
    "Software as a Medical Device",
    "Tobacco & Restricted Products"
  ];

  const countries = [
    "Australia", "Brazil", "Canada", "China", "European Union", "India", 
    "Japan", "Singapore", "South Korea", "United Kingdom", "United States"
  ];

  const topicTypes = [
    "Laws", "Regulations", "Guidelines", "Templates", "Interpretations", 
    "Interviews", "Sample Applications", "PDF Documents", "Excel Documents", 
    "Word Documents", "PowerPoint Documents", "Gantt Charts"
  ];

  // Sample data - in production this would come from a database
  const resourceData: ResourceItem[] = [
    { id: "1", productType: "Medical Devices", country: "United States", topic: "FDA 510(k) Submission Guidelines", topicType: "Guidelines", fileUrl: "#" },
    { id: "2", productType: "Pharmaceutical Drugs", country: "European Union", topic: "EMA Clinical Trial Regulations", topicType: "Regulations", fileUrl: "#" },
    { id: "3", productType: "Medical Devices", country: "India", topic: "CDSCO Registration Template", topicType: "Templates", fileUrl: "#" },
    { id: "4", productType: "Biologic Drugs", country: "United States", topic: "FDA BLA Application Sample", topicType: "Sample Applications", fileUrl: "#" },
    { id: "5", productType: "Software as a Medical Device", country: "Canada", topic: "Health Canada SaMD Guidelines", topicType: "Guidelines", fileUrl: "#" },
    { id: "6", productType: "Medical Devices", country: "Japan", topic: "PMDA Quality Management Standards", topicType: "PDF Documents", fileUrl: "#" },
    { id: "7", productType: "Cosmetics", country: "China", topic: "NMPA Cosmetic Registration Laws", topicType: "Laws", fileUrl: "#" },
    { id: "8", productType: "Foods", country: "Australia", topic: "TGA Food Safety Regulations", topicType: "Regulations", fileUrl: "#" },
    { id: "9", productType: "Pharmaceutical Drugs", country: "United Kingdom", topic: "MHRA Drug Approval Process", topicType: "Guidelines", fileUrl: "#" },
    { id: "10", productType: "Tobacco & Restricted Products", country: "Singapore", topic: "HSA Tobacco Product Regulations", topicType: "Regulations", fileUrl: "#" },
    { id: "11", productType: "Medical Devices", country: "European Union", topic: "MDR Implementation Timeline", topicType: "Gantt Charts", fileUrl: "#" },
    { id: "12", productType: "Biologic Drugs", country: "Canada", topic: "Biologics Regulatory Interpretation", topicType: "Interpretations", fileUrl: "#" },
  ];

  const filteredData = useMemo(() => {
    return resourceData.filter(item => {
      const matchesProductType = selectedProductType === "all" || item.productType === selectedProductType;
      const matchesCountry = selectedCountry === "all" || item.country === selectedCountry;
      const matchesSearch = searchTerm === "" || 
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topicType.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesProductType && matchesCountry && matchesSearch;
    });
  }, [selectedProductType, selectedCountry, searchTerm, resourceData]);

  return (
    <div className="min-h-screen pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-sapphire to-hessonite">
            Regulatory Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory documentation by product type and country
          </p>
        </div>

        <Card className="p-6 mb-6 border-2 border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block text-hessonite">Health Product Type</label>
              <Select value={selectedProductType} onValueChange={setSelectedProductType}>
                <SelectTrigger className="border-border focus:ring-yellow-sapphire">
                  <SelectValue placeholder="All Product Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Product Types</SelectItem>
                  {productTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-hessonite">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="border-border focus:ring-yellow-sapphire">
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-hessonite">Search Topics</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by topic or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border focus:ring-yellow-sapphire"
                />
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Showing <span className="text-yellow-sapphire font-medium">{filteredData.length}</span> of {resourceData.length} resources
          </div>

          <ScrollArea className="h-[600px] w-full rounded-md border border-border">
            <Table>
              <TableHeader className="sticky top-0 bg-card z-10">
                <TableRow className="border-b border-border">
                  <TableHead className="w-[25%] text-hessonite">Health Product Type</TableHead>
                  <TableHead className="w-[20%] text-hessonite">Country</TableHead>
                  <TableHead className="w-[35%] text-hessonite">Topic</TableHead>
                  <TableHead className="w-[15%] text-hessonite">Type</TableHead>
                  <TableHead className="w-[5%] text-center text-hessonite">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-secondary/50 transition-colors border-b border-border">
                      <TableCell className="font-medium text-foreground">{item.productType}</TableCell>
                      <TableCell className="text-foreground">{item.country}</TableCell>
                      <TableCell className="text-foreground">{item.topic}</TableCell>
                      <TableCell>
                        <span className="text-xs bg-yellow-sapphire/10 text-yellow-sapphire px-2 py-1 rounded-full">
                          {item.topicType}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-yellow-sapphire transition-colors"
                          onClick={() => window.open(item.fileUrl, '_blank')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No resources found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default Resources;