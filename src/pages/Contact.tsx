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
      title: "Téléphone",
      details: "022 123 45 67",
      icon: "📞",
    },
    {
      title: "Email",
      details: "hello@rocketcourrier.ch",
      icon: "✉️",
    },
    {
      title: "Adresse",
      details: "123 Rue du Rhône\nGenève, 1204",
      icon: "📍",
    },
    {
      title: "Horaires",
      details: "Lun-Ven: 9h – 18h\nSam-Dim: 12h – 21h",
      icon: "🕒",
    },
  ];

  const services = [
    "Livraison le jour même",
    "Coursier express",
    "Logistique e-commerce",
    "Livraison alimentaire",
    "Livraisons groupées",
    "Logistique sur mesure",
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Contactez-nous</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Prêt à commencer votre voyage vers une livraison durable ? Contactez notre
            équipe pour des devis, des questions ou pour ouvrir votre compte.
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
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="font-asap text-courier-dark"
                        >
                          Prénom
                        </Label>
                        <Input
                          id="firstName"
                          className="border-courier-dark focus:border-courier-lime"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="font-asap text-courier-dark"
                        >
                          Nom
                        </Label>
                        <Input
                          id="lastName"
                          className="border-courier-dark focus:border-courier-lime"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="font-asap text-courier-dark"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="font-asap text-courier-dark"
                      >
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="service"
                        className="font-asap text-courier-dark"
                      >
                        Service
                      </Label>
                      <select className="w-full p-3 border-2 border-courier-dark rounded-md focus:border-courier-lime bg-white">
                        <option value="">Sélectionnez un service</option>
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
                        placeholder="Parlez-nous de vos besoins de livraison..."
                        rows={6}
                        className="border-courier-dark focus:border-courier-lime"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                    >
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Cards */}
            <div className="lg:w-1/3 space-y-6">
              {/* Quick Actions Card */}
              <Card className="border-2 border-courier-dark">
                <CardContent className="p-6">
                  <h3 className="font-asap font-bold text-lg text-courier-dark mb-4">
                    Actions Rapides
                  </h3>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                      size="sm"
                    >
                      Demander un devis
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-courier-dark text-courier-dark hover:bg-courier-dark hover:text-courier-light font-asap"
                      size="sm"
                    >
                      Réserver une course
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-courier-dark text-courier-dark hover:bg-courier-dark hover:text-courier-light font-asap"
                      size="sm"
                    >
                      Ouvrir un compte
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-2 border-courier-dark bg-courier-light"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{info.icon}</div>
                      <h3 className="font-asap font-bold text-courier-dark mb-1">
                        {info.title}
                      </h3>
                      <p className="font-asap text-courier-dark text-sm whitespace-pre-line">
                        {info.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
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
              Visitez Notre Hub
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              Passez à notre hub central pour rencontrer l'équipe et voir nos opérations en action.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Map Placeholder */}
            <div className="lg:w-2/3">
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gray-600 font-asap text-xl block mb-2">
                    Carte Interactive
                  </span>
                  <span className="text-gray-500 font-asap text-sm">
                    123 Rue du Rhône, Genève
                  </span>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="lg:w-1/3">
              <Card className="border-2 border-courier-dark h-fit">
                <CardContent className="p-6">
                  <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                    Informations Hub
                  </h3>
                  <div className="space-y-4 font-asap text-courier-dark">
                    <div>
                      <strong>Adresse:</strong>
                      <br />
                      123 Rue du Rhône
                      <br />
                      Genève, 1204
                    </div>
                    <div>
                      <strong>Stationnement:</strong>
                      <br />
                      Supports vélos disponibles
                      <br />
                      Parking public à proximité
                    </div>
                    <div>
                      <strong>Accessibilité:</strong>
                      <br />
                      Accès plain-pied
                      <br />
                      Accessible en fauteuil roulant
                    </div>
                    <div>
                      <strong>Transport:</strong>
                      <br />
                      Arrêt TPG: 2 minutes
                      <br />
                      Gare Cornavin: 10 minutes
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
