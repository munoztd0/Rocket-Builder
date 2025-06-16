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
              EQUITABLE, SUSTAINABLE AND ACCOUNTABLE
            </h2>

            <div className="space-y-6 text-courier-light font-asap">
              <p className="text-lg leading-relaxed">
                Doing all of our deliveries on bike means zero emissions,
                reduced traffic congestion, and a positive impact on our urban
                environment.
              </p>

              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Our
                cooperative model ensures fair wages and worker ownership.
              </p>

              <p className="text-lg leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. We're
                accountable to our community and our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
