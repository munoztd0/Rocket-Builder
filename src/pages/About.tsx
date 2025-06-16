import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Co-fondateur & Opérations",
      description:
        "Passionné par la logistique urbaine durable et le développement de solutions écologiques.",
      image: "team-1",
    },
    {
      name: "Jordan Kim",
      role: "Co-fondateur & Technologie",
      description:
        "Expert en technologie logistique et optimisation des itinéraires pour une efficacité maximale.",
      image: "team-2",
    },
    {
      name: "Sam Johnson",
      role: "Coursier Principal",
      description:
        "Plus de 5 ans d'expérience en cyclisme urbain et livraison écologique.",
      image: "team-3",
    },
    {
      name: "Casey Park",
      role: "Relations Clients",
      description:
        "Dévouée au service client exceptionnel et au support personnalisé.",
      image: "team-4",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Livraisons Effectuées" },
    { number: "500+", label: "Clients Satisfaits" },
    { number: "50+", label: "Entreprises Partenaires" },
    { number: "0", label: "Émissions Carbone" },
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">À Propos</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Une coopérative de cyclistes dévoués, engagée dans la livraison urbaine
            durable et un service client exceptionnel.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-courier-dark font-asap text-lg">
                <p>
                  Fondé en 2024, Rocket Courrier a débuté comme un petit groupe de
                  cyclistes passionnés par la création d'un système de livraison plus
                  durable et équitable dans notre ville.
                </p>
                <p>
                  Notre vision était simple : proposer un service de livraison qui
                  profite à la fois aux entreprises et aux communautés qu'elles
                  servent, tout en préservant l'environnement.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'être la principale coopérative
                  de livraison à vélo de Genève, servant des centaines d'entreprises
                  locales tout en maintenant notre engagement envers la durabilité
                  et la propriété collective.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-asap text-xl">
                  Notre Histoire en Images
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
            En Chiffres
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
              Notre Mission & Nos Valeurs
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              Nous nous engageons à créer un changement positif dans la logistique urbaine
              grâce à des pratiques durables et une gestion coopérative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">D</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Durable
                </h3>
                <p className="font-asap text-courier-dark">
                  Livraison zéro émission utilisant uniquement des vélos pour un
                  environnement urbain plus propre.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">É</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Équitable
                </h3>
                <p className="font-asap text-courier-dark">
                  Modèle coopératif garantissant des salaires justes et une
                  participation aux décisions pour tous les membres.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-courier-dark font-bold text-xl">F</span>
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Fiable
                </h3>
                <p className="font-asap text-courier-dark">
                  Service professionnel constant avec suivi en temps réel et
                  communication transparente.
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
            Notre Équipe
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
