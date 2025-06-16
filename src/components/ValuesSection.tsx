import { cn } from "@/lib/utils";

const ValuesSection = () => {
  return (
    <section className="bg-courier-dark py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Rider Image */}
          <div className="lg:w-1/2">
            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-asap text-xl">
                Sustainability Image
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="font-asap font-extrabold text-section text-courier-light mb-6 leading-tight">
              ÉQUITABLE, DURABLE ET RESPONSABLE
            </h2>

            <div className="space-y-6 text-courier-light font-asap">
              <p className="text-lg leading-relaxed">
                Réaliser toutes nos livraisons à vélo signifie zéro émission,
                contribuant à un meilleur environnement urbain pour tous. Notre
                modèle coopératif garantit que chaque membre de l'équipe est
                valorisé et impliqué.
              </p>

              <p className="text-lg leading-relaxed">
                En tant que coopérative, nous privilégions :
              </p>

              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                  Des conditions de travail équitables
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                  Une prise de décision démocratique
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                  La transparence dans nos opérations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                  L'engagement environnemental
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
