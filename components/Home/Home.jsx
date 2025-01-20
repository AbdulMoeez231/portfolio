"use client";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Capabilities from "./Capabilities";
import Expertise from "./Expertise";
import Projects from "../Projects/Projects";
import Contact from "./Contact";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="bg-[#000000] min-h-screen">
          <HeroSection />
          <Capabilities />
          <Expertise />
          <Projects />
          <Contact />
        </div>
      ) : (
        <div className="bg-[#000000] min-h-screen">
          <Loader />
        </div>
      )}
    </>
  );
}

export default Home;
