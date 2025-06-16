import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "E-commerce & Wholesale",
      subtitle: "Complete Stock Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      features: [
        "Real-time inventory tracking",
        "Automated order processing",
        "Same-day pickup and delivery",
        "Custom integration solutions",
      ],
      image: "e-commerce-service",
    },
    {
      title: "Same-day Express Courier",
      subtitle: "Fast & Reliable Delivery",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      features: [
        "1-3 hour delivery windows",
        "Real-time tracking",
        "Proof of delivery",
        "Emergency rush service",
      ],
      image: "express-courier",
    },
    {
      title: "Food & Catering Delivery",
      subtitle: "Fresh & On-time",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      features: [
        "Temperature-controlled transport",
        "Specialized food handling",
        "Event catering support",
        "Bulk order management",
      ],
      image: "food-delivery",
    },
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Our Services</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Professional courier and delivery solutions tailored to your
            business needs. From express deliveries to comprehensive logistics
            management.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-asap text-xl">
                      {service.image}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2">
                  <h2 className="font-asap font-extrabold text-section text-courier-dark mb-2">
                    {service.title}
                  </h2>
                  <h3 className="font-asap font-bold text-xl text-courier-dark mb-6 opacity-80">
                    {service.subtitle}
                  </h3>
                  <p className="font-asap text-courier-dark text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center font-asap text-courier-dark"
                      >
                        <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className="bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-courier-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-asap font-extrabold text-section text-courier-light mb-6">
            Ready to get started?
          </h2>
          <p className="font-asap text-courier-light text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your delivery needs and get a custom
            quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-courier-light hover:bg-courier-light/90 text-courier-dark font-asap px-8"
            >
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-courier-light text-courier-light hover:bg-courier-light hover:text-courier-dark font-asap px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
