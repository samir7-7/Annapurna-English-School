// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { Award, Target, Eye } from "lucide-react";
// import AboutImage from "@/assets/about-image.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         {/* Page Header */}
//         <section className="bg-primary py-16">
//           <div className="container mx-auto px-4">
//             <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
//               About Us
//             </h1>
//           </div>
//         </section>

//         {/* Overview */}
//         <section className="py-16">
//           <div className="container mx-auto px-4 py-12">
//             <div className="flex flex-col md:flex-row items-start gap-8">
//               {/* Left Image */}
//               <div className="w-full md:w-1/2">
//                 <img
//                   src={AboutImage}
//                   alt="Principal and a student in Dashain festival"
//                   loading="lazy"
//                   className="w-full h-auto rounded-md object-cover md:w-[75%] lg:w-[75%]"
//                 />
//               </div>

//               {/* Right Content */}
//               <div className="w-full md:w-1/2">
//                 <h2 className="text-3xl font-bold mb-6 flex items-center">
//                   <span className="w-1 h-8 bg-[#81B82E] mr-3 rounded"></span>
//                   ABOUT US
//                 </h2>

//                 <div className="bg-gray-50 p-6 rounded-md shadow-sm">
//                   <p className="text-lg text-gray-700 mb-4 leading-relaxed">
//                     Annapurna English School School has been a beacon of quality
//                     education in Morang district since its establishment. We are
//                     committed to providing holistic education that nurtures
//                     academic excellence alongside character development.
//                   </p>

//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     Located in Ratuwamai-9, Morang, our institution combines
//                     traditional values with modern educational practices. We
//                     believe in creating an environment where every student can
//                     discover their potential and excel in their chosen path.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-16 bg-accent/30">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//               <div className="bg-card p-8 rounded-lg shadow-md">
//                 <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                   <Target className="h-7 w-7 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To provide quality education that develops critical thinking,
//                   creativity, and moral values in students, preparing them to
//                   become responsible citizens and future leaders who contribute
//                   positively to society.
//                 </p>
//               </div>

