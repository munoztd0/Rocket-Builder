import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="bg-courier-light py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6 leading-tight">
              The city's only rider-run, 100% bicycle powered courier co-op
            </h2>

            <div className="space-y-6 text-courier-dark font-asap">
              <p className="text-lg leading-relaxed">
                Since 2024 we've been working seven days a week to provide fast,
                reliable, and sustainable delivery solutions throughout the
                metropolitan area.
              </p>

              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <p className="text-lg leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
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
