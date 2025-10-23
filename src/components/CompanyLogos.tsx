import { Badge } from "@/components/ui/badge";

const CompanyLogos = () => {
  const companies = [
    "TechCorp", "InnovateLabs", "FutureTech", "SmartSystems", 
    "DataDrive", "CloudWorks", "AIFirst", "BlockTech"
  ];

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">Trusted by innovative companies worldwide</p>
      </div>
      
      <div className="relative">
        <div className="flex animate-[slide_15s_linear_infinite] space-x-8">
          {[...companies, ...companies].map((company, index) => (
            <Badge
              key={`${company}-${index}`}
              variant="outline"
              className="whitespace-nowrap px-6 py-2 text-lg font-medium hover:shadow-soft transition-smooth"
            >
              {company}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;


