import React from "react";
import Navbar from "../Navbar/Navbar";
import { SplineScene } from "../ui/splite";

const HeroSection = () => {
  return (
    <div className="md:min-h-screen">
      <Navbar />
      <div className="container grid grid-cols-2 fade-in md:mt-20">
        <div className="pop-up xs:mt-10">
          <h1 className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-relaxed md:!leading-[55px]">
            Hi, I'm{" "}
            <span className="text-gradient">Abdul Moeez.</span> <br />
            Full stack developer based in <br /> Lahore, Pakistan.
          </h1>
          <p className="max-md:hidden text-white text-opacity-80 max-w-[600px] leading-relaxed mt-5">
            As a developer, I enjoy making concepts come to life on the
            internet. I'm all about making enjoyable user experiences, whether
            it be by designing slick user interfaces or developing reliable
            back-end systems.
          </p>
          <p className="mt-5 text-white text-xs sm:text-base">
            Get in touch{" "}
            <span className="w-full relative">
              <a href="mailto:moeezbuttab231@gmail.com">hi@moeez.me</a>
              <div className="absolute w-full h-[2px] bg-gradient left-0 -bottom-1"></div>{" "}
            </span>
          </p>
        </div>
        <div className="relative">
          <div className="absolute !z-30 -right-[10%] top-[60%] -translate-y-1/2 w-full h-[180px] xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
