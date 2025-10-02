import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Annapurna School Logo.webp";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo/Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-br bg-white p-4 shadow-lg">
                <img src={logo} alt="" />
              </div>
              {/* Decorative triangles */}
              <div
                className="absolute -bottom-4 -left-4 h-16 w-16 bg-primary"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
              <div
                className="absolute -top-4 -right-4 h-16 w-16 bg-primary"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="w-1 h-16 bg-primary mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Annapurna English School
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe in student-centered learning and apart from academics,
              we also focus on extracurricular activities for their wholesome
              development.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to provide quality education that nurtures young
              minds and prepares them for future challenges. With modern
              facilities, dedicated teachers, and a supportive environment, we
              strive for excellence in every aspect of education.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
