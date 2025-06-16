import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excellent service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilite de placer des commandes et service rapide et courtois.",
      author: "AG",
      company: "Local Business",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Professional and reliable team.",
      author: "MJ",
      company: "Restaurant Chain",
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Outstanding customer service and very fast delivery times.",
      author: "RK",
      company: "E-commerce Store",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The most sustainable courier option in the city.",
      author: "LM",
      company: "Sustainable Co.",
    },
  ];

  return (
    <section className="bg-courier-accent py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-asap font-extrabold text-section text-courier-dark text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-courier-light border-2 border-courier-dark rounded-full p-6 hover:shadow-lg transition-shadow"
              style={{ borderBottomWidth: "6px" }}
            >
              <CardContent className="p-6 text-center">
                <p className="font-asap text-courier-dark mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-4">
                  <p className="font-asap font-bold text-courier-dark text-lg">
                    {testimonial.author}
                  </p>
                  <p className="font-asap text-courier-dark text-sm opacity-80">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
