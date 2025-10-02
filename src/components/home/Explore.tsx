import React from "react";
import SchoolImage from "@/assets/schoolimage.jpg";
import { Button } from "@/components/ui/button";
function Explore() {
  return (
    <section className="h-[60vh] mb-11">
      <div className="relative h-full w-full">
        <div className="absolute bg-[#283d0b] z-[999] w-full h-full opacity-80"></div>
        <img
          src={SchoolImage}
          alt="doodle"
          className="w-full h-full object-cover absolute"
          loading="lazy"
        />
        <div className="text-gray-50 z-[8888] absolute top-1/2 left-8 -translate-y-1/2 w-[90%] md:w-[50%] lg:w-[50%] p-6 md:p-10 flex flex-col gap-6 items-start justify-center text-left">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight uppercase border-l-8 border-gray-50 pl-6">
            Shaping Minds,
            <br />
            Building Futures
          </h1>
          <p className="leading-relaxed text-sm md:text-base">
            At Annapurna English School, we believe education goes beyond
            classrooms. With dedicated teachers, innovative learning, and a
            nurturing environment, we empower every student to discover their
            potential, achieve excellence, and grow into responsible global
            citizens.
          </p>
          <Button variant="outline" className="px-7 py-5">
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Explore;
