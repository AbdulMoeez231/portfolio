import { IconArrowUp } from "@tabler/icons-react";
import { IoMailOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#1E1F1C]">
        <div className="container py-10 md:py-20">
          <h1 className="text-white font-bold text-base sm:text-xl text-center">
            WHAT I DO
          </h1>
          <h1 className="text-center text-2xl lg:text-4xl expertise-text-gradient mt-10 uppercase font-black leading-loose">
            Turning Aspirations into Achievements
          </h1>
        </div>
      </div>
      <div
        className="container py-10 flex flex-col md:flex-row items-start justify-between gap-y-10"
        id="contact"
      >
        <div>
          <h2 className="text-neutral-400">
            Thanks for reading this far, let's collaborate.
          </h2>
          <p className="text-white mt-3">
            To begin developing your next great idea,{" "}
            <span className="relative whitespace-nowrap">
              <a href="mailto:moeezbuttab231@gmail.com">send me an email</a>
              <div className="absolute w-full h-[2px] bg-gradient left-0 -bottom-1"></div>{" "}
            </span>
          </p>
        </div>
        <div className="text-white text-xl flex gap-4">
          <a
            href="https://github.com/AbdulMoeez231/"
            target="_blank"
            className="border-[2px] border-neutral-400 p-2 rounded-full hover:border-white duration-500 cursor-pointer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-moeez-6303a524b/"
            target="_blank"
            className="border-[2px] border-neutral-400 p-2 rounded-full hover:border-white duration-500 cursor-pointer"
          >
            <RiLinkedinLine />
          </a>
          <a
            href="https://wa.me/923334186908"
            target="_blank"
            className="border-[2px] border-neutral-400 p-2 rounded-full hover:border-white duration-500 cursor-pointer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:moeezbuttab231@gmail.com"
            target="_blank"
            className="border-[2px] border-neutral-400 p-2 rounded-full hover:border-white duration-500 cursor-pointer"
          >
            <IoMailOutline />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
