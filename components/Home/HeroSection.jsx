import React from "react";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container flex items-end justify-between fade-in md:mt-20">
        <div className="pop-up">
          <h1
            className="text-white text-3xl sm:text-4xl font-extrabold mt-5"
            style={{ lineHeight: "55px" }}
          >
            Hi, <br className="sm:hidden" /> I'm{" "}
            <span className="text-gradient">Abdul Moeez.</span> <br />
            Full stack developer based in <br /> Lahore, Pakistan.
          </h1>
          <p className="text-white text-opacity-80 max-w-[600px] leading-relaxed mt-5">
            As a developer, I enjoy making concepts come to life on the
            internet. I'm all about making enjoyable user experiences, whether
            it be by designing slick user interfaces or developing reliable
            back-end systems.
          </p>
          <p className="mt-5 text-white">
            Get in touch{" "}
            <span className="relative">
              <div className="absolute w-full h-[2px] bg-gradient left-0 -bottom-1"></div>{" "}
              <a href="mailto:moeezbuttab231@gmail.com">hello@abdulmoeez.me</a>
            </span>
          </p>
        </div>
        <div className="max-lg:hidden">
          <div className="icon-animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="350"
              height="350"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-code"
            >
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#DD2476" />
                  <stop offset="100%" stop-color="#FF512F" />
                </linearGradient>
              </defs>
              <path stroke="url(#gradient1)" d="M7 8l-4 4l4 4" />
              <path stroke="url(#gradient1)" d="M14 4l-4 16" />
              <path stroke="url(#gradient1)" d="M17 8l4 4l-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
