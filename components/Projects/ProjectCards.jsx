"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IconBrandAws,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
} from "@tabler/icons-react";

function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}

function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const imagineImagesGallary = [
  "/assets/imagine/img-2.png",
  "/assets/imagine/img-1.png",
  "/assets/imagine/img-3.png",
  "/assets/imagine/img-4.png",
  "/assets/imagine/img-5.png",
];
const furnotureImagesGallary = [
  "/assets/furniture/img-4.png",
  "/assets/furniture/img-1.jpg",
  "/assets/furniture/img-3.png",
  "/assets/furniture/img-2.png",
  "/assets/furniture/img-5.png",
];
const skinOsImagesGallary = [
  "/assets/skin-os/img-4.png",
  "/assets/skin-os/img-1.png",
  "/assets/skin-os/img-3.png",
  "/assets/skin-os/img-2.png",
  "/assets/skin-os/img-5.png",
];
const squidImagesGallary = [
  "/assets/squid-academy/img-4.png",
  "/assets/squid-academy/img-3.png",
  "/assets/squid-academy/img-1.png",
  "/assets/squid-academy/img-2.png",
  "/assets/squid-academy/img-5.png",
];
const ProjectCards = () => {
  const [windowWidth, setWindowWidth] = useState();
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
  const gridScroller = (gridElem, scroll, invert = false) => {
    const gridWrap = document.querySelector("#projects");
    const gridInner = gridElem;
    const gridWrapRect = gridWrap?.getBoundingClientRect();
    const gridInnerRect = gridInner?.getBoundingClientRect();

    const start = gridWrapRect?.top + 400;
    const end = gridWrapRect?.top + 1200 + gridWrapRect?.height + 2000;
    let progress = mapRange(start, end, scroll, 0, 1);
    progress = clamp(0, progress, 1);
    let x;
    if (windowWidth < 768) {
      x = progress * gridInnerRect?.width * 2.5;
    } else {
      x = progress * gridInnerRect?.width * 0.5;
    }
    const imagesCard = gridInner?.querySelectorAll("img");
    imagesCard.forEach((img) => {
      img.style.transform = `translateX(${invert ? -x : x}px)`;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="grid"] .grid-inner');
      sections.forEach((section) => {
        gridScroller(section, window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

  return (
    <div className="mt-10 space-y-10">
      <Link href="http://skin-os.co/" target="_blank" className={"group"}>
        <div className="mt-5 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-y-5 mb-2.5">
          <div className="ml-3 sm:ml-5 max-sm:ml-[4%] mr-6 p-5 border border-white rounded md:max-w-md text-white">
            <h4 className="text-xl font-bold font-heading text-gradient-skinos">
              Skin OS
            </h4>
            <p className="text-sm opacity-70 uppercase mt-3">2250 AI</p>
            <div className="mt-4 mb-7 line-clamp-4">
              A SaaS platform for beauty businesses utilizing AI-driven skin
              data collection, progress tracking, personalized recommendations,
              and CRM integration to enhance client care.
            </div>

            <div>
              <p className="text-sm opacity-80 mb-3">Technologies:</p>
              <div className="flex items-center gap-x-5 text-white mt-5">
                <IconBrandPhp />
                <IconBrandLaravel />
                <IconBrandReact />
                <IconBrandTailwind />
                <span className="text-sm text-white font-bold">AI</span>
              </div>
            </div>
          </div>
          <section
            className="relative w-full cursor-pointer group overflow-hidden"
            id={`grid1`}
          >
            <div
              className="grid-inner flex h-full flex-row-reverse gap-x-4 group-hover:opacity-80 transition-opacity"
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
            >
              {skinOsImagesGallary.map((image, imgIdx) => {
                return (
                  <div className="min-w-[370px] min-h-[305px]" key={imgIdx}>
                    <Image
                      src={image}
                      width={1500}
                      height={600}
                      alt="Image"
                      className="w-full h-full object-cover rounded-md "
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Link>
      <Link
        href="https://www.careerjustimagine.com/"
        target="_blank"
        className={"group mt-5"}
      >
        <div className="relative overflow-hidden flex flex-col md:flex-row md:items-center gap-y-5 mb-2.5">
          <div className="ml-3 sm:ml-5 max-sm:ml-[4%] mr-6 p-5 border border-white rounded md:max-w-md text-white">
            <h4 className="text-xl font-bold font-heading text-gradient-green">
              Just imagine careers
            </h4>
            <p className="text-sm opacity-70 uppercase mt-3">IMAGINE</p>
            <div className="mt-4 mb-7 line-clamp-4">
              A platform for searching full-time jobs and freelance projects, or
              creating recruiter accounts. Includes identity card verification
              for freelancers to ensure trust.
            </div>

            <div>
              <p className="text-sm opacity-80 mb-3">Technologies:</p>
              <div className="flex gap-x-5 text-white mt-5">
                <IconBrandMongodb />
                <IconBrandNodejs />
                <IconBrandReact />
                <IconBrandTailwind />
                <IconBrandAws />
              </div>
            </div>
          </div>
          <section
            className="relative w-full cursor-pointer group overflow-hidden"
            id={`grid1`}
          >
            <div
              className="grid-inner flex h-full flex-row-reverse gap-x-4 group-hover:opacity-80 transition-opacity"
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
            >
              {imagineImagesGallary.map((image, imgIdx) => {
                return (
                  <div className="min-w-[370px] min-h-[305px]" key={imgIdx}>
                    <Image
                      src={image}
                      width={1500}
                      height={600}
                      alt="Image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Link>
      <Link href="http://gldreamhome.com/" target="_blank" className={"group"}>
        <div className="mt-5 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-y-5 mb-2.5">
          <div className="ml-3 sm:ml-5 max-sm:ml-[4%] mr-6 p-5 border border-white rounded md:max-w-md text-white">
            <h4 className="text-xl font-bold font-heading text-gradient-orange">
              Guideline dream home
            </h4>
            <p className="text-sm opacity-70 uppercase mt-3">FURNITURE</p>
            <div className="mt-4 mb-7 line-clamp-4">
              A furniture store with Stripe integration for secure payments and
              advanced filtering options for easy product discovery.
            </div>

            <div>
              <p className="text-sm opacity-80 mb-3">Technologies:</p>
              <div className="flex gap-x-5 text-white mt-5">
                <IconBrandMongodb />
                <IconBrandNodejs />
                <IconBrandReact />
                <IconBrandStripe />
                <IconBrandTailwind />
              </div>
            </div>
          </div>
          <section
            className="relative w-full cursor-pointer group overflow-hidden"
            id={`grid1`}
          >
            <div
              className="grid-inner flex h-full flex-row-reverse gap-x-4 group-hover:opacity-80 transition-opacity"
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
            >
              {furnotureImagesGallary.map((image, imgIdx) => {
                return (
                  <div className="min-w-[370px] min-h-[280px]" key={imgIdx}>
                    <Image
                      src={image}
                      width={1500}
                      height={600}
                      alt="Image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Link>
      <Link href="https://squid.academy/" target="_blank" className={"group"}>
        <div className="mt-5 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-y-5 mb-2.5">
          <div className="ml-3 sm:ml-5 max-sm:ml-[4%] mr-6 p-5 border border-white rounded md:max-w-md text-white">
            <h4 className="text-xl font-bold font-heading text-gradient-squid">
              Squid Academy
            </h4>
            <p className="text-sm opacity-70 uppercase mt-3">SQUID</p>
            <div className="mt-4 mb-7 line-clamp-4">
              A project built in Next.js with server-side rendering, integrated
              CMS for blogs, and an exceptional user interface.
            </div>

            <div>
              <p className="text-sm opacity-80 mb-3">Technologies:</p>
              <div className="flex gap-x-5 text-white mt-5">
                <IconBrandMongodb />
                <IconBrandJavascript />
                <IconBrandNextjs />
                <IconBrandTailwind />
                <IconBrandAws />
              </div>
            </div>
          </div>
          <section
            className="relative w-full cursor-pointer group overflow-hidden"
            id={`grid1`}
          >
            <div
              className="grid-inner flex h-full flex-row-reverse gap-x-4 group-hover:opacity-80 transition-opacity"
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
            >
              {squidImagesGallary.map((image, imgIdx) => {
                return (
                  <div className="min-w-[370px] min-h-[280px]" key={imgIdx}>
                    <Image
                      src={image}
                      width={1500}
                      height={600}
                      alt="Image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCards;
