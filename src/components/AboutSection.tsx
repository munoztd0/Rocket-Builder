import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="bg-courier-light py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6 leading-tight">
              La seule coopérative de coursiers 100% à vélo, gérée par ses membres à Genève
            </h2>

            <div className="space-y-6 text-courier-dark font-asap">
              <p className="text-lg leading-relaxed">
                Depuis 2024, nous travaillons sept jours sur sept pour fournir des solutions 
                de livraison rapides, fiables et durables dans toute la région genevoise.
              </p>

              <p className="text-lg leading-relaxed">
                Notre équipe de coursiers professionnels s'engage à offrir un service 
                de qualité tout en respectant l'environnement et en promouvant une 
                économie locale et solidaire.
              </p>

              <p className="text-lg leading-relaxed">
                En tant que coopérative, nous assurons des conditions de travail équitables 
                et une participation active de tous nos membres aux décisions.
              </p>
            </div>
          </div>

          {/* Rider Image */}
          <div className="lg:w-1/2">
            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-asap text-xl">
                Rider Portrait
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
