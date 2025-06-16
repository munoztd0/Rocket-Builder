import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-courier-accent pt-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Character Image Left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-48 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 font-asap">Character 1</span>
        </div>
      </div>

      {/* Character Image Right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-48 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 font-asap">Character 2</span>
        </div>
      </div>

      {/* Hero Text */}
      <div className="text-center px-4 max-w-4xl mx-auto z-10">
        <h1 className="font-asap font-bold text-courier-light leading-tight mb-8">
          <span className="block text-4xl md:text-6xl lg:text-hero">
            Local & independent
          </span>
          <span className="block text-4xl md:text-6xl lg:text-hero">
            courier co-op
          </span>
          <span className="block text-4xl md:text-6xl lg:text-hero">
            serving the city
          </span>
          <span className="block text-4xl md:text-6xl lg:text-hero">
            since 2024
          </span>
        </h1>

        <p className="text-courier-light text-lg md:text-xl font-asap max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-courier-lime rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-courier-lime rounded-full opacity-50 animate-pulse delay-300"></div>
    </section>
  );
};

export default Hero;
