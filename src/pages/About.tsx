import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Co-founder & Operations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate about sustainable urban logistics.",
      image: "team-1",
    },
    {
      name: "Jordan Kim",
      role: "Co-founder & Technology",
      description:
        "Sed do eiusmod tempor incididunt ut labore. Expert in logistics technology and route optimization.",
      image: "team-2",
    },
    {
      name: "Sam Johnson",
      role: "Lead Courier",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation. 5+ years of urban cycling experience.",
      image: "team-3",
    },
    {
      name: "Casey Park",
      role: "Customer Relations",
      description:
        "Duis aute irure dolor in reprehenderit. Dedicated to exceptional customer service and support.",
      image: "team-4",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Deliveries Completed" },
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Partner Businesses" },
    { number: "0", label: "Carbon Emissions" },
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">About Us</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            A cooperative of dedicated cyclists committed to sustainable urban
            delivery and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-courier-dark font-asap text-lg">
                <p>
                  Founded in 2024, CourierCo started as a small group of
                  cyclists passionate about creating a more sustainable and
                  equitable delivery system in our city.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  We believe that delivery services should benefit both
                  businesses and the communities they serve.
                </p>
                <p>
                  Today, we're proud to be the city's leading bicycle-powered
                  courier cooperative, serving hundreds of local businesses
                  while maintaining our commitment to sustainability and worker
                  ownership.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-asap text-xl">
                  Company Story Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-courier-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-asap font-extrabold text-section text-courier-light text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-asap font-extrabold text-4xl lg:text-5xl text-courier-lime mb-2">
                  {stat.number}
                </div>
                <div className="font-asap text-courier-light text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
              Our Mission & Values
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              We're committed to creating positive change in urban logistics
              through sustainable practices and cooperative ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">S</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Sustainable
                </h3>
                <p className="font-asap text-courier-dark">
                  Zero emissions delivery using only bicycle-powered transport
                  for a cleaner urban environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">E</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Equitable
                </h3>
                <p className="font-asap text-courier-dark">
                  Worker-owned cooperative model ensuring fair wages and shared
                  decision-making for all team members.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">R</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Reliable
                </h3>
                <p className="font-asap text-courier-dark">
                  Consistent, professional service with real-time tracking and
                  transparent communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-courier-accent">
        <div className="container mx-auto px-4">
          <h2 className="font-asap font-extrabold text-section text-courier-dark text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-courier-light border-2 border-courier-dark"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="font-asap font-bold text-lg text-courier-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="font-asap font-semibold text-courier-dark mb-3 opacity-80">
                    {member.role}
                  </p>
                  <p className="font-asap text-courier-dark text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
