import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Livraison Express",
      subtitle: "Rapide & Fiable",
      description:
        "Service de livraison urgent pour vos colis et documents importants. Nos coursiers expérimentés garantissent une livraison rapide et sécurisée dans toute la ville.",
      features: [
        "Livraison en 1-3 heures",
        "Suivi en temps réel",
        "Confirmation de livraison",
        "Service d'urgence",
      ],
      image: "express-courier",
    },
    {
      title: "Livraison Alimentaire",
      subtitle: "Frais & Ponctuel",
      description:
        "Transport spécialisé pour restaurants, traiteurs et commerces alimentaires. Équipement adapté pour maintenir la qualité et la température de vos produits.",
      features: [
        "Transport réfrigéré",
        "Manipulation spécialisée",
        "Support événementiel",
        "Gestion des commandes groupées",
      ],
      image: "food-delivery",
    },
    {
      title: "Services aux Entreprises",
      subtitle: "Solutions sur Mesure",
      description:
        "Solutions logistiques personnalisées pour les entreprises. De la livraison régulière de documents aux transports spéciaux, nous nous adaptons à vos besoins.",
      features: [
        "Contrats personnalisés",
        "Facturation mensuelle",
        "Service dédié",
        "Reporting détaillé",
      ],
      image: "business-service",
    }
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Nos Services</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Des solutions de livraison écologiques et efficaces, adaptées à vos besoins
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
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
                    En savoir plus
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
            Prêt à commencer ?
          </h2>
          <p className="font-asap text-courier-light text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-courier-light hover:bg-courier-light/90 text-courier-dark font-asap px-8"
            >
              Demander un devis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-courier-light text-courier-light hover:bg-courier-light hover:text-courier-dark font-asap px-8"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
