import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image2.svg";
import SchoolDoodles from "@/assets/School Doodles.svg";

const HeroSection = () => {
  return (
    <section className="bg-primary w-full h-[70vh] md:h-[80vh] relative flex justify-center items-center overflow-hidden">
      {/* Background doodles */}
      <img
        src={SchoolDoodles}
        alt="doodle"
        className="invert opacity-10 w-full h-full object-cover absolute"
        loading="lazy"
      />

      {/* Content Wrapper */}
      <div className="relative h-full w-[90%] px-2 md:px-32 flex flex-col justify-start md:justify-center gap-4 md:gap-5">
        {/* Heading & Text */}
        <div className="text-gray-100 w-fit h-[40%] md:h-[50%] flex flex-col justify-center gap-3 md:gap-7 mt-10 md:mt-0">
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="text-3xl md:text-6xl font-bold tracking-wider">
              500+ STUDENTS
            </h1>
            <h1 className="text-3xl md:text-6xl font-bold tracking-wider">
              TRUST US
            </h1>
          </div>

          <p className="text-md md:text-xl">
            Our goal is to make <br className="md:hidden" />
            education accessible for <br className="md:hidden" />
            everyone
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 w-[40%] md:w-fit">
          <Button
            variant="admission"
            className="bg-gray-50 text-[#81B82E] hover:bg-none hover:text-white"
          >
            Admission
          </Button>
          <Button variant="outline">Learn More →</Button>
        </div>

        {/* Hero Image */}
        <div className="absolute bottom-0 -right-14 md:right-10">
          <img
            src={heroImage}
            width={280}
            className="md:w-[480px]"
            alt="Picture of a girl carrying volleyball"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    // <section className="bg-primary w-full h-[70vh] relative flex justify-center items-center overflow-hidden">
    //   <img
    //     src={SchoolDoodles}
    //     alt="doodle"
    //     className="invert opacity-10 w-full h-full object-cover absolute"
    //     loading="lazy"
    //   />
    //   <div className="relative h-full w-[90%] px-2  flex flex-col justify-start gap-4">
    //     {" "}
    //     <div className="text-gray-100 w-fit h-[40%] flex flex-col justify-center gap-3 mt-10">
    //       <div className="flex flex-col gap-2">
    //         <h1 className="text-3xl font-bold line tracking-wider">
    //           500+ STUDENTS
    //         </h1>{" "}
    //         <h1 className="text-3xl font-bold line tracking-wider">
    //           {" "}
    //           TRUST US
    //         </h1>
    //       </div>

    //       <p className="text-md">
    //         Our goal is to make <br />
    //         education accessable for <br />
    //         everyone
    //       </p>
    //     </div>{" "}
    //     <div className="flex gap-6 flex-col w-[40%]">
    //       <Button
    //         variant="admission"
    //         className="bg-gray-50 text-[#81B82E] hover:bg-none hover:text-white"
    //       >
    //         Admission
    //       </Button>{" "}
    //       <Button variant="outline">Learn More →</Button>
    //     </div>
    //     <div className="absolute bottom-0 -right-14">
    //       <img
    //         src={heroImage}
    //         width={280}
    //         alt="Picture of a girl carrying volleyball"
    //         loading="lazy"
    //       />
    //     </div>
    //   </div>
    // </section>

    // {/* <section className="bg-primary w-full h-[80vh] relative flex justify-center items-center overflow-hidden">
    //       <img
    //         src={SchoolDoodles}
    //         alt="doodle"
    //         className="invert opacity-10 w-full h-full object-cover absolute"
    //         loading="lazy"
    //       />
    //       <div className="relative h-full w-[90%] px-32  flex flex-col justify-center gap-5">
    //         {" "}
    //         <div className="text-gray-100 w-fit h-[50%] flex flex-col justify-center gap-7 ">
    //           <div className="flex flex-col gap-6">
    //             <h1 className="text-6xl font-bold line tracking-wider">
    //               500+ STUDENTS
    //             </h1>{" "}
    //             <h1 className="text-6xl font-bold line tracking-wider">
    //               {" "}
    //               TRUST US
    //             </h1>
    //           </div>

    //           <p className="text-xl">
    //             Our goal is to make education accessable
    //             <br />
    //             for everyone
    //           </p>
    //         </div>{" "}
    //         <div className="flex gap-6">
    //           <Button
    //             variant="admission"
    //             className="bg-gray-50 text-[#81B82E] hover:bg-none hover:text-white"
    //           >
    //             Admission
    //           </Button>{" "}
    //           <Button variant="outline">Learn More →</Button>
    //         </div>
    //         <div className="absolute bottom-0 right-10">
    //           <img
    //             src={heroImage}
    //             width={480}
    //             alt="Picture of a girl carrying volleyball"
    //             loading="lazy"
    //           />
    //         </div>
    //       </div>
    //     </section> */}
  );
};

export default HeroSection;
