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
      <div className="container py-5 flex justify-between items-baseline text-white fade-in pop-up">
        <h1 className="text-2xl font-bold cursor-default">Moeez.</h1>
        <div>
          <ul
            ref={ulRef}
            className="relative flex items-center font-medium  text-[10px] xs:text-sm sm:text-base"
          >
            <li
              className="cursor-pointer px-2 sm:px-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="cursor-pointer px-2 sm:px-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#capabilities">Capabilities</a>
            </li>
            <li
              className="cursor-pointer px-2 sm:px-5"
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
