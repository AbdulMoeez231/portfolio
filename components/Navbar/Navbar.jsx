"use client";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [highlightStyle, setHighlightStyle] = useState({});
  const ulRef = useRef(null);

  useEffect(() => {
    setHighlightStyle({
      width: "0px",
      height: "0px",
      left: "0px",
      opacity: "0",
    });
  }, []);

  const handleMouseEnter = (event) => {
    const liElement = event.currentTarget;
    const ulElement = ulRef.current;

    const liRect = liElement.getBoundingClientRect();
    const ulRect = ulElement.getBoundingClientRect();

    const width = liRect.width;
    const left = liRect.left - ulRect.left;

    setHighlightStyle({
      width: `${width - 30}px`,
      height: "3px",
      left: `${left + 17}px`,
      opacity: "1",
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle((prev) => ({
      ...prev,
      opacity: "0",
    }));
  };

  return (
    <>
      <div className="container max-md:pb-5 pt-5 md:pt-10 flex justify-between items-baseline text-white fade-in pop-up">
        <h1 className="text-2xl font-bold cursor-default">Moeez.</h1>
        <div className="flex gap-3 sm:gap-4 items-center">
          <ul
            ref={ulRef}
            className="relative flex items-center font-medium  text-[10px] xs:text-sm md:text-base"
          >
            <li
              className="cursor-pointer px-2 md:px-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="cursor-pointer px-2 md:px-5 max-sm:hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#capabilities">Capabilities</a>
            </li>
            <li
              className="cursor-pointer px-2 md:px-5 max-sm:hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#expertise">Expertise</a>
            </li>
            <li
              className="cursor-pointer px-2 md:px-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#contact">Contact</a>
            </li>
            <div
              className={`absolute bg-gradient -bottom-1 duration-200 z-20 max-sm:hidden`}
              style={highlightStyle}
            />
          </ul>
          <a href="https://www.upwork.com/freelancers/~010b08963f1fe8548f" target="_blank" className="gradient px-3 py-0.5 rounded-sm font-medium text-[10px] xs:text-sm md:text-base whitespace-nowrap active:scale-75 duration-200">Hire Me</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
