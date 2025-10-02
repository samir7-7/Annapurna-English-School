import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  credential: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The team-based here strengthened both my technical skills and my ability to collaborate. I now feel confident tackling any tech challenge as part of a team.",
    name: "Pralad Neupane",
    credential: "Class 7 (Topper)",
    image: student1,
  },
  {
    id: 2,
    quote:
      "The hands-on learning approach and supportive faculty helped me develop both technical expertise and professional confidence. The real-world projects prepared me perfectly for my career.",
    name: "Ram Karki",
    credential: "Class 8 (Topper)",
    image: student2,
  },
  {
    id: 3,
    quote:
      "Being part of this institution transformed my career prospects. The combination of theoretical knowledge and practical application gave me a competitive edge in the job market.",
    name: "Sita Bajgain",
    credential: "Class 9 (Topper)",
    image: student3,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl max-h-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Testimonial Card */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* Student Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="bg-[#72A329] p-8 md:p-10 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 text-white/30" />

                {/* Quote Text */}
                <p className="text-gray-50 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                  {currentTestimonial.quote}
                </p>

                {/* Student Info */}
                <div className="text-gray-50 ">
                  <h4 className="font-bold text-xl md:text-2xl mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm md:text-base opacity-90">
                    {currentTestimonial.credential}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Heading and Navigation */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 lg:mb-12">
              What Our Students Have to Say
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors border-gray-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-500" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors border-gray-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 justify-center lg:justify-start mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
