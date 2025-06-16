import { cn } from "@/lib/utils";

const ValuesSection = () => {
  return (
    <section className="bg-courier-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/Rocket-Builder/img/sustainable.jpeg" 
              alt="Our Values"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-courier-light">
            <h2 className="text-4xl font-bold mb-6">Nos Valeurs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Durable</h3>
                <p>
                  Nous nous engageons à réduire notre impact environnemental en
                  utilisant uniquement des vélos et des vélos cargo pour nos
                  livraisons.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Local</h3>
                <p>
                  En tant que coopérative genevoise, nous soutenons l'économie
                  locale et créons des emplois équitables dans notre communauté.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Professionnel</h3>
                <p>
                  Notre équipe expérimentée assure un service rapide, fiable et
                  professionnel pour toutes vos livraisons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