//               <div className="bg-card p-8 rounded-lg shadow-md">
//                 <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                   <Eye className="h-7 w-7 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To be recognized as a premier educational institution that
//                   excels in academic achievement, character formation, and
//                   holistic development, creating well-rounded individuals ready
//                   to face global challenges.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <div className="flex items-center gap-4 mb-8">
//                 <Award className="h-10 w-10 text-primary" />
//                 <h2 className="text-3xl font-bold">Our Core Values</h2>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="border-l-4 border-primary pl-4">
//                   <h3 className="text-xl font-semibold mb-2">Excellence</h3>
//                   <p className="text-muted-foreground">
//                     Striving for the highest standards in education and
//                     character development.
//                   </p>
//                 </div>
//                 <div className="border-l-4 border-primary pl-4">
//                   <h3 className="text-xl font-semibold mb-2">Integrity</h3>
//                   <p className="text-muted-foreground">
//                     Upholding honesty, transparency, and ethical behavior in all
//                     actions.
//                   </p>
//                 </div>
//                 <div className="border-l-4 border-primary pl-4">
//                   <h3 className="text-xl font-semibold mb-2">Innovation</h3>
//                   <p className="text-muted-foreground">
//                     Embracing modern teaching methods and technology for better
//                     learning.
//                   </p>
//                 </div>
//                 <div className="border-l-4 border-primary pl-4">
//                   <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
//                   <p className="text-muted-foreground">
//                     Creating a welcoming environment that respects diversity and
//                     individual differences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default About;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import principalImage from "@/assets/principal.svg";
import libraryImage from "@/assets/library.jpg";
import labImage from "@/assets/lab.jpg";
import sportsImage from "@/assets/sports.jpg";
import artsImage from "@/assets/arts.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BookOpen,
  Heart,
  Users,
  Sparkles,
  Target,
  Trophy,
  GraduationCap,
  Lightbulb,
  Shield,
  Star,
} from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honesty and strong moral principles in all we do",
    },
    {
      icon: Heart,
      title: "Respect",
      description: "Valuing diversity and treating everyone with dignity",
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Self-control and dedication to excellence",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Encouraging innovative thinking and expression",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve common goals",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for the highest standards in everything",
    },
  ];

  const facilities = [
    {
      image: libraryImage,
      title: "Modern Library",
      description: "A vast collection of books and digital resources",
    },
    {
      image: labImage,
      title: "Science Labs",
      description: "Well-equipped labs for hands-on learning",
    },
    {
      image: sportsImage,
      title: "Sports Ground",
      description: "Spacious fields for various sports and activities",
    },
    {
      image: artsImage,
      title: "Arts & Music",
      description: "Creative spaces for artistic expression",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "State Level Recognition",
      description: "Awarded Best Academic Excellence Award",
    },
    {
      year: "2023",
      title: "Sports Championship",
      description: "Winners of Inter-School Sports Meet",
    },
    {
      year: "2022",
      title: "100% Results",
      description: "Perfect score in Class 10 Board Examinations",
    },
    {
      year: "2021",
      title: "Green School Award",
      description: "Recognized for environmental initiatives",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/504371467_2167319853694666_5627043830701953763_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4gM_j77_ALEQ7kNvwEbztMp&_nc_oc=AdnNxZLXG38fNbL7pd5RVzwmxSs4OI2JEi62_9GKPcXUdSlDcOaWdxRU0myrbnKvOHk&_nc_zt=23&_nc_ht=scontent.fbwa3-1.fna&_nc_gid=_Bqv_h0SM_VziQ-hSDL7YA&oh=00_Afcw_t0NK-ZsawqrcCvuq2Q2_H1XPPXX7SP2YvPGA9y03A&oe=68E6F121')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About Annapurna English School
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground">
              Established with a vision to nurture young minds, Annapurna
              English School has been a beacon of quality education for over two
              decades. We provide comprehensive education from Pre-Primary to
              Class 9, focusing on academic excellence, character building, and
              holistic development.
            </p>
            <p className="text-lg leading-relaxed">
              Our dedicated faculty, modern infrastructure, and child-centric
              approach ensure that every student receives the best foundation
              for their future endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-accent/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a center of excellence in education, fostering
                intellectual curiosity, creativity, and social responsibility.
                We aim to develop well-rounded individuals who are prepared to
                face global challenges with confidence and integrity.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that empowers students with
                knowledge, skills, and values. We strive to create a nurturing
                environment where every child can discover their potential and
                grow into responsible, compassionate citizens of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Annapurna English
            School
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      {/* <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              {/* Text Content with Background */}
      {/* <div className="bg-primary text-primary-foreground p-12 md:p-16 rounded-3xl md:rounded-r-none relative z-10">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                      Principal's Message
                    </h2>
                    <p className="text-primary-foreground/90 font-semibold text-lg">
                      Mrs. Sunita Sharma
                    </p>
                  </div>
                  <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
                    <p>Dear Parents and Students,</p>
                    <p>
                      It gives me immense pleasure to welcome you to Annapurna
                      English School. As the Principal, I am committed to
                      fostering an environment where every child is encouraged
                      to explore, learn, and grow to their fullest potential.
                    </p>
                    <p>
                      Education is not just about academic achievement; it's
                      about building character, developing critical thinking,
                      and nurturing compassion. At Annapurna, we believe in the
                      holistic development of our students, preparing them not
                      just for examinations, but for life itself.
                    </p>
                    <p>
                      I invite you to join us on this wonderful journey of
                      learning and discovery. Together, we will shape the
                      leaders of tomorrow.
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="font-semibold text-primary-foreground">
                      Warm regards,
                      <br />
                      Mrs. Sunita Sharma
                    </p>
                  </div>
                </div>
              </div> */}
      {/* 
              {/* Image extending beyond */}
      {/* <div className="relative md:pl-8 mt-8 md:mt-0">
                <img
                  src={principalImage}
                  alt="Principal Mrs. Sunita Sharma"
                  className="w-full h-full object-cover rounded-3xl md:rounded-l-none shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#5AB01C] h-[45vh] md:h-[60vh]  mt-24 flex items-center w-full justify-center relative ">
        {/* Background Pattern */}
        <img
          src="https://www.pngkit.com/png/full/325-3253264_pattern.png"
          alt=""
          className="invert opacity-5 w-full h-full object-cover absolute"
          loading="lazy"
        />

        <div className="w-[85%] md:w-[60%]">
          {/* MOBILE LAYOUT */}
          <div className="flex flex-col gap-3 w-full justify-between md:hidden">
            <h1 className="font-alan font-bold text-xl text-gray-100 font-sans">
              Message from our Principal
            </h1>
            <p className="text-white text-[10px] w-[62%]">
              Dear Students, Parents, and Guardians, <br />
              <br />
              At Annapurna English School, we are committed to providing quality
              education that nurtures both academic excellence and personal
              growth. Our aim is to guide students to become responsible,
              confident, and compassionate individuals prepared for the
              challenges of tomorrow. With the support of our dedicated teachers
              and parents, we strive to create a learning environment where
              every child can discover their potential and thrive.
              <br />
              <br />
              <span className="font-semibold">Warm Regards,</span>
              <br />
              <span className="font-bold">Mr. Keshab Poudel</span>
            </p>

            <div className="absolute bottom-0 w-fit -right-0">
              <img
                src={principalImage}
                className="w-[200px]"
                alt="Image of a girl with a bagpack"
                loading="lazy"
              />
            </div>
          </div>

          {/* LAPTOP LAYOUT (UNCHANGED) */}
          <div className="hidden md:flex flex-col gap-5 w-[60%] justify-center py-16">
            <h1 className="font-bold text-3xl text-gray-100 font-sans">
              Message from our Principal
            </h1>
            <p className="text-white">
              Dear Students, Parents, and Guardians, <br />
              <br />
              At Annapurna English School, we are committed to providing quality
              education that nurtures both academic excellence and personal
              growth. Our aim is to guide students to become responsible,
              confident, and compassionate individuals prepared for the
              challenges of tomorrow. With the support of our dedicated teachers
              and parents, we strive to create a learning environment where
              every child can discover their potential and thrive.
              <br />
              <br />
              <span className="font-semibold">Warm Regards,</span>
              <br />
              <span className="font-bold">Mr. Keshab Poudel</span>
            </p>

            <div className="absolute bottom-0 right-20">
              <img
                src={principalImage}
                className="w-[400px]"
                alt="Image of a girl with a bagpack"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Facilities & Environment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to enhance the learning
            experience
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-[#f4f8ee] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our journey of excellence
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex gap-6 items-center justify-center "
              >
                <div className="flex-shrink-0 justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {achievement.year}
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-lg flex-grow hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-l from-[#72A329] to-[#5A8021] rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience quality education and holistic development at Annapurna
            English School. We're here to help your child achieve their dreams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/admission">Apply for Admission</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white hover:bg-white/90 text-primary border-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
