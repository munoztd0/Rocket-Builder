import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-courier-dark">
            <h2 className="text-4xl font-bold mb-6">
              À Propos
            </h2>
            <div className="space-y-6">
              <p className="text-lg">
                Rocket Courrier est une coopérative de cyclomessagerie basée à
                Genève. Nous offrons des services de livraison écologiques,
                efficaces et personnalisés pour répondre aux besoins de nos
                clients.
              </p>
              <p className="text-lg">
                Notre équipe de coursiers professionnels s'engage à fournir un
                service rapide et fiable, que ce soit pour des documents urgents
                ou des colis volumineux.
              </p>
              <p className="text-lg">
                En tant que coopérative, nous croyons en une approche équitable
                et durable du service de livraison, où chaque membre contribue
                au succès de l'entreprise.
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/Rocket-Builder/img/messenger_portait.jpeg"
              alt="About Rocket Courrier"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
