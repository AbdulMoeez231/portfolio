"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import SpotlightCard from "../Global/SpotlightCard";
import { projects } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCards = () => {
  const [windowWidth, setWindowWidth] = useState();
  const cardRefs = useRef([]);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(
        Math.min(window.innerWidth, document.documentElement.offsetWidth)
      );
    };

    window.addEventListener("resize", onResize, false);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      const section = document.querySelector(`#grid${idx + 1}`);
      if (section) {
        card.style.height = `${section.offsetHeight}px`;
      }
    });
  }, [windowWidth]);

  useEffect(() => {
    const sections = document.querySelectorAll('[id^="grid"] .grid-inner');
    sections.forEach((section, idx) => {
      const images = section.querySelectorAll("img");
      gsap.to(images, {
        xPercent: -100 * (images.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
          snap: 1 / (images.length - 1),
        },
      });
    });
  }, [windowWidth]);

  return (
    <div className="mt-10 space-y-10">
      {projects.map((project, idx) => (
        <div className="group" key={idx}>
          <div
            className="mt-5 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-y-5 mb-2.5"
          >
            <div
              className="relative ml-3 sm:ml-5 max-sm:ml-[4%] mr-6 border border-white rounded-md md:max-w-md text-white"
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <SpotlightCard className="custom-spotlight-card w-full">
                <Link href={project.link} target="_blank" className="absolute top-5 right-5">
                  <ExternalLink size={20} />
                </Link>
                <h4 className={`text-xl font-bold font-heading ${project.gradientClass}`}>
                  {project.title}
                </h4>
                <p className="text-sm opacity-70 uppercase mt-3">{project.category}</p>
                <div className="mt-4 mb-7 line-clamp-4">
                  {project.description}
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-3">Technologies:</p>
                  <div className="flex items-center gap-x-5 text-white mt-5">
                    {project.technologies}
                  </div>
                </div>
              </SpotlightCard>
            </div>
            <section
              className="relative w-full cursor-pointer group overflow-hidden"
              id={`grid${idx + 1}`}
            >
              <div
                className="grid-inner flex h-full flex-row-reverse gap-x-4 "
                data-scroll
                data-scroll-speed="-6"
                data-scroll-direction="horizontal"
              >
                {project.images.map((image, imgIdx) => (
                  <div className="min-w-[370px] min-h-[305px]" key={imgIdx}>
                    <Image
                      src={image}
                      width={1500}
                      height={600}
                      alt="Image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
