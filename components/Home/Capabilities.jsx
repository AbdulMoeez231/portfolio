import React from "react";
import Marquee from "react-fast-marquee";
import html from "@/public/assets/skills/html.svg";
import react from "@/public/assets/skills/react.png";
import css from "@/public/assets/skills/css.svg";
import js from "@/public/assets/skills/js.svg";
import next from "@/public/assets/skills/next.svg";
import sass from "@/public/assets/skills/sass.svg";
import bootstrap from "@/public/assets/skills/bootstrap.svg";
import mui from "@/public/assets/skills/mui.svg";
import figma from "@/public/assets/skills/figma.svg";
import shopify from "@/public/assets/skills/shopify.svg";
import mongodb from "@/public/assets/skills/mongodb.svg";
import expressjs from "@/public/assets/skills/expressjs.svg";
import nodejs from "@/public/assets/skills/nodejs.svg";
import gsap from "@/public/assets/skills/gsap.svg";
import Image from "next/image";

const Capabilities = () => {
  return (
    <>
      <div className="pt-14 md:pt-5 pb-5 md:pb-14" id="capabilities">
        <h1 className="text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
          SKILLS
        </h1>
        <div className="py-14 md:py-20">
          <Marquee pauseOnHover>
            <div className="flex gap-x-14 md:gap-x-28">
              <Image
                src={html}
                alt="Html logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
              />
              <Image
                src={css}
                alt="css logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
              />
              <Image
                src={js}
                alt="JS logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
              />
              <Image
                src={react}
                alt="React logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Image
                src={next}
                alt="NextJs logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Image
                src={sass}
                alt="SASS logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Image
                src={bootstrap}
                alt="Bootstrap logo"
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] mr-10"
              />
            </div>
          </Marquee>
          <div className="mt-14 md:mt-20">
            <Marquee pauseOnHover direction="right">
              <div className="flex gap-x-14 md:gap-x-28">
                <Image
                  src={mui}
                  alt="MUI logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={figma}
                  alt="Figma logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={shopify}
                  alt="Shopify logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={mongodb}
                  alt="MongoDB logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={expressjs}
                  alt="ExpressJS logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={nodejs}
                  alt="NodeJS logo"
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src={gsap}
                  alt="GSAP logo"
                  className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-10"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
