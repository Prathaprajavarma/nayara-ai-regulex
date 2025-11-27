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
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Regulatory Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory documentation by product type and country
          </p>
        </div>

        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Health Product Type</label>
              <Select value={selectedProductType} onValueChange={setSelectedProductType}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block">Search Topics</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by topic or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredData.length} of {resourceData.length} resources
          </div>

          <ScrollArea className="h-[600px] w-full rounded-md border">
            <Table>
              <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                  <TableHead className="w-[25%]">Health Product Type</TableHead>
                  <TableHead className="w-[20%]">Country</TableHead>
                  <TableHead className="w-[35%]">Topic</TableHead>
                  <TableHead className="w-[15%]">Type</TableHead>
                  <TableHead className="w-[5%] text-center">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-secondary/50 transition-colors">
                      <TableCell className="font-medium">{item.productType}</TableCell>
                      <TableCell>{item.country}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {item.topicType}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-coral transition-colors"
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
