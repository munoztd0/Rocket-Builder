import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone",
      details: "555 – 123 – 4567",
      icon: "📞",
    },
    {
      title: "Email",
      details: "hello@courierco.com",
      icon: "✉️",
    },
    {
      title: "Address",
      details: "123 Main Street\nCity, Province A1A 1A1",
      icon: "📍",
    },
    {
      title: "Hours",
      details: "Mon-Fri: 9am – 6pm\nSat-Sun: 12pm – 9pm",
      icon: "🕒",
    },
  ];

  const services = [
    "Same-day delivery",
    "Express courier",
    "E-commerce fulfillment",
    "Food delivery",
    "Bulk deliveries",
    "Custom logistics",
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Contact Us</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Ready to start your sustainable delivery journey? Get in touch with
            our team for quotes, questions, or to open your account.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <Card className="border-2 border-courier-dark">
                <CardHeader>
                  <CardTitle className="font-asap font-bold text-2xl text-courier-dark">
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="font-asap text-courier-dark"
                        >
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          className="border-courier-dark focus:border-courier-lime"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="font-asap text-courier-dark"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          className="border-courier-dark focus:border-courier-lime"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="font-asap text-courier-dark"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="font-asap text-courier-dark"
                      >
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="service"
                        className="font-asap text-courier-dark"
                      >
                        Service Interest
                      </Label>
                      <select className="w-full p-3 border-2 border-courier-dark rounded-md focus:border-courier-lime bg-white">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="font-asap text-courier-dark"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your delivery needs..."
                        rows={6}
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                <h2 className="font-asap font-extrabold text-2xl text-courier-dark mb-6">
                  Get in Touch
                </h2>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-courier-dark">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-asap font-bold text-lg text-courier-dark mb-2">
                            {info.title}
                          </h3>
                          <p className="font-asap text-courier-dark whitespace-pre-line">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Quick Actions */}
                <Card className="border-2 border-courier-dark bg-courier-accent">
                  <CardContent className="p-6">
                    <h3 className="font-asap font-bold text-lg text-courier-dark mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button
                        className="w-full bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                        size="sm"
                      >
                        Request Quote
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-courier-dark text-courier-dark hover:bg-courier-dark hover:text-courier-light font-asap"
                        size="sm"
                      >
                        Book Delivery
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-courier-dark text-courier-dark hover:bg-courier-dark hover:text-courier-light font-asap"
                        size="sm"
                      >
                        Open Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
              Visit Our Hub
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              Stop by our central hub to meet the team and see our operations in
              action.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Map Placeholder */}
            <div className="lg:w-2/3">
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gray-600 font-asap text-xl block mb-2">
                    Interactive Map
                  </span>
                  <span className="text-gray-500 font-asap text-sm">
                    123 Main Street, City
                  </span>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="lg:w-1/3">
              <Card className="border-2 border-courier-dark h-fit">
                <CardContent className="p-6">
                  <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                    Hub Information
                  </h3>
                  <div className="space-y-4 font-asap text-courier-dark">
                    <div>
                      <strong>Address:</strong>
                      <br />
                      123 Main Street
                      <br />
                      City, Province A1A 1A1
                    </div>
                    <div>
                      <strong>Parking:</strong>
                      <br />
                      Bike racks available
                      <br />
                      Street parking nearby
                    </div>
                    <div>
                      <strong>Accessibility:</strong>
                      <br />
                      Ground floor access
                      <br />
                      Wheelchair accessible
                    </div>
                    <div>
                      <strong>Transit:</strong>
                      <br />
                      Bus stop: 2 blocks
                      <br />
                      Metro station: 0.5 km
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
