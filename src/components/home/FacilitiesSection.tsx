import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Building2, Microscope, Globe } from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Well-Stocked Library",
    description: "Extensive collection of books and digital resources to support learning and research.",
    link: "/about/facilities"
  },
  {
    icon: Microscope,
    title: "Science Labs",
    description: "Modern laboratories equipped with latest instruments for practical learning.",
    link: "/about/facilities"
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated and qualified teachers committed to student excellence.",
    link: "/about/facilities"
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    description: "Technology-enabled classrooms for interactive and engaging learning.",
    link: "/about/facilities"
  },
  {
    icon: Globe,
    title: "Digital Learning",
    description: "Online resources and e-learning platforms for modern education.",
    link: "/about/facilities"
  },
  {
    icon: Award,
    title: "Sports & Activities",
    description: "Comprehensive sports facilities and extracurricular programs.",
    link: "/about/facilities"
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            WELL FACILITATED SCHOOL
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Well Facilitated School" cultivates an empowering learning environment through exceptional facilities. By prioritizing excellence, they ensure students have access to the resources they need to thrive.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <facility.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-muted-foreground mb-4">{facility.description}</p>
              <Link to={facility.link}>
                <Button variant="link" className="p-0 h-auto">
                  Read More →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/about/facilities">
            <Button variant="default" size="lg">
              Explore All Facilities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
