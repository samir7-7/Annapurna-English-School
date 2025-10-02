import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, Target, Eye } from "lucide-react";
import AboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              About Us
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          {/* <div className="container mx-auto px-4 flex">
            <div>
              <img
                src={AboutImage}
                alt="Image of principle and a student in Dashain festival"
                loading="lazy"
                className="w-[600px]"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Annapurna English School School has been a beacon of quality
                education in Morang district since its establishment. We are
                committed to providing holistic education that nurtures academic
                excellence alongside character development.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Located in Ratuwamai-9, Morang, our institution combines
                traditional values with modern educational practices. We believe
                in creating an environment where every student can discover
                their potential and excel in their chosen path.
              </p>
            </div>
          </div> */}
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Left Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={AboutImage}
                  alt="Principal and a student in Dashain festival"
                  loading="lazy"
                  className="w-full h-auto rounded-md object-cover md:w-[75%] lg:w-[75%]"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="w-1 h-8 bg-[#81B82E] mr-3 rounded"></span>
                  ABOUT US
                </h2>

                <div className="bg-gray-50 p-6 rounded-md shadow-sm">
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Annapurna English School School has been a beacon of quality
                    education in Morang district since its establishment. We are
                    committed to providing holistic education that nurtures
                    academic excellence alongside character development.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Located in Ratuwamai-9, Morang, our institution combines
                    traditional values with modern educational practices. We
                    believe in creating an environment where every student can
                    discover their potential and excel in their chosen path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that develops critical thinking,
                  creativity, and moral values in students, preparing them to
                  become responsible citizens and future leaders who contribute
                  positively to society.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a premier educational institution that
                  excels in academic achievement, character formation, and
                  holistic development, creating well-rounded individuals ready
                  to face global challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Award className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Our Core Values</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    Striving for the highest standards in education and
                    character development.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    Upholding honesty, transparency, and ethical behavior in all
                    actions.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Embracing modern teaching methods and technology for better
                    learning.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    Creating a welcoming environment that respects diversity and
                    individual differences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
