import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const services = [
    {
      title: "E-commerce & Wholesale",
      subtitle: "Stock Management Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "service-1",
    },
    {
      title: "Same-day Express",
      subtitle: "Courier Services",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      image: "service-2",
    },
    {
      title: "On-demand Food",
      subtitle: "& Catering Delivery",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "service-3",
    },
  ];

  return (
    <section className="bg-courier-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Service Image Placeholder */}
              <div className="w-full h-64 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-600 font-asap">{service.image}</span>
              </div>

              {/* Service Content */}
              <div className="text-courier-light">
                <h3 className="font-asap font-bold text-section mb-2">
                  {service.title}
                </h3>
                <h4 className="font-asap font-bold text-section mb-4">
                  {service.subtitle}
                </h4>
                <p className="font-asap text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
